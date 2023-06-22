      const form = document.querySelector('form'); //selezionamo il tag form all'interno del dom
      const result = document.getElementById('result'); //cerchiamo le informazioni nel tag con un id "result"

      form.addEventListener('submit', (event) => {
        event.preventDefault(); //dovrebbe evitare che il browser metta un valore di default invisibile nel campo in modo che venga inviato soltanto se quel campo è valorizzato 

        const name = document.getElementById('name').value; //prende l'elemento con id nome dal dom
        const email = document.getElementById('email').value; //prende l'elemento con id email dal dom
        const checkbox = document.getElementById('checkbox').checked; //prende l'elemento con id checkbox dal dom
        const pets = document.getElementById('pets').value; //prende l'elemento con id pet-select dal dom
        const area = document.getElementById('area').value; //p1rende l'elemento con id pet-select dal dom//


        const xhr = new XMLHttpRequest(); //istanzio un oggetto xhtml dalla classe XMLHttpRequest che verifica lo stato della richiesta http e gestisce il caricamento delle informazioni nella pagina

        xhr.onreadystatechange = () => 
        {
            if (xhr.readyState === XMLHttpRequest.DONE) //ricarica la pagina dinamicamente senza interruzione del flusso dell'utente
            {
                if(xhr.status === 200)
                {
                    result.innerHTML = xhr.responseText;
                }
                else
                {
                    console.error('Errore nella richiesta AJAX');
                }
            }
        };

        xhr.open('POST', '/submit');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');        
        xhr.send(`name=${name}&email=${email}&checkbox=${checkbox}&pets=${pets}&area=${area}`); //
      }); 

      /*
      i form hanno due metodi, il get e il post.
      la differenza tra i due è che il primo passa i dati come paramentri all'interno
      dell'indirizzo della pagina che li riceverà,
      mentre il secondo (per certi versi più sicuro, specie se in presenza di dati delicati come password o codici secgreti)
      mantiene intatto l'indirizzo della pagina di ricezionenpm init -y
      
      */