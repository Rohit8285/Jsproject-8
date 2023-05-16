const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~'\\.\';:+=^*_-0123456789`;
let output = document.getElementById("output");

function randomValue(value) {
  return Math.floor(Math.random() * value);
  // console.log( Math.floor(Math.random()*value));
}

function genpassword() {
  let length = document.getElementById("length").value;
  document.getElementById("length-val").textContent = length;

  let str = "";

  for (let i = 0; i < length; i++) {
    let random = randomValue(characters.length);
    str += characters.charAt(random);
  }

  output.value = str;
}
function copyclip() {
  output.select();
  document.execCommand("copy");
  alert("Password Copied!");
}

genpassword();
