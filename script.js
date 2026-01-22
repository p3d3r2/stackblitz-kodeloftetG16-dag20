const myArray = [];

/*
myArray.push("Tiger");
myArray.push("olifant")
myArray.pop();

myArray.push("Gud")
myArray.unshift("nissen")
myArray.unshift("nissen")

myArray.shift();

console.log(myArray.toString());
*/

//
//

const textInput = document.querySelector("#textInput")
const displayList = document.querySelector("#displayList");

const addBack = document.querySelector("#addBack");
addBack.addEventListener("click", function (event) {
  event.preventDefault();

  // her sjekker vi om textinput er utfylt eller ikke //
  if (!textInput.value == "") {
    const textInputValue = textInput.value;
  
  myArray.push(textInputValue);

  //console.log(myArray);

  displayList.textContent = myArray.toString();

  textInput.value = ""; 
  } else {
    console.log("noe gikk galt");
  }


});

const removeBack = document.querySelector("#removeBack");
removeBack.addEventListener("click", function (event) {
  event.preventDefault();

  myArray.pop();

  //console.log(myArray);

  displayList.textContent = myArray.toString();
  

})

const addFront = document.querySelector("#addFront");
addFront.addEventListener("click", function (event) {

  event.preventDefault();

  if (!textInput == "") {
  const textInputValue = textInput.value;

  myArray.unshift(textInputValue);

  displayList.textContent = myArray.toString();

  textInput.value = "";
  } else {
    console.log("noe gikk galt foran");
  }
  
});
  

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
