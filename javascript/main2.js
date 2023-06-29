const contenedorViajes = document.querySelector("#contenedor-viajes");
const contenedorCabecera = document.querySelector("#cabecera")
const banner = document.querySelector("#banner img");
const fragment = document.createDocumentFragment();



const arrayViajes = [{
    url: "assets/viajes-1.jpg",
    titulo: "Viaje uno",
    alt: "mujer en una hamaca",
    msg: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final",
    id: "fotoViaje1"
},
{
    url: "assets/viajes-2.jpg",
    titulo: "Viaje uno",
    alt: " cabaña sobre el agua",
    msg: "La peculiaridad de este trozo de texto en latín es que no tiene sentido alguno. El texto está hecho con el propósito de no distraer al usuario/diseñador. Primero por estar en latín, idioma desconocido para casi toda la población mundial.",
    id: "fotoViaje2"
},

    ,
{
    url: "assets/viajes-3.jpg",
    titulo: "Viaje uno",
    alt: " señales indicando direcciones",
    msg: "¿Por qué está hecho así? Precisamente porque es un texto de relleno, para que en el momento de revisar el diseño final el diseñador se de cuenta a la primera de que eso hay que sustituirlo por un texto real. Aunque se la una simple frase del texto, es suficiente para comprender que ni es inglés, ni es español ni es cualquier idioma usado en la actualidad.",
    id: "fotoViaje3"
},]

const arrayBanners = [{
    url: "assets/cacota.jpg",
    alt: "cabecera uno",
},
{
    url: "assets/3.jpg",
    alt: "cabecera dos",
},
{
    url: "assets/4.jpg",
    alt: "cabecera tres",
},
{
    url: "assets/5.jpg",
    alt: "cabecera cuatro",
},
{
    url: "assets/6.jpg",
    alt: "cabecera cinco",
},
{
    url: "assets/7.jpg",
    alt: "cabecera seis",
},


]

const pintarBanner = () => {
    let indice = Math.floor(Math.random() * arrayBanners.length);
    banner.src = arrayBanners[indice].url;
}


const pintarCards = () => {


    arrayViajes.forEach((item) => {
        const cajaFoto = document.createElement("FIGURE");
        cajaFoto.classList.add('recuadro');


        const caja = document.createElement("DIV");

        const imagen = document.createElement("IMG");

        imagen.src = item.url;
        imagen.alt = item.alt;
        imagen.id = item.id;
        
        imagen.addEventListener('click', (ev) => {
            let fotoViaje1 = document.querySelector("#fotoViaje1");
            let fotoViaje2 = document.querySelector("#fotoViaje2");
            let fotoViaje3 = document.querySelector("#fotoViaje3");
            if(ev.target == fotoViaje1){
                fotoViaje1.classList.add("fotoViaje");
                fotoViaje2.classList.remove("fotoViaje");
                fotoViaje3.classList.remove("fotoViaje");
                }
                else if (ev.target == fotoViaje2){
                    fotoViaje2.classList.add("fotoViaje");
                    fotoViaje1.classList.remove("fotoViaje");
                    fotoViaje3.classList.remove("fotoViaje");
                    } 
                    else if (ev.target == fotoViaje3){
                        fotoViaje3.classList.add("fotoViaje");
                        fotoViaje1.classList.remove("fotoViaje");
                        fotoViaje2.classList.remove("fotoViaje");
                        } 
            }

        );



        const descripcion = document.createElement("P");
        descripcion.textContent = item.msg;
        const titulo = document.createElement("H3");
        titulo.textContent = item.titulo;
        caja.append(imagen);
        cajaFoto.append(caja, titulo, descripcion);

        fragment.append(cajaFoto);

    })
    contenedorViajes.append(fragment);

}

pintarBanner();
pintarCards();

