# Foodier

*Entrega Final - Gelabert Francisco - Comisión 52150 Coderhouse*

## 01- Deploy Final

**Github**

https://franciscogelabert.github.io/EntregaFinal_JS_GelabertFrancisco/


## 02- Descripción entrega Final 

La siguiente entrega agrupa todos los conceptos vistos en el curso de **Desarrollo Web**, desde los wireframes hasta el deploy en un servidor externo.
En el punto uno se puede acceder al Deploy de la entrega Final y debajo se puede acceder a las entregas incrementales intermedias, donde se puede observar como fué evolucionando la solución. 

![Etapas Desarrollo Web](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/docs/EntregaFinalDesarrolloWeb.drawio.png)


## 03- Funcionalidades generales del Sistema.

El objetivo de Foodier es brindarle a un usuario la posibilidad de publicar y organizar publicaciones relacionadas a recetas de comidas y experiencias en negocios gastronómicos.
Permitiéndoles acceder a las recetas que más le gustaron a los usuarios (♥️), a listados de recetas de autores específicos (@) y a recetas que contengan temas particulares (#).

A continuación, se presenta un diagrama de Casos de uso simplificado y un detalle con la descripción de los mismos a trazo grueso.


![Diagrama de Funcionalidades](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/docs/0%20-%20Diagrama%20Foodier.png)


## 02- Etapas de trabajo 

- [Funcionalidades y Wireframes](#funcionalidades-y-wireframes)
- [HTML, CSS y Boxmodeling](#html-css-y-boxmodeling)
- [Responsive, Boostrap, Git y Github](#responsive-boostrap-git-y-github)
- [SASS Animaciones y SEO](#sass-animaciones-y-seo)


## Funcionalidades y Wireframes


| Nombre | Wireframe | Description |
| --- | :---: | --- |
| 01- Home | [Desktop](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/wireframes/1-1%20Home%20Desktop.png) / [Mobile](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/wireframes/1-2%20Home%20Mobile.png) | Presenta una pantalla desde el cual se puede acceder al contenido publicado por los contenidistas de la Página, a las diferentes funcionalidades para el login o registro de usuarios, consultar info de mi perfil, buscar publicaciones y publicar.  |
| 02. Ingresar/Registrar Usuario | [Desktop](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/wireframes/2-1%20Registrar%20Usuario%20Desktop.png) / [Mobile](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/wireframes/2-2%20Registrar%20Usuario%20Mobile.png) |Permite el ingreso de un usuario existente y/o el registro de un nuevo usuario. Una vez autenticado se habilitan nuevos permisos, como ser por ejemplo publicar y gestionar publicaciones.|
| 03. Visitar Perfil | [Desktop](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/wireframes/3-%201%20Visitar%20Perfil%20Desktop.png) / [Mobile](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/wireframes/3-2%20Visitar%20Perfil%20Mobile.png) | Mediante esta funcionalidad se puede acceder a gestionar las publicaciones ya realizadas y a publicar nuevas.|
| 04. Buscar Publicaciones | [Desktop](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/wireframes/4-1%20Buscar%20Desktop.png) / [Mobile](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/wireframes/4-2%20Buscar%20Mobile.png) |Permite la búsqueda de publicaciones en el portal de Foodier.|
| 05. Publicar | [Desktop](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/wireframes/5-1%20Publicar%20Desktop.png) / [Mobile](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/wireframes/5-2%20Publicar%20Mobile.png) |Permite agregar una nueva publicación.|

##  HTML CSS y Boxmodeling

### Archivos HTML y CSS

```bash

style.css: como hoja de estilo
index.html: para funcionalidad 01- Home
buscar.html: para funcionalidad 04. Buscar Publicaciones
ingresar.html: para funcionalidad 02. Ingresar/Registrar Usuario
visistarpefil.html: 03. Visitar Perfil 
publicar.html: 05. Publicar
   
```

![Diagrama de archivos HTML](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/docs/1-%20Diagrama%20Caso%20de%20Uso_html.png)


A continuación se mencionan algunos de los sitios con utilizades para el desarrollo de la Página:

| Descipción | URL |
| --- | --- |
| Fuentes  | https://fonts.google.com/ |
| Logo   |  https://es.freelogodesign.org/manager |
| Favicon | https://favicon.io/  |
| Paleta de colores  |  https://color.adobe.com |
| Iconos  | https://tabler-icons.io/  |
| Patrones fondos | https://www.toptal.com/designers/subtlepatterns/ |
| Generador texto | https://www.lipsum.com/ |
| Referencia desarrollo | https://www.w3schools.com/  y https://developer.mozilla.org/es/|
| Test CSS y HTML | https://codepen.io/emanuel-d-rodriguez-bejarano/pen/mQNKer |
| Imágenes | https://www.freepik.com/ |
| Wireframes | https://balsamiq.com/ |
| Diagramas | https://www.diagrams.net/ |
| Markdown | https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/tutorial-de-markdown/ |


Para Boxmodeling se generaron diferentes contenedores para los diferentes elementos de la página,

debajo se presentan uno para contener una Receta y otro para contener un formulario: 

```bash

.contenedorReceta {
    height: auto;
    width: 30%;
    margin: 10px auto;
    padding: 5px;

}

.contenedorForm {
    height: auto;
    width: 40%;
    margin: 10px auto;
    padding: 10px;
}

```

## Primera Preentrega

Debajo se detallan los links para acceder a la **Primera etapa del desarrollo**: 

**Github:**  https://github.com/franciscogelabert/PrimerPreentregaGelabertFrancisco

**Deploy:**  https://franciscogelabert.github.io/PrimerPreentregaGelabertFrancisco/


## Responsive Boostrap Git y Github

Se dejan dos versiones de la pantalla "visitar perfil", una que logra el comportamiento resposive con Boostrap (visistarpefil.html) y la otra con Grid visistarpefilGrid.html. Para acceder a la versión GRID de visitar perfil utilizar los accesos de la NAV/Header y para acceder a la versión Boostrap utilizar el acceso a Visitar perfil que se presenta en el footer en modo mobile.

Tomando como referencia todo lo visto en el curso y la guía de  [Boostrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/), se procede a aplicar dicha tecnología a todos los archivos, atendiendo a generar una interfaz responsive mobile first. 

En primera instancia se redefine el archivo de estilos y se genera el archivo boost.css. Luego se procede a aplicar boostrap a todos los archivos, debajo se presenatn algunos ejemplos: 

![Diagrama Boostrap](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/docs/2-%20Diagrama%20Caso%20de%20Uso_Boost.png
)

Se genera un **Footer** para mobile de forma tal que solo presente los accesos necesarios:

![footer mobile](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/docs/CapturaFooter.PNG)

y los accesos que se se presentan en los otros breackpoints se apregan dentro de la **NAV** colapsable: 

![Nav con accesos del footer](https://github.com/franciscogelabert/EntregaFinalGelabertFrancisco/blob/master/docs/CapturaNav.PNG)


Se reformula la fotrma en la que se presentan los **artículos**:  


```bash

<div class="contenedorReceta">   ......  </div>

```

a su versión en boostrap:

```bash

<article class="col-sm-12 col-md-6 col-lg-3 mt-3">
     <div class="card gradiente"> ....... </div>
</article>

```

## Segunda Preentrega

Debajo se detallan los links para acceder a la **Segunda etapa del desarrollo**: 

**Github:** https://github.com/franciscogelabert/PreEntrega2GelabertFrancisco

**Deploy:** https://franciscogelabert.github.io/PreEntrega2GelabertFrancisco/index.html


## SASS Animaciones y SEO

En esta tercera entrega se pone el eje sobre los siguientes 3 temas, que se detallan a continuación:

- **[2-1 SASS](#2-1-sass)**
   - [Archivos](#archivos)
   - [Variables Globales](#variables-globales)
   - [Nesting](#nesting)
   - [Extend](#extend)
   - [Iteradores](#iteradores)
   - [Mixin](#mixin)
   - [Condicionales](#condicionales)
   
- **[2-2 Animaciones](#2-2-animaciones)**
   - [Gradiente](#gradiente)
   - [Transformaciones](#transformaciones)
   - [Keyframes](#keyframes)
   - [PlugIn WOW](#plugin-wow)

- **[2-3 SEO](#2-3-seo)**
   - [Archivos HTML](#archivos-html)
   - [Headers](#headers)
   - [Robots](#robots)
   - [Sitemap](#sitemap)

- **[2-4 Página 404](#2-4-página404)**


### 2-1-SASS

Para poder trabajar en primera instancia se instaló [Node.js y NPM](https://nodejs.org/es) y SASS


```bash
npm install sass
   
```

### Archivos 

```bash

Para trabajar con SASS se crearon 8 archivos SCSS:

_animate: para cargar todo lo relacionado a las animaciones
_commons: para todo el código común a todas las páginas
_footer: para todo lo relacionado al footer
_media: codigo para todo lo relacionado a los media query y Grid 
_mixin: código para la reutilización de las clases.
_nav:  para todo lo relacionado a la nav.
_vars: para administrar las variables globales que se van a utilizar.
boost: para ordenar e incluir todos los SCSS
   
```

A continuación se detallan algunos ejemplos del uso de SASS:

### Variables Globales 

```bash

Colores de los íconos

$colorLike:red;
$colorShare:green;
$colorEdit:black;
$colorDelete:black;
$colorView:black;
$colorComment:black;
   
```

### Nesting

```bash

Se utiliza para dar formato al menú footer.

ul{
    li{
        a{
            font-size: $fontSizeXL;
            color: $bkColor4;
            text-decoration: none;
            font-family: $mainFont;
            font-weight: 400;
            left: 150px;
            &:hover{
               @include nResalta($fontSizeXXL,$bkColor4,$bkColor0);
              }
        }
    }
}
   
```


### Extend

```bash

footOne se utiliza para dar formato al footer en mobile y extiende footTwo 
que es el footer que se utiliza en los demás dispositivos.

.footTwo {
    width: $maxwidth;
    text-align: center;
    background-color: $bkColor1;
    }

.footOne {
@extend .footTwo;
        background-color: $bkColor0;
        padding: 10px 10px;
        height: auto;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
   
```
### Map

```bash

Se arma una tupla para darle color a las acciones de las recetas:

$iconColor:(
    'Like':$colorLike,
    'Share':$colorShare,
    'Edit':$colorEdit,
    'Delete':$colorDelete,
    'View':$colorView,
    'Comment':$colorComment,
);

```


### Iteradores

```bash

Se itera la tupla del punto anterior para dar formato a las clases de color.

@each $icon,$color in $iconColor {
    .color#{$icon} {
       color:$color;
       margin-left: 10px;
    }
    .color#{$icon}:hover {
        transform:scale($scale);
        transition: all 1s;
     }
  }

   
```

### Mixin

```bash

Mixin para dar formato a las imágenes

@mixin imagenes ($width,$height,$bRadius,$margin,$padding,$oFit,$tAlign){
    width: $width;
    height: $height;
    border-radius: $bRadius;
    margin: $margin;
    padding: $padding;
    object-fit: $oFit;
    align-items: $tAlign; 
}
   
```

### Condicionales

```bash

Condicionales que se encuentran dentro de un Mixin para seleccionar el formato de grid a utilizar.

@mixin mixGrid ($g,$fr){
    grid-template-columns: repeat($g,$fr);
    @if $g == 1 {
        grid-template-areas: $grid1;
      } @if $g == 2 {
        grid-template-areas: $grid2;
      }  @if $g == 4 {
        grid-template-areas: $grid4;
      } 
    }
   
```

### 2-2-Animaciones

### Gradiente

```bash

Se utiliza para dar degrades asl fondo de las recetas.

.gradiente{
    @include gradient-y($bkColor4,$bkColor2);
}
   
```



### Transformaciones


Se presentan esto 4 tipos de transformación:

Se utiliza el efecto **Translate** en las recetas.

```bash

@mixin translate-y($right,$up) {
    transform: translate($right,$up);
    transition: all 1s;
 }

.gradiente:hover{
    @include translate-y($tx,$ty);
}
```

**Rotate** en el logo Superior

```bash

.rotate:hover{
    transform: rotateZ($deg);
    transition: all 1s;
}
```

**Scale** en acciones de recetas para que cuando se acerque el mouse se agrande.

```bash

@each $icon,$color in $iconColor {
    .color#{$icon} {
       color:$color;
       margin-left: 10px;
    }
    .color#{$icon}:hover {
        transform:scale($scale);
        transition: all 1s;
     }
  }
  ```

**Skew** en iconos de redes en footer.

```bash

   .miniatura:hover{
    transform: skew($skew);
    transition: all 1s;
}

```


### Keyframes

**Keyframe**  que se utiliza para header tipo 2

```bash
@keyframes gradienDiv{
0%{background-color: $bkColor1};
25%{background-color: $bkColor2};
50%{background-color: $bkColor2};
75%{background-color: $bkColor3};
100%{background-color: $bkColor4};
}
```

**Keyframe** que se utiliza para header tipo 3

```bash

// keyframe para h3
@keyframes textOpacity{
from {opacity: 0.3} to {opacity: 1}
		} 

```

### PlugIn WOW

Instalé el PlugIn para animaciones [WOW.js](https://wowjs.uk/) y para su uso mi guía fué [Animate.css](https://animate.style/)

Para su instalación me guié con el [Readme de Wow](https://github.com/graingert/wow)  

Para poder trabajar en primera instancia se instaló  vía NPM. 


```bash

npm install wow.js
   
```

Se cargó el CSS **animate.css** de Wow y se referenció desde todos los HTML

```bash

<link rel="stylesheet" href="../css/animate.css">
   
```

y se cargo el acceso al JavaScript en todos los HTML

```bash

 <script src="../js/wow.min.js"></script>
    <script> 
    new WOW().init();
    </script>
   
```

Respecto al uso, se utilizo principalmente en la  [Página 404](https://github.com/franciscogelabert/PreEntrega3GelabertFrancisco/blob/master/pages/404.html) en 

```bash

 <div class="card gradiente wow bounceIn">
          <h1>404 Opss... </h1> 
        </div>
        <div class="card gradiente wow bounceInRight">

	<h2>Lo sentimos esta receta no salió bien. 
			  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-sad-squint miniatura" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0"></path>
                <path d="M8.5 11.5l1.5 -1.5l-1.5 -1.5"></path>
                <path d="M15.5 11.5l-1.5 -1.5l1.5 -1.5"></path>
             </svg>
	</h2>
 </div>
   
```

### 2-3-SEO

### Archivos HTML

Se agregan nuevas metas en todos los archivos HTML 

```bash

 <meta name="description" content="Te invitamos a compartir y aprender nuevas recetas. Existe un gran Chef en cada casa con ganas de compartir nuevas ideas, sabores, risas y momentos">
   <meta name="author" content="Francisco Gelabert">
   <meta name="keywords" content="red social de recetas, recetas, comida, chef, restaurant, cocinera, cocinero">
   <meta name="copyright" content="Foodier S.A. 2023">
   <meta name="robots" content="index,follow">
   
 ```

### Headers

Se Actualizan los headers (h1), colocando información mas acorde a la info que se quiere transmitir

```bash
Ejemplo de

 <h1>Bienvenido a Foodier</h1>
 
 a 
 
 <h1>Bienvenido a Foodier tu red social de recetas y momentos</h1>
   
 ```

### Robots

Solo a los efectos de probar su utilización se carga el archivo robots.txt

```bash

User-agent: *
Disallow: /docs

Sitemap: https://franciscogelabert.github.io/PreEntrega3GelabertFrancisco/
   
 ```


### Sitemap

Solo a los efectos de probar su utilización se genera y carga el archivo [sitemap.xml](https://github.com/franciscogelabert/PreEntrega3GelabertFrancisco/blob/master/sitemap.xml)

El mismo se genera con la página [www.xml-sitemaps.com](https://www.xml-sitemaps.com)


### 2-4-Página 404

Se desarrollo una [página 404](https://franciscogelabert.github.io/PreEntrega3GelabertFrancisco/pages/404.html) que se presente cuando se accede a algún link que no posee HTML asociado.

Debajo se detallan los links para acceder a la **Tercera etapa del desarrollo**: 

## Tercera Preentrega

**Github:** https://github.com/franciscogelabert/PreEntrega3GelabertFrancisco

**Deploy:** https://franciscogelabert.github.io/PreEntrega3GelabertFrancisco/index.html





