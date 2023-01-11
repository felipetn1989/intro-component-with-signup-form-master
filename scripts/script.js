/* First, I added an event listener to the 'Claim your free trial' button. When I click on it, it will call the function verify */

claim.addEventListener("click", verify);

// Creating variables to be used in the function

let inputs = document.querySelectorAll(".personal_info");

let spans = document.querySelectorAll(".errormsg");

/* First, the function prevents the browser default behavior (the browser comes with a script that shows 'this isn't a valid e-mail' or 'please fill out this form', but the challenge requires a custom script). Using a forEach command, the function will check each input to see if it has been completed or not, and display the error message and change the border accordinly */

function verify(x) {
  x.preventDefault();
  inputs.forEach((input, index) => {
    if (input.value.length == 0) {
      input.style.border = "1px solid var(--Red)";
      spans[index].style.display = "block";
    } else {
      input.style.border = "1px solid lightgray";
      spans[index].style.display = "none";
    }
  });

/* The second part of the code uses a RegEx to check if the e-mail has a valid format. In this case, no need to use a forEach, since we only need to check the e-mail input. If it isn't valid, we do the required transformations and display error messages */

  let mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (inputs[2].value.match(mailformat)) {
    inputs[2].style.border = "1px solid lightgray";
    spans[2].style.display = "none";
  } else {
    inputs[2].style.border = "1px solid var(--Red)";
    spans[2].style.display = "block";
  }
}
