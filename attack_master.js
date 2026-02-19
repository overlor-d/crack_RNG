// attack_master.js

const { Worker, isMainThread } = require('worker_threads');
const os = require('os');
const path = require('path');

const TARGET_ADDRESS = 'mwxn6XXHCeP5baXQcyWLEX5AwL6azLRoeG';
const SALT_TO_USE = '123456';
const CREATION_UNIX_MS = Date.parse('2026-02-18T22:10:00Z');
const WINDOW_MS = 2 * 3600 * 1000;

// ----------------------------------------------------------------------
// LOGIQUE D'EXÉCUTION DU MASTER
// ----------------------------------------------------------------------
if (isMainThread) {
    const start = CREATION_UNIX_MS - WINDOW_MS;
    const end = CREATION_UNIX_MS;
    const totalMilliseconds = end - start;
    const numCPUs = os.cpus().length;
    const chunkSize = Math.ceil(totalMilliseconds / numCPUs);

    let workers = [];
    let found = false;
    let totalChecked = 0;
    let activeWorkers = numCPUs;
    let progressUpdateInterval;

    console.log(`Lancement de l'attaque sur ${numCPUs} threads...`);
    console.log(`Plage de temps : ${totalMilliseconds.toLocaleString()} millisecondes à tester.\n`);

    const updateGlobalProgress = () => {
        const percentage = (totalChecked / totalMilliseconds * 100).toFixed(2);
        const barLength = 30;
        const filledLength = Math.round(barLength * percentage / 100);
        const bar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength);
        process.stdout.write(`\rProgression Globale: [${bar}] ${percentage}% (${totalChecked.toLocaleString()} / ${totalMilliseconds.toLocaleString()})`);
    };

    progressUpdateInterval = setInterval(updateGlobalProgress, 500);

    for (let i = 0; i < numCPUs; i++) {
        const workerStart = start + (i * chunkSize);
        const workerEnd = Math.min(workerStart + chunkSize, end);

        const worker = new Worker(path.resolve(__dirname, 'attack_worker.js'), {
            workerData: { 
                start_ts: workerStart, 
                end_ts: workerEnd, 
                salt: SALT_TO_USE, 
                targetAddress: TARGET_ADDRESS, 
                workerIndex: i 
            }
        });

        worker.on('message', (result) => {
            if (result.type === 'progress') {
                totalChecked += result.checked;
            } else if (result.type === 'result') {
                activeWorkers--;
                if (result.found && !found) {
                    found = true;
                    clearInterval(progressUpdateInterval);
                    console.log('\n\nCLÉ TROUVÉE');
                    console.log(`--------------------------------------------------`);
                    console.log(`Salt utilisé     : "${SALT_TO_USE}"`);
                    console.log(`Timestamp (ms)  : ${result.wallet.timestamp}`);
                    console.log(`Date/Heure      : ${new Date(result.wallet.timestamp).toISOString()}`);
                    console.log(`Adresse         : ${result.wallet.address}`);
                    console.log(`Privkey (WIF)   : ${result.wallet.privateKeyWIF}`);
                    console.log(`--------------------------------------------------`);
                    workers.forEach(w => w.terminate());
                } else if (!found && activeWorkers === 0) {
                    clearInterval(progressUpdateInterval);
                    console.log('\n\n[ATTAQUE ÉCHOUÉE] Aucune correspondance trouvée.');
                }
            }
        });
        workers.push(worker);
    }

} else {
}