let graAktywna = true;
let wynik = 0;

let liczby = parseInt(prompt("do ilu chesz liczby?"));

function spadajacyObiekt(klasa) {
  if (!graAktywna) return;

  const obiekt = document.createElement('div');
  obiekt.classList.add(klasa);
  obiekt.style.left = Math.random() * (window.innerWidth - 32) + 'px';
  obiekt.style.top = '0px';
  obiekt.style.zIndex = "1";
  document.body.appendChild(obiekt);
  obiekt.innerHTML = Math.floor(Math.random() * liczby) + 1;
  obiekt.style.color = "white";

  obiekt.onclick = function(){
    if(parseInt(obiekt.innerHTML) % 7 == 0 || checkHasSeven(obiekt.innerHTML)) {
      wynik += 1;
      document.getElementById("Wynik").innerHTML = "Wynik: " + wynik;
      obiekt.innerHTML = "🎅";
      obiekt.style.fontSize = "60px";
    }
    else {
      graAktywna = false;
      document.getElementById("ekranKoncowy").style.visibility = "visible";
      document.getElementById("ekranKoncowy2").style.visibility = "visible";
      document.getElementById("ekranKoncowy3").style.visibility = "visible";
      document.body.style.backgroundImage = "url(sad.jpg)"
    }
  };
  
  let y = 0;
  const spadanie = setInterval(() => {
    if (!graAktywna) {
      clearInterval(spadanie);
      obiekt.remove();
      return;
    }

    y += 4;
    obiekt.style.top = y + 'px';

    const obiektX = obiekt.offsetLeft;
    const obiektY = obiekt.offsetTop;
    
    if (y > window.innerHeight) {
      obiekt.remove();
      clearInterval(spadanie);
    }
  }, 20); 
}

function stworzObiekt() {
  spadajacyObiekt('obiekt');
}

function checkHasSeven(theText) {
  for(let i = 0; i < theText.length; i++) {
    if(theText[i] == "7") {
      return true;
    }
  }
  return false;
}


setInterval(stworzObiekt, 500, graAktywna);

