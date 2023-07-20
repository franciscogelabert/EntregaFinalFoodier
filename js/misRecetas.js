
traerJson();

function traerJson() {
    fetch('../misRecetas.json')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('No se pudieron cargar las recetas' + response.status);
            }
        })
        .then((misRecetas) => {

            for (let i = 0; i < misRecetas.length; i++) {
                cargarPublicacion(armarPublicacion(misRecetas[i]));
            }


        })
        .catch((error) => {
            console.log('En este momento el Servidor no puede procesar el pedido');
        })
}

function armarPublicacion(elem) {

    const publicacion = `<!-- recipe ${elem.id} -->
    <div class="card gradiente">
     <h3>${elem.titulo}</h3>
     <a href="404.html">
         <img src="${elem.ubicacion}" class="imagenReceta card-img-top w-100 mx-auto p-2" alt="${elem.alt}">
     </a>
     <div class="card-body">
         <p class="card-text align-middle"> ${elem.descripcion}
             <a href="404.html" class="card-link">Ver más... </a>
         </p>
         <p class="textLike">${elem.tema}</p>
         <a href="404.html" Title="Me Gusta">
             <svg xmlns="http://www.w3.org/2000/svg" alt="corazón que se usa para indicar que te gusta la publicación"
              class=" colorLike icon icon-tabler icon-tabler-heart smallimagebox" stroke-width="2" stroke="currentColor"
              fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                 <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                 </path>
             </svg>
         </a>
         <a href="404.html" Title="Compartir">
             <svg xmlns="http://www.w3.org/2000/svg" alt="acceso que se usa para compartir la publicación." class=" colorShare icon icon-tabler icon-tabler-share smallimagebox"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                 <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                 <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                 <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                 <path d="M8.7 10.7l6.6 -3.4"></path>
                 <path d="M8.7 13.3l6.6 3.4"></path>
             </svg>
         </a>
         <a href="404.html" Title="Editar">
             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit smallimagebox colorEdit"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                 <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                 <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z">
                 </path>
                 <path d="M16 5l3 3"></path>
             </svg>
         </a>
         <a href="404.html" Title="Eliminar">
             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash smallimagebox colorDelete"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                 <path d="M4 7l16 0"></path>
                 <path d="M10 11l0 6"></path>
                 <path d="M14 11l0 6"></path>
                 <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                 <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
             </svg>
         </a>
         <p class="textLike">${elem.megusta} Me Gusta</p>
     </div>
 </div>
<!-- end recipe ${elem.id} -->`
    return publicacion;

}


function cargarPublicacion(publicacion) {
    const publicaciones = document.getElementById("publicaciones");
    const btn = document.createElement('article');
    btn.classList.add("col-sm-12");
    btn.classList.add("col-md-6");
    btn.classList.add("col-lg-3");
    btn.classList.add("mt-3");
    console.log(btn);
    btn.innerHTML = publicacion;
    publicaciones.appendChild(btn);

}

