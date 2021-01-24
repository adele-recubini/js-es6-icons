// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

// // Milestone 2:
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.

// Milestone 3:
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.



const arrayOggetti = [
   {
     'name' : 'cat',
      'prefisso': 'fa',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'crow',
      'prefisso': 'fa',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'dog',
      'prefisso': 'fa',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'dove',
      'prefisso': 'fa',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'dragon',
      'prefisso': 'fa',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'horse',
      'prefisso': 'fa',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'hippo',
      'prefisso': 'fa',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'fish',
      'prefisso': 'fa',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'carrot',
      'prefisso': 'fa',
      'type': 'vegetable',
      'family': 'fas',
   },
   {
     'name' : 'apple-alt',
      'prefisso': 'fa',
      'type': 'vegetable',
      'family': 'fas',
   },
   {
     'name' : 'lemon',
      'prefisso': 'fa',
      'type': 'vegetable',
      'family': 'fas',
   },
   {
     'name' : 'pepper-hot',
      'prefisso': 'fa',
      'type': 'vegetable',
      'family': 'fas',
   },
   {
     'name' : 'user-astronaut',
      'prefisso': 'fa',
      'type': 'human',
      'family': 'fas',
   },
   {
     'name' : 'user-graduate',
      'prefisso': 'fa',
      'type': 'human',
      'family': 'fas',
   },
   {
     'name' : 'user-ninja',
      'prefisso': 'fa',
      'type': 'human',
      'family': 'fas',

   },
 ]


const myContainer = document.getElementById('container');

arrayOggetti.forEach((element) => {

let  colorArray =['blue' , 'orange' , 'red']
const types = [];

if(!types.includes(element.type)){
  types.push(element.type);
}



const typeIndex = types.indexOf(element.type)

if(typeIndex !== -1 ){
  element.color =colorArray[typeIndex]
}

if(element.type === 'animal') {
   element.color = colorArray[0];
   colorArray=colorArray[0];
}if(element.type === 'vegetable') {
  element.color = colorArray[1];
  colorArray=colorArray[1];
}if (element.type ==='human') {
  element.color = colorArray[2];
  colorArray=colorArray[2];
}


  myContainer.innerHTML+=
  `
  <div class = "icone">
    <i class="${element.family} ${element.prefisso}-${element.name}" style ='color:${colorArray}'></i>
  </div>

  `
});
console.log(arrayOggetti);

// ora voglio poter scegliere cosa vedere nel html in base ai valori che seleziono nel value (che ora è vuoto)

 // prendo il mio arraydi oggetti e li filtro inbase alla chiave TYPE che avra valor human animals e vegetable

 const allType = []
 const selector =document.getElementById('select')

 arrayOggetti.forEach((element) => {

   if (!allType.includes(element.type)) {
     allType.push(element.type)
   }

 });
console.log(allType);
// ora questy type cioe human , vegetable e animal devo inserirli letteralmente nei valori dell otion creato nell html
// come li inserisco ?  e dove le inserisco nel selector con id nel html creando una costante e andranno a popolare le value della sua option. Select e option in html vanno insieme con un inner innerHTML

allType.forEach((element) => {

  selector.innerHTML+=`

    <option value="${element}">${element}</option>

  `
});
// ora devo creare un addvent listener cioe l utente clicca un type human vegetable e animals e succederà qualcosa nel mio caso mi farà vedere solo le icone con quel type

// variabilizzo ancora il selector però come elemento
const typeSelector = $('#select');

typeSelector.change(function(){

  // all inizio il container mi dovra far vedere tutte le card lo faccio sempre con l innerHTML

  myContainer.innerHTML = ''

  // variabilizzo anche l altra funzione cioe quando clicco proprio una opzione se la tipologia di selezione è diversa da all (che me le farebbe vedere tutte )  allora filtro il mio array di oggetti per typo humano vegetale o animale per filtrare qualcosa mi serve una costante dove metto la roba filtrata

    const typeSelected = $(this).val()
    let filtered ;

    if (typeSelected !== 'all') {

      filtered = arrayOggetti.filter((element) =>{
        return element.type === typeSelected
      })
    }else {
      filtered = arrayOggetti;
    }

    filtered.forEach((element) => {
      myContainer.innerHTML += `
      <div class = "icone">
        <i class="${element.family} ${element.prefisso}-${element.name}"></i>
      </div>

      `
    });

});
