var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

window.onload = function () {
    console.log("start")
    let hova = document.getElementById("ide");
    let sor = document.createElement("div");
    sor.classList.add("egymás_mellé");
    hova.appendChild(sor);
    for (var i = 0; i < 10; i++) {
        let szám = document.createElement("div")
        sor.appendChild(szám)
        szám.classList.add("doboz");
        szám.innerText = i + 1;
        szám.style.background = `rgb(${255 - (25 * i)}, 0, 0)`
        szám.style.color=`white`
    }

    let hova2 = document.getElementById("pascal");
    for (let s = 0; s < 10; s++) {
        let sor2 = document.createElement("div")
        sor2.classList.add("sor2");
        hova2.appendChild(sor2);
        for (let o = 0; o <= s; o++) {
            let oszlop = document.createElement("div");
            oszlop.classList.add("cella");
            sor2.appendChild(oszlop);
            if (o === 0 || o === s) {
                oszlop.innerText = 1;
            }
            else {
                oszlop.innerText = faktoriális(s) / (faktoriális(o) * faktoriális(s - o));
            }
        }
    }
}