let div = document.querySelector("div");
let check = confirm("Do you love me?");

while (true) {
  if (check == true) {
    div.innerText = "I Love you too❤️";
    break;
  } else {
    check = confirm("Thing again😡😡😡. Do you love me?");
  }
}
