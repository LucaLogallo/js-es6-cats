/* 

Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

Milestone 2
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

Milestone 3
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.
*/


//definisco l'array di gatti 
$(function(){

  const arrGatti = [
    {
      nome : 'luca',
      età : 4,
      colore : '#FAEBD7',
      sesso : 'maschio'
    },
    {
      nome : 'marco',
      età : 2,
      colore : '#000000',
      sesso : 'maschio'
    },
    {
      nome : 'simone',
      età : 5,
      colore : '#A52A2A',
      sesso : 'maschio'
    },
    {
      nome : 'leo',
      età : 14,
      colore : '#000000',
      sesso : 'femmina'
    },
    {
      nome : 'garfield',
      età : 9,
      colore : '#D2691E',
      sesso : 'maschio'
    },
    {
      nome : 'micia',
      età : 0.5,
      colore : '#A52A2A',
      sesso : 'femmina'
    },
    {
      nome : 'miao',
      età : 0.8,
      colore : '#A9A9A9',
      sesso : 'femmina'
    },
    {
      nome : 'aristogatto',
      età : 1,
      colore : '#A9A9A9',
      sesso : 'maschio'
    },
    {
      nome : 'tizia qualunque',
      età : 5,
      colore : '#FFFACD',
      sesso : 'femmina'
    },
    {
      nome : 'randagino',
      età : 4,
      colore : '#D2691E',
      sesso : 'maschio'
    }
  ];
  
  //faccio un forEach dell'array gatti con all'interno come element il gatto e poi con il DOM del css vado a fare un append per inserire gli li restituiti nella variabile html e inserirli nell'ul
  arrGatti.forEach((gatto) =>{
    $('.wrapper #gatti ul').append(stamp(gatto.colore,gatto.nome));//prendo le proprietò colore e nome del gatto con il punto
    
    /* log di verifica
    //console.log(gatto.nome);
    //console.log(gatto.colore);
    //console.log(stamp(gatto.colore,gatto.nome)); 
    /log di verifica*/
  });
  
  
  //mi creo le variabili per il fiocco e per il colore quindi utilizzerò opacity e il color in un oggetto (carattgatto{ color = rosa/blu, opacity = età/10}

  const rosa = "#ffc0cb";
  const blu = "#99cbff";
  //queste sono variabili per il colore

  const newArrGatti = arrGatti.map((gatto) =>{  //map scorre l'array di oggetti come il ciclo for Each ma restituisce ad una nuova variabile (anch'essa diventerà di tipo arr di oggetti) l'elemento modificato quindi in questo caso ,dopo aver inizializzato le variabili che ci servono con la formula minificata dell'if dove ALLORA = ? e altrimenti = : , restituiremo un'oggetto che conterrà l'oggetto gatto (...gatto) ma al quale aggiungeremo un oggetto(matriosca) dentro che contiene le nostre variabili 
    let colore = (gatto.sesso === "maschio") ? blu : rosa;
    let opacity = gatto.età / 10;
    return{
      ...gatto,
      caratteristichegatto:{
        colore,
        opacity
      }
    }
  });

  newArrGatti.forEach((gatto) =>{
    $(".wrapper #gattiAggiornati ul li span").append(stamp(gatto.nome,gatto.colore));
    console.log(gatto);
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* FUNZIONI */
  //funzione stampa
  function stamp(coloregatto,nomegatto){//passo alla funzione il colore del gatto e il nome
    
  let html = //assegno ad una variabile che restituirò il mio codice html con all'interno i valori da inserire con il ${}. una volta restituito stamperà il contenuto
  `
   <li>
            <i class="fas fa-cat" style="color:${coloregatto}"></i>
            <span>
              ${nomegatto}
            </span>
   </li>
  `
  return html; //restituisco "l'html"
  };

  //funzione stampa con aggiunta informazione (la faccio per imparare bene)
});
