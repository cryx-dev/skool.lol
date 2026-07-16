// ==========================
// Skool.LOL App
// ==========================


// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 2300);


    setTimeout(() => {

        loader.remove();

    }, 3000);


});





// Proxy Launch


const form = document.getElementById("proxy-form");

const input = document.getElementById("url");


form.addEventListener("submit", (event) => {


    event.preventDefault();


    let url = input.value.trim();



    if(!url){

        input.focus();

        return;

    }



    if(!url.startsWith("http://") && !url.startsWith("https://")){

        url = "https://" + url;

    }



    const button = form.querySelector("button");


    button.innerHTML = "Loading...";

    button.style.opacity = ".7";

    button.disabled = true;



    setTimeout(() => {


        window.location.href =

        location.protocol +

        "//" +

        location.host +

        "/proxy/" +

        encodeURIComponent(url);



    },800);



});





// Enter Shortcut

input.addEventListener("keydown",(e)=>{


    if(e.key === "Enter"){

        form.requestSubmit();

    }


});





// Small input animation

input.addEventListener("input",()=>{


    input.parentElement.style.boxShadow =

    "0 0 20px rgba(255,255,255,.04)";


    setTimeout(()=>{

        input.parentElement.style.boxShadow="";

    },200);



});
