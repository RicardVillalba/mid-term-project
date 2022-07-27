const form = document.getElementById('contactUs');

form.addEventListener('submit', callbackFunction);
                      
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);

    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    

    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    name: formDataObj.name,
    email: formDataObj.email,
    phone: formDataObj.phone,
    message: formDataObj.message,
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
  alert("Thank you for your message!");
});



