claim.addEventListener("click", verify);

let inputs = document.querySelectorAll(".personal_info");

let spans = document.querySelectorAll(".errormsg");

let images = document.querySelectorAll(".error_img");

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
