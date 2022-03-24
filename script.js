console.log('JS VUE OK!');

/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
*/

/*
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const root = new Vue ({

    el : '#root',

    //aggiungo testo e css
    data : {
        messaggio : "vue-hello!",
        classe : "color", 
    // aggiungo immagine
        immagine : "img/OnePieceshojo_1R.jpg"

    }
    
});