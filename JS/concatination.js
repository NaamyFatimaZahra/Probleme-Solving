//-----------------Jour 1 : Bases de programmation - Variables et types de données

// Concaténez deux chaînes de caractères 
// (votre prénom et nom) dans une variable nomComplet et affichez-la.

// let prenom = "amina";
// let nom = "jamaoui";
// let nomComplet = prenom.concat(" ", nom);
// console.log(nomComplet);


let prenom = "amina";
let nom = "jamaoui";
let nomComplet = prenom + " " + nom;
console.log(nomComplet);



//Convertissez la chaîne "10" en nombre avec parseInt()
//  ou Number(), ajoutez-la à un autre nombre, et affichez le résultat.

let string = "10";
let numb = parseInt(string);

console.log(numb + 1);








//Créez un tableau fruits avec trois fruits de votre choix et affichez-le.


let fruits = ["pomme", "banane"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}



//Créez un objet personne avec les propriétés nom, 
// age et ville, puis affichez chaque propriété avec console.log().

let obj = {
  nom: "amin",
  age: 12,
  ville: "kech",
};

console.log(obj["nom"]);
console.log(obj.age);
console.log(obj.ville);
    
//Déclarez une variable let compteur = 5, modifiez sa valeur à 10, 
// et affichez-la avant et après la modification.


let compteur = 5;

console.log(compteur);
compteur = 10;
console.log(compteur);

    
