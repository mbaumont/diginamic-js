function fibonaci(el1, el2) {
    let f;
    do{
        f = parseInt(prompt("Entrez un entier positif"));
        console.log(typeof f);
    }
    while(typeof f !== "number" || f<0);
    document.write("1er element: " + el1 + "</br>");
    document.write("2ème element: " + el2 + "</br>");
    for (var i = 0; i < f - 2; i++) {
        var temporaire = el2;
        el2 = el1 + temporaire;
        el1 = temporaire;
        document.write(i + 3 + "ème element: " + el2 + "</br>");
    }
}
