function fibonaci(el1, el2, f) {
    document.write("1er element: " + el1 + "</br>");
    document.write("2ème element: " + el2 + "</br>");
    for (var i = 0; i < f - 2; i++) {
        var temporaire = el2;
        el2 = el1 + temporaire;
        el1 = temporaire;
        document.write(i + 3 + "ème element: " + el2 + "</br>");
    }
}
