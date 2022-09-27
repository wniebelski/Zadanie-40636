let btn1 = document.getElementById ('dodaj');
let btn2 = document.getElementById ('usun');
let myText = document.getElementById ('tekst');
btn1.addEventListener('click', function(){
    myText.textContent += "This just got added"
  });
  btn2.addEventListener('click', function(){
    myText.textContent = ""
  });
 