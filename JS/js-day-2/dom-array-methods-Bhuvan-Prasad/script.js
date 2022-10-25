const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const sortName = document.getElementById("sortName");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// Double eveyones money
function doubleMoney() {
  /*
  TODO write a map function here that replaces data array with double its values
  */
  data.forEach(function(iter){
      iter.money = iter.money*2;
  });
  updateDOM(data);
}

// Sort users by richest
function sortByRichest() {
  /*
  TODO write a map function here that sorts data array in descending order
  */
  data.sort((a, b) => parseFloat(b.money) - parseFloat(a.money));
  var richestPerson = document.querySelector(".richestPerson");
  if (richestPerson){
    richestPerson.textContent = "Richest Person: "+data[0].name;
  }
  updateDOM(data);
}

// Filter only millionaires
function showMillionaires() {
  /*
  TODO write a map function here that filters data array with money greater than 1000000  
  */
  let updatedData = data.filter(function (iter) {
    return iter.money > 1000000;
  });
  updateDOM(updatedData);
}

// Calculate the total wealth
function calculateWealth() {
  /*
  TODO write a reduce function here that calculates sum of data array   
  */
  const wealth = data.reduce(function(accumulator,iter){
      return accumulator + iter.money;
  },0);

  // const wealth = data.reduce(...);

  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}
function sortByName() {
  console.log(123);
  /*
  TODO write a map function here that sorts data array in descending order
  */
  data.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
        if (fa < fb){
          return -1;
        }
        if (fa>fb){
          return 1;
        }
        return 0;
  });
  updateDOM(data);
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Event listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
sortName.addEventListener("click",sortByName);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);
