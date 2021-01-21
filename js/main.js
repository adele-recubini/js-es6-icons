// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

const arrayOggetti = [
   {
     'name' : 'cat',
      'prefisso': 'c',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'crow',
      'prefisso': 'c',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'dog',
      'prefisso': 'd',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'dove',
      'prefisso': 'd',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'dragon',
      'prefisso': 'd',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'horse',
      'prefisso': 'h',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'hippo',
      'prefisso': 'h',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'fish',
      'prefisso': 'f',
      'type': 'animal',
      'family': 'fas',
   },
   {
     'name' : 'carrot',
      'prefisso': 'c',
      'type': 'vegetable',
      'family': 'fas',
   },
   {
     'name' : 'apple-alt',
      'prefisso': 'a',
      'type': 'vegetable',
      'family': 'fas',
   },
   {
     'name' : 'lemon',
      'prefisso': 'l',
      'type': 'vegetable',
      'family': 'fas',
   },
   {
     'name' : 'pepper-hot',
      'prefisso': 'p',
      'type': 'vegetable',
      'family': 'fas',
   },
   {
     'name' : 'user-astronaut',
      'prefisso': 'u',
      'type': 'human',
      'family': 'fas',
   },
   {
     'name' : 'user-graduat',
      'prefisso': 'u',
      'type': 'human',
      'family': 'fas',
   },
   {
     'name' : 'user-ninja',
      'prefisso': 'u',
      'type': 'human',
      'family': 'fas',
   },
 ]

// popolo di icone i div che mi sono creata su html
const myContainer = document.getElementById('container');
arrayOggetti.forEach((element) => {
  myContainer.innerHTML+=
  `
  <div>
    <i class="fas fa-cat"></i>
  </div>

  `
  // `
  // <div>
  // <i class="fas fa-crow"></i>
  // </div>
  //
  // `
  // `
  // <div>
  // <i class="fas fa-dove"></i>
  // </div>
  //
  // `

});
