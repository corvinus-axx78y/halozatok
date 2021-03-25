var kérdések;
var kérdéssorszám = 0;
window.onload = function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}

function kérdésMegjelenítés(kérdés) {
    let kérdés_ide = document.getElementById("kérdés_szöveg")
    kérdés_ide.innerHTML = kérdések[kérdés].questionText;
    console.log(`${kérdések.length} kérdés érkezett`)


        for (var i = 1; i <= 3; i++) {
            let elem = document.getElementById("válasz" + i)
            elem.innerHTML = kérdések[kérdés]["answer" + i]
    }

    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image
}

function előrekattintás() {
    kérdéssorszám++;
    if (kérdéssorszám == kérdések.length) {
        kérdéssorszám = 0;
    }
    kérdésMegjelenítés(kérdéssorszám);
    Clear();
}

function visszakattintás() {
    if (kérdéssorszám > 0) {
        kérdéssorszám = kérdéssorszám - 1;
    }
    else {
        kérdéssorszám = kérdések.length - 1;
    }
    kérdésMegjelenítés(kérdéssorszám);
    Clear();
}

function válaszok(n) {
    if (n == kérdések[kérdéssorszám].correctAnswer)
    {
        document.getElementById("válasz" + n).classList.add("jo");
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz");
    }
}

function Clear() {
    document.getElementById("válasz1").classList.remove("jo");
    document.getElementById("válasz1").classList.remove("rossz");
    document.getElementById("válasz2").classList.remove("jo");
    document.getElementById("válasz2").classList.remove("rossz");
    document.getElementById("válasz3").classList.remove("jo");
    document.getElementById("válasz3").classList.remove("rossz");
}