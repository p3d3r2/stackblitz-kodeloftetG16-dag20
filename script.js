const myArray = [];

myArray.push("Tiger");
myArray.push("olifant")
myArray.pop();

myArray.push("Gud")
myArray.unshift("nissen")
myArray.unshift("nissen")

myArray.shift();

console.log(myArray.toString());

//
//

const addBack = document.querySelector("#addBack");
addBack.addEventListener("click", function (event) {
  event.preventDefault();

  const textInput = document.querySelector("#textInput").value;
  myArray.push(textInput);

  //console.log(myArray);

  const displayList = document.querySelector("#displayList");
  displayList.textContent = myArray.toString();


})

const removeBack = document.querySelector("#removeBack");
removeBack.addEventListener("click", function (event) {
  event.preventDefault();

  myArray.pop();

  //console.log(myArray);

  const displayList = document.querySelector("#displayList");
  displayList.textContent = myArray.toString();
  

})

const addFront = document.querySelector("#addFront");
addFront.addEventListener("click", function (event) {
  event.preventDefault();

  const textInput = document.querySelector("#textInput").value;
  myArray.unshift(textInput);

  //console.log(myArray);

  const displayList = document.querySelector("#displayList");
  displayList.textContent = myArray.toString();

})

const removeFront = document.querySelector("#removeFront");
removeFront.addEventListener("click", function (event) {
  event.preventDefault();

  myArray.shift();

  //console.log(myArray);

  const displayList = document.querySelector("#displayList");
  displayList.textContent = myArray.toString();

})











// Array til senere så vi slipper å skrive den manuelt selv om vi trenger den ;)
/*const dagligvarer = [
  "Melk",
  "Brød",
  "Smør",
  "Ost",
  "Yoghurt",
  "Egg",
  "Kjøttdeig",
  "Kylling",
  "Fiskekaker",
  "Pølse",
  "Poteter",
  "Løk",
  "Rømme",
  "Fløte",
  "Grønnsåpe",
  "Blåbær",
  "Jordbær",
  "Eplejuice",
  "Sjokolade",
  "Kjeks",
];*/
