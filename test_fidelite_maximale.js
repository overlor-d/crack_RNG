const crypto = require('crypto');
const bitcoin = require('bitcoinjs-lib');

const g0 = global; 
const ae = g0.Buffer;
const pl = g0.Buffer;

function Wv(f) { if (f === void 0) return; const cleaned = f.trim().toLowerCase(); return cleaned.length > 0 ? cleaned : void 0; }
function bl(buf) { return crypto.createHash('sha256').update(crypto.createHash('sha256').update(buf).digest()).digest(); }
function $v(seed) { let state = seed >>> 0; return () => { state = Math.imul(1664525, state) + 1013904223 >>> 0; return state / 4294967296; }; }
function Pv(seed, func) { const originalRandom = Math.random; Math.random = $v(seed); try { return func(); } finally { Math.random = originalRandom; } }

function tp(u, f) {
    var r = Wv(f);
    var c = pl.from(r ? u + ":" + r : u, "utf8");
    var s = bl(c).readUInt32LE(0);
    var p = pl.alloc(32);
    Pv(s, (function() {
        for (var i = 0; i < p.length; i++) p[i] = Math.floor(256 * Math.random())
    }));
    for (var x = pl.from(bl(p)), Jv = 1500; 0 < Jv; Jv--) x = pl.from(bl(x));
    function fy(keyBuffer) {
        try {
            bitcoin.ECPair.fromPrivateKey(keyBuffer, { network: bitcoin.networks.testnet });
            return true;
        } catch (e) {
            return false; 
        }
    }

    for (; !fy(x); ) x = pl.from(bl(x));
    return x;
}

function ep(u, f) {
  const privateKeyBytes = tp(u, f);
  const keyPair = bitcoin.ECPair.fromPrivateKey(privateKeyBytes, { network: bitcoin.networks.testnet });
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: bitcoin.networks.testnet });
  return { address, privateKeyWIF: keyPair.toWIF(), timestamp: u };
}

const TARGET_ADDRESS = 'mp4KFkrvDC638Gar7KhFjNhto7L8cqVFe7';
const TIMESTAMP_CONSOLE = 1771453166549;
const OFFSET_MS = 1200;
const PLAGE_S = 5;

console.log(`Cible : ${TARGET_ADDRESS}`);
console.log(`Timestamp de référence : ${TIMESTAMP_CONSOLE} (${new Date(TIMESTAMP_CONSOLE).toISOString()})`);
console.log(`Offset théorique : ${OFFSET_MS}ms`);
console.log(`Plage de recherche : +/- ${PLAGE_S} secondes`);
console.log('\n--- Début de la recherche (FIDÉLITÉ MAXIMALE) ---');

const start_ts = TIMESTAMP_CONSOLE - (PLAGE_S * 1000);
const end_ts = TIMESTAMP_CONSOLE + (PLAGE_S * 1000);

let found = false;

for (let ts = start_ts; ts <= end_ts; ts++) {
  const ts_with_offset = ts + OFFSET_MS;
  try {
    const wallet = ep(ts_with_offset, undefined);
    if (wallet.address === TARGET_ADDRESS) {
      console.log('\nTROUVÉ');
      console.log(`--------------------------------------------------`);
      console.log(`Timestamp (ms) utilisé : ${ts_with_offset}`);
      console.log(`Date/Heure           : ${new Date(ts_with_offset).toISOString()}`);
      console.log(`Décalage réel        : ${ts_with_offset - TIMESTAMP_CONSOLE}ms`);
      console.log(`Adresse              : ${wallet.address}`);
      console.log(`Privkey (WIF)        : ${wallet.privateKeyWIF}`);
      console.log(`--------------------------------------------------`);
      console.log('\n>>> Le bug était subtil et dans la réécriture du code. <<<');
      found = true;
      break;
    }
  } catch (e) {
  }
  if ((ts - start_ts) % 1000 === 0) {
    console.error(`[PROGRESS] Test de ${new Date(ts).toISOString()}...`);
  }
}

if (!found) {
  console.log('\nAucune correspondance trouvée.');
  console.log("À ce stade, le problème pourrait être une différence d'environnement irréductible (Node.js vs Navigateur) ou un salt.");
}