// Constantes y Variables
const returns = document.getElementById("returns");
const returnsMobile = document.getElementById("returns-mobile");
const tituloReturns = document.getElementById("tituloReturns");
const parrafoReturnsMobile  = document.getElementById("parrafoReturnsMobile");
const parrafoReturns  = document.getElementById("parrafoReturns");
const details = document.getElementById("details");
const detailsMobile = document.getElementById("details-mobile")
const tituloDetails = document.getElementById("tituloDetails");
const parrafoDetails = document.getElementById("parrafoDetails");
const parrafoDetailsMobile = document.getElementById("parrafoDetailsMobile");

returnsMobile.addEventListener("click", () => {
    
    parrafoReturnsMobile.classList.remove('returns-oculto');
    parrafoDetailsMobile.style.visibility = "hidden";
    parrafoReturnsMobile.style.display = "block";
    detailsMobile.classList.remove('negrita');
    returnsMobile.classList.toggle('negrita');
    returnsMobile.classList.toggle('subrayado');
    detailsMobile.classList.remove('subrayado');

})

returns.addEventListener("click", () => {
    parrafoReturns.classList.remove('returns-oculto');
    parrafoDetails.style.visibility = "hidden";
    parrafoReturns.style.display = "block";
    tituloDetails.classList.remove('negrita');
    tituloReturns.classList.toggle('negrita');
    tituloReturns.classList.toggle('subrayado');
    tituloDetails.classList.remove('subrayado');
})

detailsMobile.addEventListener("click", () => {
    
    parrafoReturnsMobile.classList.toggle('returns-oculto');
    parrafoDetailsMobile.style.visibility = "visible";
    parrafoReturnsMobile.style.display = "none";
    returnsMobile.classList.remove('negrita');
    detailsMobile.classList.toggle('negrita');
    returnsMobile.classList.remove('subrayado');
    detailsMobile.classList.toggle('subrayado');

})

details.addEventListener("click", () => {
    parrafoReturns.classList.toggle('returns-oculto');
    parrafoDetails.style.visibility = "visible";
    parrafoReturns.style.display = "none";
    tituloReturns.classList.remove('negrita');
    tituloDetails.classList.toggle('negrita');
    tituloReturns.classList.remove('subrayado');
    tituloDetails.classList.toggle('subrayado');

})


// Dentro de los articulos - onclick Returns & Exchanges
