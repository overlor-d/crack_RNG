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



const TEST_TIMESTAMP_MS = 1700000000000;
const TEST_SALT = undefined;

console.log(`Test de la génération de clé avec :`);
console.log(`- Timestamp: ${TEST_TIMESTAMP_MS}`);
console.log(`- Salt: ${TEST_SALT}`);

const wallet1 = ep(TEST_TIMESTAMP_MS, TEST_SALT);
console.log(`\n--- Génération 1 ---`);
console.log(`Adresse: ${wallet1.address}`);
console.log(`Privkey (WIF): ${wallet1.privateKeyWIF}`);

const wallet2 = ep(TEST_TIMESTAMP_MS, TEST_SALT);
console.log(`\n--- Génération 2 ---`);
console.log(`Adresse: ${wallet2.address}`);
console.log(`Privkey (WIF): ${wallet2.privateKeyWIF}`);

if (wallet1.address === wallet2.address && wallet1.privateKeyWIF === wallet2.privateKeyWIF) {
  console.log("\nUCCÈS: La génération est déterministe.");
  console.log("Le bug n'est PAS dans la logique de tes fonctions.");
  console.log("Le problème vient très probablement du TIMESTAMP ou du SALT que tu utilises dans ton script de brute-force.");
} else {
  console.log("\nÉCHEC: La génération n'est pas déterministe.");
  console.log("Il y a un bug dans tes fonctions tp() ou ep().");
}