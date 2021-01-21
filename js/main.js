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
   colorArray = colorArray[0];
}if(element.type === 'vegetable') {
  colorArray = colorArray[1];
}if (element.type ==='human') {
  colorArray = colorArray[2];
}

// se non avessimo avuto l array

  // let colorIcon;
  //
  // if(element.type === 'animal') {
  //    colorIcon = 'blue';
  // }if(element.type === 'vegetable') {
  //    colorIcon = 'orange';
  // }if (element.type ==='human') {
  //   colorIcon = 'red';
  // }


  myContainer.innerHTML+=
  `
  <div>
    <i class="${element.family} ${element.prefisso}-${element.name}" style ='color:${colorArray}'></i>
  </div>

  `
});
console.log(arrayOggetti);
