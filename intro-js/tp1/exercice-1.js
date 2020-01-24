function fibonaci(el1,el2,f){
    console.log("1er element: "+el1);
    console.log("2ème element: "+el2);
    for(var i=0;i<f-2;i++){
        var temporaire = el2;
        el2 = el1 + temporaire;
        el1 = temporaire;
        console.log((i+3)+"ème element: "+el2)
    }
}
fibonaci(0,1,20);