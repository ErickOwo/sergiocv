const check = document.querySelector(".check");
console.log(check)
check.addEventListener('click', idioma);

console.log(check.checked)

function idioma() {
  console.log(check)
  let id = check.checked;
  if (id) {
    location.href = "es/index.html";
  } else {
    location.href = "../index.html";
  }
}
