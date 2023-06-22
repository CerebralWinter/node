**passaggi necessari ad ottenere un pro**


# l'obiettivo dell'assignement è stato quello di creare un progetto, con node.js, per recuperare le informazioni contenute nei campi di un form html, tramite ajax, allo scopo di  successivamente inviarle e visualizzarle nel browser e su console.



>il progetto ha richiesto la creazione di una pagina html, che contenesse un form, allo scopo di raccogliere i dati inseriti ed inviarli al server, che rappresenta la seconda parte del progetto.

Del form, specificati i contenuti, viene utilizzato il submit button per inviarw i dati ad un server 
utilizziamo ajax per recuperare i dati dal form.  
-
-
-



>titolo: recuperare dati da un form con ajax

>descrizione generale del progetto: l'obiettivo dell'assignement è stato quello di creare un progetto, con node.js, per recuperare le informazioni contenute nei campi di un form html, tramite ajax, allo scopo di  successivamente inviarle e visualizzarle nel browser e su console.

## passi compiuti per realizzare il progetto:

- creare una cartella e aprirla in visual studio;
- eseguire npm init -y per creare il file json di configurazione;
- installare i moduli(npm install ajax,npm install queryselector npm install express);
- creare il file app.js;
- creare una sotto-cartella public. che conterrà i file statici del progetto (script-js, index.html, style.css);
- 
-
-

## spiegazione di cosa fa app.js

viene utilizzato express per delle funzionalità
  ricevere le informazioni come array json e deserializzarle:
```javascript
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

```
 sia per rendere disponibili i file statici che sono in public sia per 
```javascript

app.use(express.static('public'));

```

l'applicazione rende disponibili i file statici, che sono contenuti nella cartella public.  

```javascript
app.use(express.static('public'));
 
``` 
Ciò avviene attraverso il software server, raggiungibile all'indirizzo localhost:3000. 
tramite le seguenti righe di codice:

```javascript
app.listen(3000, () =>
{
    console.log('Il server è in ascolto sulla porta 3000');
});
```
impostiamo l'app per essere in ascolto sulla porta 3000 specificata.

utilizziamo express per ricevere le informazioni come array json e deserializzarle



>spiegazione di cosa fanno index.html e script.js

