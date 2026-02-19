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

function secretFromPRNG(initialState) {
  Math.random = $v(initialState);
  
  let secretBytes = [];
  for (let i = 0; i < 16; i++) {
    const randomFloat = Math.random();
    const state = Math.floor(randomFloat * 4294967296);
    secretBytes.push(state & 0xff);
  }
  
  return Buffer.from(secretBytes).toString('hex');
}

const requestId = '9611afc8';
const initialState = parseInt(requestId, 16);

console.log(`RequestId (hex): ${requestId}`);
console.log(`RequestId (dec): ${initialState}`);
console.log(`État initial du PRNG: 0x${initialState.toString(16).padStart(8, '0')}`);

const secretToken = secretFromPRNG(initialState);
console.log(`\nSecretToken calculé: ${secretToken}`);