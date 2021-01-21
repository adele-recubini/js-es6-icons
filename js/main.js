// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

// // Milestone 2:
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.


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

  let colorIcon;

  if('type' === 'animal') {
     colorIcon = 'blue';
  }if('type' === 'vegetable') {
     colorIcon = 'orange';
  }if ('type' ==='human') {
    colorIcon = 'red'
  }


  myContainer.innerHTML+=
  `
  <div>
    <i class="${element.family} ${element.prefisso}-${element.name}" style ='color:${colorIcon}'></i>
  </div>

  `
});


// // Milestone 2:
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.




//
// <div>
//   <i class="${element.family} ${element.prefisso}-${element.name}"></i>
// </div>
