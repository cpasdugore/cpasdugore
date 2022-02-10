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

const personne = {
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
