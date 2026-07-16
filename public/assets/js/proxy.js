const params =
new URLSearchParams(
window.location.search
);


const url =
params.get("url");


const display =
document.getElementById(
"url-display"
);


const frame =
document.getElementById(
"proxy-frame"
);


const loading =
document.getElementById(
"loading"
);



if(url){

display.textContent=url;


setTimeout(()=>{


frame.src =
"/proxy/" + url;


frame.style.display="block";


loading.style.display="none";


},1800);


}
else{


display.textContent=
"No target";


}
