var kérdések;
var kérdéssorszám = 1;
var aktkérdés;
window.onload = function() {
    letöltés()
    /*fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
    fetch('/questions/4')
        .then(response => response.json())
        .then(data => console.log(data)
        );*/
}

/*function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}*/
function letöltés() {
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data)
        );
}

function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(válaszfeldolgozás)
        .then(kérdésMegjelenítés);
        
}

function kérdésMegjelenítés(kérdés) {
    aktkérdés = kérdés;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    if (kérdés.image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.getElementById("kép1").src = "";
    }

}

/*function kérdésMegjelenítés(kérdés) {
    let kérdés_ide = document.getElementById("kérdés_szöveg")
    kérdés_ide.innerHTML = kérdések[kérdés].questionText;
    console.log(`${kérdések.length} kérdés érkezett`)


        for (var i = 1; i <= 3; i++) {
            let elem = document.getElementById("válasz" + i)
            elem.innerHTML = kérdések[kérdés]["answer" + i]
    }

    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image
}*/

function előrekattintás() {
    if (kérdéssorszám == 859) {
        kérdéssorszám = 1;

    }
    else {
        kérdéssorszám++;
    }
    kérdésBetöltés(kérdéssorszám);
    Clear();
    /*if (kérdéssorszám == kérdések.length) {
        kérdéssorszám = 0;
    }
    kérdésMegjelenítés(kérdéssorszám);
    Clear();*/
}

function visszakattintás() {
    /*if (kérdéssorszám > 0) {
        kérdéssorszám = kérdéssorszám - 1;
    }
    else {
        kérdéssorszám = kérdések.length - 1;
    }
    kérdésMegjelenítés(kérdéssorszám);
    Clear();*/
    if (kérdéssorszám == 1) {
        kérdéssorszám = 859;
        
    }
    else {
        kérdéssorszám--;
    }
    kérdésBetöltés(kérdéssorszám);
    Clear();
}

function válaszok(n) {
    if (n == aktkérdés.correctAnswer)
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