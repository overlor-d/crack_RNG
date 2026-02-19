const crypto = require('crypto');
const bitcoin = require('bitcoinjs-lib');

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
  const r = Wv(f);
  const baseStr = r ? `${u}:${r}` : `${u}`;
  const c = Buffer.from(baseStr, 'utf8');
  const seed = bl(c).readUInt32LE(0);
  const p = Buffer.alloc(32);

  Pv(seed, () => {
    for (let i = 0; i < p.length; i++) {
      p[i] = Math.floor(Math.random() * 256);
    }
  });

  let x = Buffer.from(bl(p));
  const Jv = 1500;
  for (let i = 0; i < Jv; i++) {
    x = Buffer.from(bl(x));
  }

  while (true) {
    try {
      bitcoin.ECPair.fromPrivateKey(x, { network: bitcoin.networks.testnet });
      break;
    } catch (e) {
      x = Buffer.from(bl(x));
    }
  }
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

console.log(`Cible : ${TARGET_ADDRESS}`);
console.log(`Timestamp mesuré dans la console : ${TIMESTAMP_CONSOLE} (${new Date(TIMESTAMP_CONSOLE).toISOString()})`);
console.log(`\nTest des timestamps autour de cette valeur (avec et sans le décalage de 1200ms)...`);

const timestamps_to_test = [
  TIMESTAMP_CONSOLE,
  TIMESTAMP_CONSOLE + 1200,
  TIMESTAMP_CONSOLE - 100,
  TIMESTAMP_CONSOLE + 100,
  TIMESTAMP_CONSOLE + 1300,
];

for (const ts of timestamps_to_test) {
  try {
    const wallet = ep(ts, undefined);
    console.log(`\n[TEST] Timestamp: ${ts} (${new Date(ts).toISOString()})`);
    console.log(`       -> Adresse: ${wallet.address}`);

    if (wallet.address === TARGET_ADDRESS) {
      console.log('\nTROUVÉ');
      console.log(`--------------------------------------------------`);
      console.log(`Timestamp (ms) : ${ts}`);
      console.log(`Décalage      : ${ts - TIMESTAMP_CONSOLE}ms`);
      console.log(`Date/Heure    : ${new Date(ts).toISOString()}`);
      console.log(`Adresse       : ${wallet.address}`);
      console.log(`Privkey (WIF) : ${wallet.privateKeyWIF}`);
      console.log(`--------------------------------------------------`);
      console.log('\n>>> Le script est validé. Tu peux maintenant lancer le brute-force sur l\'adresse cible en utilisant ce décalage. <<<');
      process.exit(0);
    }
  } catch (e) {
    console.error(`Erreur avec le timestamp ${ts}: ${e.message}`);
  }
}

console.log('\nAucune correspondance trouvée avec les timestamps testés.');
console.log("Le décalage de temps est peut-être plus grand ou le site utilise un autre mécanisme.");