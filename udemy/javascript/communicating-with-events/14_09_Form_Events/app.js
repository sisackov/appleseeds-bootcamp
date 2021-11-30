const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function (e) {
    //stops the request from being sent (prevents page reload) which is the default behavior of a form submit
    e.preventDefault();

    console.log('cc', creditCardInput.value);
    console.log('terms', termsCheckbox.checked);
    console.log('veggieSelect', veggieSelect.value);
    //send form data to db
    //append something to page using form data
});
