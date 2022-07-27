const form = document.getElementById('questionsForm');

form.addEventListener('submit', callbackFunction);
                      
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);

    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    email: formDataObj,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  form.reset()
};


form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("We will send a email in no time!");
});