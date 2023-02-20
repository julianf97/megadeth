const iconoBarras = document.getElementById("iconobarras");
const iconoCarrito = document.getElementById("iconocarrito");
const contenedorCuadradoArticuloCorbata = document.getElementById("contenedorcuadradoarticulocorbata");
const contenedorCuadradoArticuloGorro = document.getElementById("contenedorcuadradoarticulogorro");
const contenedorCuadradoArticuloBuzo = document.getElementById("contenedorcuadradoarticulobuzo");
const corbata2 = document.getElementById("corbata2");
const vicNeonTitulo = document.getElementById("vicneon");
const precioVicNeon = document.getElementById("preciovicneon");
const corbata2Imagen2 = document.getElementById("corbata2imagen2");
const gorro1 = document.getElementById("gorro1");
const gorro2 = document.getElementById("gorro2");
const buzo1 = document.getElementById("buzo1");
const buzo2 = document.getElementById("buzo2");
const bodyStore = document.getElementById("bodystore");
const contenedorMenuDesktop = document.getElementById("contenedormenudesktop");
const botonMenuDesktop = document.getElementById("btnmenudesktop");
const cruzMenuDesktop = document.getElementById("cruzmenudesktop");
const restoDesktop = document.getElementById("restodesktop");
const menustoreipad = document.getElementById("btnmenustoreipad");
const containerMenuStore = document.querySelector(".contenedor-general-menu-store");

// MENU DESKTOP

botonMenuDesktop.addEventListener("click", () => {
    contenedorMenuDesktop.style.visibility = "visible";
    contenedorMenuDesktop.style.opacity = "1";
    botonMenuDesktop.style.visibility = "hidden";
    containerMenuStore.classList.remove('open-menu-store')
})

// Cerrar Menu
cruzMenuDesktop.addEventListener("click", () => {
    contenedorMenuDesktop.style.visibility = "hidden";
    contenedorMenuDesktop.style.opacity = "0";
    botonMenuDesktop.style.visibility = "visible";
})

restoDesktop.addEventListener("click", () => {
    contenedorMenuDesktop.style.visibility = "hidden";
    contenedorMenuDesktop.style.opacity = "0";
    botonMenuDesktop.style.visibility = "visible";
})


menustoreipad.addEventListener("click", () => {
    
    contenedorMenuStore.classList.toggle('open-menu-store');

})

iconoBarras.addEventListener("click", () => {
    
    contenedorMenuStore.classList.toggle('open-menu-store');

})

const salirMenuStore = () => {
    document.addEventListener('click', (event) => {
        const boolIsOutside3 = document.getElementById("contenedormenustore").isSameNode(event.target);

        if (boolIsOutside3) {
            contenedorMenuStore.classList.remove('open-menu-store');
        }
    })
}

const hoverImagenes = () => {
    contenedorCuadradoArticuloCorbata.addEventListener("mouseover", () =>{
        corbata2.classList.toggle('imagen-none');
        corbata2Imagen2.classList.toggle('imagen-block');
    })
    contenedorCuadradoArticuloCorbata.addEventListener("mouseout", () =>{
        corbata2.classList.remove('imagen-none');
        corbata2Imagen2.classList.remove('imagen-block')

    })
    contenedorCuadradoArticuloGorro.addEventListener("mouseover", () =>{
        gorro1.classList.toggle('imagen-none');
        gorro2.classList.toggle('imagen-block');
    })
    contenedorCuadradoArticuloGorro.addEventListener("mouseout", () =>{
        gorro1.classList.remove('imagen-none');
        gorro2.classList.remove('imagen-block');

    })
    contenedorCuadradoArticuloBuzo.addEventListener("mouseover", () =>{
        buzo1.classList.toggle('imagen-none');
        buzo2.classList.toggle('imagen-block');
    })
    contenedorCuadradoArticuloBuzo.addEventListener("mouseout", () =>{
        buzo1.classList.remove('imagen-none');
        buzo2.classList.remove('imagen-block');
    })
    
}



salirMenuStore();
hoverImagenes();
