const crypto = require('crypto');
const bitcoin = require('bitcoinjs-lib');
const fs = require('fs');

function Wv(f) { if (f === void 0) return; const cleaned = f.trim().toLowerCase(); return cleaned.length > 0 ? cleaned : void 0; }
function bl(buf) { return crypto.createHash('sha256').update(crypto.createHash('sha256').update(buf).digest()).digest(); }
function $v(seed) { let state = seed >>> 0; return () => { state = Math.imul(1664525, state) + 1013904223 >>> 0; return state / 4294967296; }; }
function Pv(seed, func) { const originalRandom = Math.random; Math.random = $v(seed); try { return func(); } finally { Math.random = originalRandom; } }
function tp(u, f) {
    const r = Wv(f);
    const baseStr = r ? `${u}:${r}` : `${u}`;
    const c = Buffer.from(baseStr, 'utf8');
    const seed = bl(c).readUInt32LE(0);
    const p = Buffer.alloc(32);
    Pv(seed, () => { for (let i = 0; i < p.length; i++) p[i] = Math.floor(256 * Math.random()); });
    for (var x = Buffer.from(bl(p)), Jv = 1500; 0 < Jv; Jv--) x = Buffer.from(bl(x));
    while (true) {
        try {
            bitcoin.ECPair.fromPrivateKey(x, { network: bitcoin.networks.testnet });
            return x;
        } catch (e) {
            x = Buffer.from(bl(x));
        }
    }
}


const TIMESTAMP_FIXE = Date.parse('2026-02-18T22:10:00Z');

let salts;
try {
    const saltList = fs.readFileSync('rockyou.txt', 'utf8');
    salts = saltList.split('\n').filter(s => s.length > 0);
    console.error(`[INFO] Recherche du salt qui produit une clé privée valide...`);
    console.error(`[INFO] Timestamp de référence : ${TIMESTAMP_FIXE}`);
    console.error(`[INFO] Test de ${salts.length} sels depuis rockyou.txt...\n`);
} catch (e) {
    console.error("[ERREUR] Impossible de charger rockyou.txt.");
    process.exit(1);
}

for (let i = 0; i < salts.length; i++) {
    const salt = salts[i];
    if (i > 0 && i % 50000 === 0) {
        console.error(`[PROGRESS] Testé ${i}/${salts.length} sels...`);
    }

    try {
        const privateKeyBytes = tp(TIMESTAMP_FIXE, salt);
        
        const keyPair = bitcoin.ECPair.fromPrivateKey(privateKeyBytes, { network: bitcoin.networks.testnet });
        const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: bitcoin.networks.testnet });

        console.log('\nSALT TROUVÉ');
        console.log(`--------------------------------------------------`);
        console.log(`Salt utilisé     : "${salt}"`);
        console.log(`Timestamp testé : ${TIMESTAMP_FIXE}`);
        console.log(`Adresse générée: ${address}`);
        console.log(`Privkey (WIF)   : ${keyPair.toWIF()}`);
        console.log(`--------------------------------------------------`);
        console.log('\nCe salt produit une clé privée valide. C\'est très certainement le bon.');
        return;

    } catch (e) {
    }
}

console.error('\n[ÉCHEC] Aucun salt dans rockyou.txt n\'a produit de clé privée valide avec ce timestamp.');