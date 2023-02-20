// Variables y Constantes MOBILE
const contenedorPrincipalVideoMobile = document.getElementById("contenedorprincipalvideomobile");
const videoPrincipalMobile = document.getElementById("videoprincipalmobile");
const videoChicoMobile1 = document.getElementById("videochicomobile1");
const videoChicoMobile2 = document.getElementById("videochicomobile2");
const videoChicoMobile3 = document.getElementById("videochicomobile3");
const videoChicoMobile4 = document.getElementById("videochicomobile4");
const videoPrincipalNuevoMobile = document.createElement("iframe");
const videoPrincipalMobile2 = document.createElement("iframe");
const videoPrincipalMobile3 = document.createElement("iframe");
const videoPrincipalMobile4 = document.createElement("iframe");
let creadoMobile1 = false;
let creadoMobile2 = false;
let creadoMobile3 = false;
let creadoMobile4 = false;

// Variables y Constantes Desktop
const contenedorPrincipalVideoDesktop = document.getElementById("contenedorprincipalvideodesktop");
const videoPrincipalDesktop = document.getElementById("videoprincipaldesktop");
const videoChicoDesktop1 = document.getElementById("videochicodesktop1");
const videoChicoDesktop2 = document.getElementById("videochicodesktop2");
const videoChicoDesktop3 = document.getElementById("videochicodesktop3");
const videoChicoDesktop4 = document.getElementById("videochicodesktop4");
const videoPrincipalNuevoDesktop = document.createElement("iframe");
const videoPrincipalDesktop2 = document.createElement("iframe");
const videoPrincipalDesktop3 = document.createElement("iframe");
const videoPrincipalDesktop4 = document.createElement("iframe");
let creadoDesktop1 = false;
let creadoDesktop2 = false;
let creadoDesktop3 = false;
let creadoDesktop4 = false;

// Desktop - Videos
videoChicoDesktop1.addEventListener("click", () => {

    if(creadoDesktop1 === false){
        
        creadoDesktop1 = true;

        videoPrincipalDesktop.remove();
        videoPrincipalDesktop2.remove();
        videoPrincipalDesktop3.remove();
        videoPrincipalDesktop4.remove();
    
        videoPrincipalNuevoDesktop.setAttribute("id", "videoprincipaldenuevo");
        videoPrincipalNuevoDesktop.setAttribute("class", "video-principal-desktop");
        videoPrincipalNuevoDesktop.setAttribute("width", "560");
        videoPrincipalNuevoDesktop.setAttribute("heigth", "315");
        videoPrincipalNuevoDesktop.setAttribute("src", "https://www.youtube.com/embed/xc_mfqPS2LY");
        videoPrincipalNuevoDesktop.setAttribute("title", "YouTube video player");
        videoPrincipalNuevoDesktop.setAttribute("frameborder", "0");
    
        contenedorPrincipalVideoDesktop.append(videoPrincipalNuevoDesktop);

    } else {
        console.log("ya creado");

        videoPrincipalDesktop.remove();
        videoPrincipalDesktop.remove();
        videoPrincipalDesktop.remove();
        videoPrincipalDesktop.remove();
        contenedorPrincipalVideoDesktop.append(videoPrincipalNuevoDesktop);
    }


})

videoChicoDesktop2.addEventListener("click", () => {

    if(creadoDesktop2 === false){
        
        creadoDesktop2 = true;

        videoPrincipalDesktop.remove();
        videoPrincipalNuevoDesktop.remove();
        videoPrincipalDesktop3.remove();
        videoPrincipalDesktop4.remove();
    
        videoPrincipalDesktop2.setAttribute("id", "videoprincipal2");
        videoPrincipalDesktop2.setAttribute("class", "video-principal-desktop");
        videoPrincipalDesktop2.setAttribute("width", "560");
        videoPrincipalDesktop2.setAttribute("heigth", "315");
        videoPrincipalDesktop2.setAttribute("src", "https://www.youtube.com/embed/LkJ5jJuraLQ");
        videoPrincipalDesktop2.setAttribute("title", "YouTube video player");
        videoPrincipalDesktop2.setAttribute("frameborder", "0");
    
        contenedorPrincipalVideoDesktop.append(videoPrincipalDesktop2);

    } else {
        console.log("ya creado");

        videoPrincipalDesktop.remove();
        videoPrincipalNuevoDesktop.remove();
        videoPrincipalDesktop4.remove();
        videoPrincipalDesktop3.remove();

        contenedorPrincipalVideoDesktop.append(videoPrincipalDesktop2);
    }


})

videoChicoDesktop3.addEventListener("click", () => {

    if(creadoDesktop3 === false){
        
        creadoDesktop3 = true;

        videoPrincipalDesktop.remove();
        videoPrincipalNuevoDesktop.remDesktop
        videoPrincipalDesktop2.remove();
        videoPrincipalDesktop4.remove();
        
    
        videoPrincipalDesktop3.setAttribute("id", "videoprincipal3");
        videoPrincipalDesktop3.setAttribute("class", "video-principal-desktop");
        videoPrincipalDesktop3.setAttribute("width", "560");
        videoPrincipalDesktop3.setAttribute("heigth", "315");
        videoPrincipalDesktop3.setAttribute("src", "https://www.youtube.com/embed/wAqc_zfmML0");
        videoPrincipalDesktop3.setAttribute("title", "YouTube video player");
        videoPrincipalDesktop3.setAttribute("frameborder", "0");
    
        contenedorPrincipalVideoDesktop.append(videoPrincipalDesktop3);

    } else {
        console.log("ya creado");

        videoPrincipalDesktop.remove();
        videoPrincipalNuevoDesktop.remove();
        videoPrincipalDesktop4.remove();
        videoPrincipalDesktop2.remove();
        contenedorPrincipalVideoDesktop.append(videoPrincipalDesktop3);
    }


})

videoChicoDesktop4.addEventListener("click", () => {

    if(creadoDesktop4 === false){
        
        creadoDesktop4 = true;
        
        videoPrincipalDesktop.remove();
        videoPrincipalNuevoDesktop.remove();
        videoPrincipalDesktop3.remove();
        videoPrincipalDesktop2.remove();
    
        videoPrincipalDesktop4.setAttribute("id", "videoprincipal4");
        videoPrincipalDesktop4.setAttribute("class", "video-principal-desktop");
        videoPrincipalDesktop4.setAttribute("width", "560");
        videoPrincipalDesktop4.setAttribute("heigth", "315");
        videoPrincipalDesktop4.setAttribute("src", "https://www.youtube.com/embed/q5M8K2Jm2bE");
        videoPrincipalDesktop4.setAttribute("title", "YouTube video player");
        videoPrincipalDesktop4.setAttribute("frameborder", "0");
    
        contenedorPrincipalVideoDesktop.append(videoPrincipalDesktop4);

    } else {
        console.log("ya creado");
        videoPrincipalDesktop.remove();
        videoPrincipalNuevoDesktop.remove();
        videoPrincipalDesktop3.remove();
        videoPrincipalDesktop2.remove();
        contenedorPrincipalVideoDesktop.append(videoPrincipalDesktop4);
    }
})


// Mobile - Videos
videoChicoMobile1.addEventListener("click", () => {

    if(creadoMobile1 === false){
        
        creadoMobile1 = true;

        videoPrincipalMobile.remove();
        videoPrincipalMobile2.remove();
        videoPrincipalMobile3.remove();
        videoPrincipalMobile4.remove();
    
        videoPrincipalNuevoMobile.setAttribute("id", "videoprincipaldenuevo");
        videoPrincipalNuevoMobile.setAttribute("class", "video-principal-mobile");
        videoPrincipalNuevoMobile.setAttribute("width", "560");
        videoPrincipalNuevoMobile.setAttribute("heigth", "315");
        videoPrincipalNuevoMobile.setAttribute("src", "https://www.youtube.com/embed/xc_mfqPS2LY");
        videoPrincipalNuevoMobile.setAttribute("title", "YouTube video player");
        videoPrincipalNuevoMobile.setAttribute("frameborder", "0");
    
        contenedorPrincipalVideoMobile.append(videoPrincipalNuevoMobile);

    } else {
        console.log("ya creado");

        videoPrincipalMobile.remove();
        videoPrincipalMobile4.remove();
        videoPrincipalMobile2.remove();
        videoPrincipalMobile3.remove();
        contenedorPrincipalVideoMobile.append(videoPrincipalNuevoMobile);
    }


})

videoChicoMobile2.addEventListener("click", () => {

    if(creadoMobile2 === false){
        
        creadoMobile2 = true;

        videoPrincipalMobile.remove();
        videoPrincipalNuevoMobile.remove();
        videoPrincipalMobile3.remove();
        videoPrincipalMobile4.remove();

    
        videoPrincipalMobile2.setAttribute("id", "videoprincipal2");
        videoPrincipalMobile2.setAttribute("class", "video-principal-mobile");
        videoPrincipalMobile2.setAttribute("width", "560");
        videoPrincipalMobile2.setAttribute("heigth", "315");
        videoPrincipalMobile2.setAttribute("src", "https://www.youtube.com/embed/LkJ5jJuraLQ");
        videoPrincipalMobile2.setAttribute("title", "YouTube video player");
        videoPrincipalMobile2.setAttribute("frameborder", "0");
    
        contenedorPrincipalVideoMobile.append(videoPrincipalMobile2);

    } else {
        console.log("ya creado");

        videoPrincipalMobile.remove();
        videoPrincipalNuevoMobile.remove();
        videoPrincipalMobile4.remove();
        videoPrincipalMobile3.remove();

        contenedorPrincipalVideoMobile.append(videoPrincipalMobile2);
    }


})

videoChicoMobile3.addEventListener("click", () => {

    if(creadoMobile3 === false){
        
        creadoMobile3 = true;

        videoPrincipalMobile.remove();
        videoPrincipalNuevoMobile.remove();
        videoPrincipalMobile2.remove();
        videoPrincipalMobile4.remove();
        
    
        videoPrincipalMobile3.setAttribute("id", "videoprincipal3");
        videoPrincipalMobile3.setAttribute("class", "video-principal-mobile");
        videoPrincipalMobile3.setAttribute("width", "560");
        videoPrincipalMobile3.setAttribute("heigth", "315");
        videoPrincipalMobile3.setAttribute("src", "https://www.youtube.com/embed/wAqc_zfmML0");
        videoPrincipalMobile3.setAttribute("title", "YouTube video player");
        videoPrincipalMobile3.setAttribute("frameborder", "0");
    
        contenedorPrincipalVideoMobile.append(videoPrincipalMobile3);

    } else {
        console.log("ya creado");

        videoPrincipalMobile.remove();
        videoPrincipalNuevoMobile.remove();
        videoPrincipalMobile4.remove();
        videoPrincipalMobile2.remove();
        contenedorPrincipalVideoMobile.append(videoPrincipalMobile3);
    }


})

videoChicoMobile4.addEventListener("click", () => {

    if(creadoMobile4 === false){
        
        creadoMobile4 = true;
        
        videoPrincipalMobile.remove();
        videoPrincipalNuevoMobile.remove();
        videoPrincipalMobile3.remove();
        videoPrincipalMobile2.remove();
    
        videoPrincipalMobile4.setAttribute("id", "videoprincipal4");
        videoPrincipalMobile4.setAttribute("class", "video-principal-mobile");
        videoPrincipalMobile4.setAttribute("width", "560");
        videoPrincipalMobile4.setAttribute("heigth", "315");
        videoPrincipalMobile4.setAttribute("src", "https://www.youtube.com/embed/q5M8K2Jm2bE");
        videoPrincipalMobile4.setAttribute("title", "YouTube video player");
        videoPrincipalMobile4.setAttribute("frameborder", "0");
    
        contenedorPrincipalVideoMobile.append(videoPrincipalMobile4);

    } else {
        console.log("ya creado");
        videoPrincipalMobile.remove();
        videoPrincipalNuevoMobile.remove();
        videoPrincipalMobile3.remove();
        videoPrincipalMobile2.remove();
        contenedorPrincipalVideoMobile.append(videoPrincipalMobile4);
    }
})



