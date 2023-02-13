const form = document.getElementById(`form`);

let allInputs = document.querySelectorAll(`input`);

const fname = document.getElementById(`fname`);
const lname = document.getElementById(`lname`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  // trigger input validation function
  validInputs(fname, lname, email, password);

  // check if all inputs were valid
  let errorCount = 0;

  // count how many inputs had errors and if its more than 0 do nothing
  // if its 0 (all are valid) return thank you in <body>

  allInputs.forEach((i) => {
    i.classList.contains(`error`) ? (errorCount += 1) : errorCount;
  });

  errorCount === 0
    ? (document.body.innerHTML = `
      <style>h1 {color:white; font-size:5rem;text-transform:uppercase;}</style>
      <main><h1>Thank You!</h1></main>
    `)
    : (errorCount = 0);
});

// removes the error when the user starts typing again

allInputs.forEach((i) => {
  i.addEventListener(`keypress`, () => {
    i.classList.remove(`error`);
  });
});

// check if all inputs are valid

function validInputs(fname, lname, email, password) {
  fname.value === ``
    ? fname.classList.add(`error`)
    : fname.classList.remove(`error`);

  lname.value === ``
    ? lname.classList.add(`error`)
    : lname.classList.remove(`error`);

  !validateEmail(email.value)
    ? email.classList.add(`error`)
    : email.classList.remove(`error`);

  password.value === ``
    ? password.classList.add(`error`)
    : password.classList.remove(`error`);
}

// email validation function

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
