// Módosítjuk a h1 elem tartalmát.
document.querySelector("h1").innerHTML = "Hello ITFactory";

// Kép forrásának módosítása.
function changeUrl() {
    document.querySelector("img").src = "http://cms.sulinet.hu/get/d/c2ffefdd-3248-4bbc-b294-26c3159a112f/1/8/b/Normal/holdkorong.jpg";
}

// Stílus módosítása.
function changeStyle() {
    document.querySelector("img").style.width = "80px";
}

// Adatok ellenőrzése.
function validate() {
    var input = document.querySelector(".input-validate");
    var errorP = document.querySelector(".no-validate");
    var inputValue = input.value;
    
    if ( inputValue < 6 || inputValue > 20 ) {
        console.log("Az érték nem megfelelő!"); 
        errorP.innerHTML = "Az érték nem megfelelő";    
    } else {
        errorP.innerHTML = "";            
    }
    
    //Kiírja változóba vagy egy szöveget a consol-ba.
    // console.log(inputValue);
    
    //indexOf() függvény
    // var jelszo = "unex123456";
    //jelszo.indexOf("unex")
    //visszadja a kezdőpozíciót, azaz 4 (mert 0-tól indul)
    //-1-et, ha nem találja
    //if (jelszo.indexOf("unex") !== -1) { alert("Nem jó jelszó"); }
    
    //kiiratás ablakban:
    //alert("Nem jó jelszó");
    
    
}
