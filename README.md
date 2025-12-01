# Oefeningen labo 20

Zorg dat je de volgende folderstructuur volgt:

```
webtechnologie/
├─ labo-01/
│  ├─ oefening-01/
│  │  ├─ index.html
│  │  ├─ images/
│  │  │  ├─ image-1.jpg 
│  │  │  └─ image-n.jpg 
│  │  ├─ css/
│  │  │   ├─ reset.css
│  │  │   └─ style.css
│  │  └─ js/
│  │     └─ script.js
│  ├─ oefening-02/
│  └─ oefening-n/
├─ labo-02/
└─ labo-n/      
```

- Gebruik steeds JS modules om globale variabelen te vermijden (`<script type="module" src="./path/to/script.js" defer></script>`)
- Zet je Javascript file steeds in strict mode (`"use strict"`);
- Volg de [Coding Guidelines](https://apwt.gitbook.io/webtechnologie/coding-guidelines)
- De nodige bestanden staan reeds klaar in deze repository

## Oefening 1 – Notificatie-toestemming vragen via een Promise

### Leerdoelen
- Je begrijpt hoe `Notification.requestPermission()` werkt als een Promise.
- Je leert reageren op de uitkomst van een permissie-aanvraag.

### Opdracht
Vraag toestemming aan de gebruiker om notificaties te tonen via de Notifications API:

1. Roep `Notification.requestPermission()` automatisch aan wanneer de pagina geladen is.
2. Als de gebruiker **toestemming geeft**, toon dan een notificatie met de tekst: **"Hello world"**.
3. Als de gebruiker **weigert**, toon dan in de console: **"Toestemming geweigerd"**.

## Oefening 2 – Een eigen Promise gebruiken

### Leerdoelen
- Je leert hoe je zelf een Promise maakt.
- Je oefent met het verwerken van asynchrone resultaten.

### Opdracht
Gebruik onderstaande functie die een vermenigvuldiging uitvoert na 5 seconden:

```javascript
const multiply = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2);
        }, 5000);
    });
};
```

1. Roep deze functie aan met twee willekeurige getallen, bijvoorbeeld `multiply(4, 7)`.
2. Wacht op het resultaat met `.then()`.
3. Voorzie een `catch`-blok voor het geval er een fout optreedt.
4. Toon het resultaat in de console.

De `setTimeout` simuleert een trage bewerking.

## Oefening 3 – Promise chaining

### Leerdoelen
- Je leert hoe je meerdere asynchrone stappen aan elkaar koppelt.
- Je oefent met het doorgeven van resultaten tussen `.then()`-blokken.

### Opdracht
Kopieer je eerdere werk rond de `multiply()`-functie naar de map voor deze oefening en doe dan volgende aanpassingen:

1. Vermenigvuldig twee getallen met `multiply()` en toon het resultaat.
2. Gebruik dat resultaat als input voor een nieuwe `multiply(result, 2)`-aanroep.
3. Herhaal dit proces minstens vijf keer.
4. Toon telkens het tussenresultaat in de console.

Vermijd geneste `.then()`-blokken. Schrijf ze op één niveau (flat).

> Tip: om testing wat gemakkelijker te maken, verlaag je de timing van de timeout-functie binnen multiply.

## Oefening 4 – Foutafhandeling in Promise chains

### Leerdoelen
- Je leert hoe je fouten afvangt in een Promise chain.
- Je begrijpt hoe `throw` werkt binnen een `.then()`.

### Opdracht
Kopieer je oplossing voor de vorige oefening naar de map voor de huidige oefening en zorg dan voor volgende uitbreidingen:

1. Laat ergens halverwege in de chain een fout ontstaan met `throw new Error("foutboodschap")`.
2. Zorg dat de fout correct wordt afgehandeld met `.catch()`.
3. Toon de foutboodschap in de console.

## Oefening 5 – `async/await` syntax

### Leerdoelen
- Je leert het alternatief voor `.then()` en `.catch()` met `async/await`.
- Je oefent met het schrijven van leesbare asynchrone functies.

### Opdracht
Herschrijf oefening 1 en 4 met `async/await` in plaats van `.then()` en `.catch()`.
Kopieer opnieuw eerst je eerdere oplossingen naar de map voor deze oefening en doe dan de nodige aanpassingen.

Zorg dat je gebruik maakt van `try`/`catch` om fouten correct op te vangen bij `await`.


## Extra oefeningen

### Oefening 1 – Een simpele Promise maken
#### Leerdoelen
- Je leert hoe je zelf een Promise maakt en hoe je `resolve` en `reject` gebruikt.  
#### Opdracht 
We maken een functie die nagaat of er genoeg donuts in een doos zitten alvorens ze worden meegegeven aan de klant. Een doos kan 12 donuts bevatten.  
1. Maak een functie `checkDonutStock()` die een Promise teruggeeft.  
2. De Promise moet na 2 seconden *resolven* met de boodschap *"Enough donuts for Homer!"* wanneer er genoeg (>= 5) donuts in de doos zitten. 
3. Wanneer er minder dan 5 donuts zijn, moet de Promise *rejecten* met de boodschap *"Oh no! Not enough donuts!"*.  
4. Gebruik `.then()` en `.catch()` om het resultaat te tonen in de console.

### Oefening 2 – Promise chaining
#### Leerdoelen
- Je leert hoe je meerdere Promises aan elkaar koppelt.  
#### Opdracht  
1. Maak een functie `getBartHomework()`, die na 1 seconde een Promise resolved met de boodschap "Math homework".  
2. Maak een tweede functie `finishHomework(homework)` die na 1 seconde resolve met de boodschap `"Bart finished: <homework>"`, waarbij `<homework>` de boodschap bevat uit `getBartHomework()`.  
3. Chain deze functies zodat Bart eerst zijn huiswerk ophaalt en vervolgens afwerkt.  
4. Toon het resultaat in de console.


### Oefening 3 – Callback hell herschrijven naar Promises
#### Leerdoelen
- Inzien hoe Promises callback hell oplossen.  
#### Opdracht
1. Je krijgt een callback-hell voorbeeld (vereenvoudigd).  
2. Herschrijf het naar Promises.

**Startcode (callback hell):**
```js
getKrustyBurgerOrder(function(order) {
  prepareOrder(order, function(prepared) {
    deliverOrder(prepared, function(delivered) {
      console.log(delivered);
    });
  });
});
```

### Oefening 4 – Werken met `Promise.all`
#### Leerdoelen
- Je leert hoe je meerdere beloftes parallel uitvoert.  
#### Opdracht
1. Maak drie functies:  
   - `getLisaBook()` → resolve na 1.2s met boodschap *"Lisa's book"* 
   - `getMaggieBottle()` → resolve na 0.5s  met boodschap *Maggie's bottle*
   - `getMargeGroceries()` → resolve na 1.8s  met boodschap *Marge's groceries*
2. Gebruik `Promise.all` om te wachten tot alles binnen is.  
3. Toon het resultaat als array in de console.


### Oefening 5 – Async/Await herschrijven
#### Leerdoelen
- Snappen hoe async/await Promises leesbaarder maakt.  
#### Opdracht
1. Herschrijf de code van oefening 2 naar async/await.  
2. Toon het resultaat in de console.  
3. Gebruik een try/catch blok om fouten af te handelen.