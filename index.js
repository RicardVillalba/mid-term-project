const myArray = ["stone","paper","scissors"];
const embedElements = () => {
   myArray.forEach(element => {
      document.getElementById('result').innerHTML +=
      `<div>${element}</div><br />`;
      // here result is the id of the div present in the DOM
   });
};