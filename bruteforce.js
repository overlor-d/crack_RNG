// bruteforce.js
const crypto = require('crypto');

const TARGET_ADDRESS = 'mwxn6XXHCeP5baXQcyWLEX5AwL6azLRoeG';

function sha256(data) {
  return crypto.createHash('sha256').update(data).digest();
}

function lcg(seed) {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function normalizeSalt(salt) {
  if (salt === undefined || salt === null) return undefined;
  const f = salt.trim().toLowerCase();
  return f.length > 0 ? f : undefined;
}

function isValidPrivateKey(bytes) {
  if (bytes.length !== 32) return false;
  let allZero = true;
  for (let i = 0; i < 32; i++) {
    if (bytes[i] !== 0) { allZero = false; break; }
  }
  if (allZero) return false;
  const n = Buffer.from('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 'hex');
  for (let i = 0; i < 32; i++) {
    if (bytes[i] < n[i]) return true;
    if (bytes[i] > n[i]) return false;
  }
  return false;
}

function getCompressedPublicKey(privKey) {
  const ecdh = crypto.createECDH('secp256k1');
  ecdh.setPrivateKey(privKey);
  const uncompressed = ecdh.getPublicKey();
  const x = uncompressed.slice(1, 33);
  const y = uncompressed.slice(33, 65);
  const prefix = (y[31] & 1) === 0 ? 0x02 : 0x03;
  return Buffer.concat([Buffer.from([prefix]), x]);
}

function derivePrivateKey(timestamp, salt) {
  const r = normalizeSalt(salt);
  const c = Buffer.from(r ? `${timestamp}:${r}` : `${timestamp}`, 'utf8');
  const b = sha256(c).readUInt32LE(0);
  const p = Buffer.alloc(32);
  const rng = lcg(b);
  for (let i = 0; i < 32; i++) {
    p[i] = Math.floor(rng() * 256);
  }
  let x = Buffer.from(sha256(p));
  for (let i = 0; i < 1500; i++) {
    x = Buffer.from(sha256(x));
  }
  while (!isValidPrivateKey(x)) {
    x = Buffer.from(sha256(x));
  }
  return x;
}

function hash160(data) {
  return crypto.createHash('ripemd160').update(sha256(data)).digest();
}

function base58encode(buf) {
  const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let num = BigInt('0x' + buf.toString('hex'));
  let res = '';
  while (num > 0n) {
    res = alphabet[Number(num % 58n)] + res;
    num = num / 58n;
  }
  for (const byte of buf) {
    if (byte === 0) res = '1' + res;
    else break;
  }
  return res;
}

function toAddress(pubkey) {
  const h = hash160(pubkey);
  const payload = Buffer.concat([Buffer.from([0x6f]), h]);
  const checksum = sha256(sha256(payload)).slice(0, 4);
  return base58encode(Buffer.concat([payload, checksum]));
}

function toWIF(privKey) {
  const payload = Buffer.concat([Buffer.from([0xef]), privKey, Buffer.from([0x01])]);
  const checksum = sha256(sha256(payload)).slice(0, 4);
  return base58encode(Buffer.concat([payload, checksum]));
}

function generateAddress(salt, timestamp) {
  const privKey = derivePrivateKey(timestamp, salt);
  const pubkey = getCompressedPublicKey(privKey);
  return { address: toAddress(pubkey), privKey };
}

// -------------------------------------------------------
// BRUTE FORCE
// -------------------------------------------------------
function bruteforce(salt) {
  const endTimestamp = new Date('2026-02-17T13:32:18.000Z').getTime();
  const twoHoursMs = 2 * 60 * 60 * 1000;
  const startTimestamp = endTimestamp - twoHoursMs;

  const total = endTimestamp - startTimestamp;
  let checked = 0;
  const startTime = Date.now();

  console.log(`Brute-force démarré`);
  console.log(`Salt : "${salt}"`);
  console.log(`Cible : ${TARGET_ADDRESS}`);
  console.log(`Plage : ${new Date(startTimestamp).toISOString()} → ${new Date(endTimestamp).toISOString()}`);
  console.log(`Total : ${total.toLocaleString()} timestamps à tester\n`);

  for (let ts = startTimestamp; ts <= endTimestamp; ts++) {
    const { address, privKey } = generateAddress(salt, ts);

    if (address === TARGET_ADDRESS) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`\nTROUVÉ\n`);
      console.log(`Adresse    : ${address}`);
      console.log(`Clé privée : ${toWIF(privKey)}`);
      console.log(`Salt       : ${salt}`);
      console.log(`Timestamp  : ${ts}`);
      console.log(`Date       : ${new Date(ts).toISOString()}`);
      console.log(`Trouvé en  : ${elapsed}s (${checked.toLocaleString()} essais)`);
      return { address, wif: toWIF(privKey), timestamp: ts };
    }

    checked++;
    if (checked % 10000 === 0) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      const speed = Math.floor(checked / (elapsed || 1));
      const remaining = Math.floor((total - checked) / (speed || 1));
      const pct = ((checked / total) * 100).toFixed(2);
      process.stdout.write(`\r${pct}% | ${checked.toLocaleString()}/${total.toLocaleString()} | ${speed}/s | ETA: ${remaining}s   `);
    }
  }

  console.log(`\n\nNon trouvé dans la plage avec le salt "${salt}"`);
  return null;
}

// -------------------------------------------------------
// CLI
// -------------------------------------------------------
if (require.main === module) {
  const salt = process.argv[2] || 'neuromancer';
  console.log('');
  bruteforce(salt);
}

module.exports = { bruteforce, generateAddress, toWIF };