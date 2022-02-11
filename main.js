// let adresse = "75 rue du four a chaux ";
// let ville = "calais";
// let code = "62100";
// IMPORTANT ALT GR + 2x7 = ``
// caractere uniquement avec les ""
// let ageadult = 18;
// let ageretraite = "80ans";
// console.log(`l'age adulte est : ${ageadult} - l'age de la retraite est ${ageretraite} `);
// let nom="Evan"
// console.log(nom.toUpperCase());
// let nom="Evan"
// console.log(`Sous chaine : ${nom.substring(2,4).toUpperCase()}`);
// ETAPES 



//ETAPES SIMPLIFIER EN UNE LIGNE
// expression et mettre a la place de sa variable 
// let nom="NombreDeCaracteres"; // nom = variable , NombreDeCaracteres = chaine de caractere

// console.log(nom.split('').length);


// LET VARIABLE
let phrase="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, placeat hic. Modi nihil impedit iusto nam id eaque! Error quae obcaecati velit dignissimos est eveniet eius, voluptatum officiis voluptatibus nihil?"
// LET VARIABLE

//DECOUPAGE
let tab = phrase.split(" ");
// compter nombre
let nb=tab.length;
console.log(nb);
console.log(`le nombre de mots est : ${nb}`);




//======
console.log(phrase.split(" ").length);
//=======
console.log(`le nombre de mots est : ${phrase.split(" ").length}`);


//++++++

const fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
console.log(fruits);

fruits.unshift("fraise");
console.log(fruits);

fruits.push("banane");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits.indexOf("orange"));

// personne est objet passions attribut jeux videos est la valeur
const personne = { // 
    prenom: "Julien",
    nom: "La garde",
    age: 30,
    passions: ["foot", "natation", "jeux videos"],
    adresse : {
    rue : "rue Nationale",
    ville : "Lille",
    pays : "France"
    }
   };
   
   
   console.log(personne.passions[2]); 
   



   //je ocnnais pas l'info
   let info = personne.passions[2]; // equivalent a toutes les passions donnés de type tableau
console.log(info);



personne.passions[2] = "footing" // j'ai changer jeux videos par footing 
console.log(personne.passions);
console.log(personne.adresse.pays);

// ===============18 Boulevard Biverly Hills - Californie



personne.adresse.rue = "18 Boulevard Biverly Hills";
personne.adresse.ville ="Californie";
personne.pays ="USA";

console.log(personne.adresse.rue);
console.log(personne.adresse.ville);
console.log(personne.pays);



// =====================AUTRE METHODE
personne.adresse = {
    rue: "10 Boulevard biverly Hills",
    ville: "Californie",
    pays: "USA",
};
personne.email="julien@gmail.com"

const todos = [
    {
    id: 1,
    text: "Faire les courses",
    isCompleted: true,
    },
    {
    id: 2,
    text: "Balade au vieux Lille"
   ,
    isCompleted: true,
    },
    {
    id: 3,
    text: "Préparer le diner",
    isCompleted: false,
    },
   {
    id: 4,
    text: "Regarder la TV",
    isCompleted: false,
    },
   ];

   console.log(todos[2].text); 
   console.log(todos[2].isCompleted); 
