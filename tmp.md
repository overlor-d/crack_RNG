mgH6WLmk26RSQWbfDv8ANpgv7RbmPZiiHH
cTVaac6xJkRTjcANYBb493kpfznTWd5FS2zecWi8zKP7BvKqCPyx

mot : test
timestamp : 1771490576263

---
Timestamp trouvé : 1771322924684



Surcharger en console la fonction de génération d'aléatoire depuis le timestamp :
```js
const originalDateNow = Date.now;
Date.now = function() {
    const timestamp = originalDateNow.apply(this, arguments);
    console.log("[DATE.NOW()] Timestamp utilisé :", timestamp, `(${new Date(timestamp).toISOString()})`);
    return timestamp;
};
```

Bruteforce directement :
```js
console.log("démarrage de la recherche du timestamp exact");

const baseDate = new Date('2026-02-17T13:32:18.000Z'); 
const baseTimestamp = baseDate.getTime();

const targetAddress = 'mwxn6XXHCeP5baXQcyWLEX5AwL6azLRoeG';

const searchRange = 5000; 

for (let i = -searchRange; i <= searchRange; i++) {
    const currentTimestamp = baseTimestamp + i;

    const originalDateNow = Date.now;
    Date.now = () => currentTimestamp;

    try {
        const button = document.querySelector('button');
        if (button) {
            button.click();
            await new Promise(resolve => setTimeout(resolve, 100)); 

            const displayedAddressElement = document.querySelector('#address');
            if (displayedAddressElement) {
                const displayedAddress = displayedAddressElement.value || displayedAddressElement.innerText;
                
                if (displayedAddress === targetAddress) {
                    console.log(`\nTROUVÉ`);
                    console.log(`Timestamp exact : ${currentTimestamp}`);
                    console.log(`Date/Heure    : ${new Date(currentTimestamp).toISOString()}`);
                    console.log(`Salt utilisé  : 123456`);
                    console.log(`Adresse       : ${displayedAddress}`);
                    Date.now = originalDateNow;
                    return; 
                }
            }
        }
    } catch (e) {
    } finally {
        Date.now = originalDateNow;
    }
}

console.log("\nAucune correspondance trouvée dans la fenêtre de 10 secondes.");
```


