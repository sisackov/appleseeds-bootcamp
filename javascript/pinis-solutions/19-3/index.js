const form = document.querySelector('[name="verify"]');
const inputs = document.querySelectorAll('.inputs input');
const submit = document.querySelector("input[type='submit']");
const handleInput = (e) => {
  const input = e.target;
  if (input.nextElementSibling && input.value) {
    input.nextElementSibling.focus();
  }
  const allValues = [...inputs].every((input) => input.value);

  //extra bug with last input
  //   if (inputs[inputs.length - 1].value) {
  //     form.submit();
  //   }
  // };
  if (allValues) {
    form.submit();
    //or
    //submit.click()
  }
};
form.addEventListener('input', handleInput);

const handlePaste = (e) => {
  const paste = e.clipboardData.getData('text');

  inputs.forEach((input, i) => {
    input.value = paste[i] || '';
  });
  if (inputs.length === paste.length) {
    inputs[paste.length - 1].focus();
  }
};
inputs[0].addEventListener('paste', handlePaste);

/*
Pseudo code:
1. Store the form in a variable
2. Store all inputs in a variable
3. Create a listener that will listen to the input
4. If there is a next sibling on that input and a value (because we can delete a number) then focus on the next sibling. 
5. If all the inputs have a value auto submit.
6. Listen to the paste event
7. Populate the inputs with the index of the paste.
8. If the past length is not enough populate the value with an empty string
9. Focus always on the last populated input when you paste.
*/
