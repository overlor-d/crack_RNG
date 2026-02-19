// generator.js réplique du code obfusqué
const crypto = require('crypto');

// sha256
function sha256(data) {
  return crypto.createHash('sha256').update(data).digest();
}

// réplique de $v() et aussi de la fonction dans le sujet
function customMathRandom(seed) {
  let state = seed >>> 0;
  return () => {
      state = (Math.imul(1664525, state) + 1013904223) >>> 0;
      return state / 0x100000000;
  };
}

// Normalisation du salt réplique de Wv()
function normalizeSalt(salt) {
  if (salt === undefined || salt === null) return undefined;
  const f = salt.trim().toLowerCase();
  return f.length > 0 ? f : undefined;
}

// vérification clé privée réplique de fy()/uy()
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

// clé publique compressée Node.js ECDH natif
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
  const rng = customMathRandom(b);
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

function generateWallet({ salt, timestamp }) {
  const privKey = derivePrivateKey(timestamp, salt);
  const pubkey = getCompressedPublicKey(privKey);
  const address = toAddress(pubkey);
  const privateKeyWIF = toWIF(privKey);
  const saltHash = salt ? sha256(Buffer.from(salt)).toString('hex') : null;
  return { address, privateKeyWIF, saltHash, timestamp };
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const salt = args[0] || undefined;
  const timestamp = args[1] ? parseInt(args[1], 10) : Date.now();
  const wallet = generateWallet({ salt, timestamp });
  console.log('wallet généré :\n');
  console.log(`adresse : ${wallet.address}`);
  console.log(`clé privée : ${wallet.privateKeyWIF}`);
  if (wallet.saltHash) console.log(`salt (SHA-256) : ${wallet.saltHash}`);
  console.log(`timestamp: ${wallet.timestamp}`);
}

module.exports = { generateWallet };