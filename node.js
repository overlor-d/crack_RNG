const A = 1664525;
const C = 1013904223;

function calculerEtatLcgSuivant(state) {
  const produit = Math.imul(A, state);
  const valeurIncrementee = produit + C;
  const stateSuivant = valeurIncrementee >>> 0;
  return stateSuivant;
}

function construireSecretDepuisIdRequete(requestIdHex, nombreOctets = 16) {
  const requestIdAnalyse = parseInt(requestIdHex, 16);
  let state = requestIdAnalyse >>> 0;

  const octets = [];
  for (let index = 0; index < nombreOctets; index++) {
    state = calculerEtatLcgSuivant(state);
    octets.push(state & 0xff);
  }

  const octetsHexadecimaux = octets.map((valeurOctet) => valeurOctet.toString(16).padStart(2, "0"));
  const secret = octetsHexadecimaux.join("");
  return secret;
}

const requestId = process.argv[2] ?? "9611afc8";
const jeton = construireSecretDepuisIdRequete(requestId, 16);
console.log(jeton);
