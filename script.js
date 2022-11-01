/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/


// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

let BiltinputDiv=document.getElementById('billTotalInput');

let tipinputDiv=document.getElementById('tipInput');

let numberofpeopleDiv=document.getElementById('numberOfPeople');

let perpersontotalDiv=document.getElementById('perPersonTotal');


// Get number of people from number of people div
let numberOfPeople=Number(numberofpeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    // console.log(BiltinputDiv.value);
    let Bill=Number(BiltinputDiv.value);
    // get the tip from user & convert it into a percentage (divide by 100)
    let TipPercent=Number(tipinputDiv.value)/100;
  
    // get the total tip amount
    let Totaltip=Bill*TipPercent;
    // calculate the total (tip amount + bill)
    let TotalBill=Totaltip+Bill;
  
    // calculate the per person total (total divided by number of people)
    let Billpp=TotalBill/numberOfPeople;
  
    // update the perPersonTotal on DOM & show it to user
    perpersontotalDiv.innerText= `₹${Billpp.toFixed(2)}`
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople+=1;
  
    // update the DOM with the new number of people
    numberofpeopleDiv.innerText=numberOfPeople;
  
    // calculate the bill based on the new number of people
    calculateBill();    
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    if(numberOfPeople <=1){
        alert("People Can't be Less than 1 ");
        return;
    }
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    
    // decrement the amount of people
    numberOfPeople-=1;
    
    // update the DOM with the new number of people
    numberofpeopleDiv.innerText=numberOfPeople;
    
    // calculate the bill based on the new number of people
    calculateBill();
  }