const back =
document.getElementById("back");


const forward =
document.getElementById("forward");


const reload =
document.getElementById("reload");


const home =
document.getElementById("home");



back.onclick = () => {

history.back();

};



forward.onclick = () => {

history.forward();

};



reload.onclick = () => {

location.reload();

};



home.onclick = () => {

window.location.href="/";

};
