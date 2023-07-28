# Foodier

*Entrega Final - Gelabert Francisco - Comisión 52150 Coderhouse*

## 01- Deploy Final

**Github**

https://franciscogelabert.github.io/EntregaFinal_JS_GelabertFrancisco/


## 02- Descripción entrega Final 

La siguiente entrega agrupa todos los conceptos vistos en el curso de **JavaScript**, desde la primera preentrega hasta la tercera y se incluye también todo lo visto en las últimas clases relacionadas a Librerías, Asincronía y promesas y Ajax & Fetch.

En el punto uno se puede acceder al Deploy de la entrega Final y debajo se puede acceder a las entregas incrementales intermedias, donde se puede observar como fué evolucionando la solución. 

## 03- Funcionalidades generales del Sistema.

El objetivo de Foodier es brindarle a un usuario la posibilidad de publicar y organizar publicaciones relacionadas a recetas de comidas y experiencias en negocios gastronómicos.
Permitiéndoles acceder a las recetas que más le gustaron a los usuarios (♥️), a listados de recetas de autores específicos (@) y a recetas que contengan temas particulares (#).

A continuación, se presenta un diagrama de Casos de uso simplificado y un detalle con la descripción de los mismos a trazo grueso.


![Diagrama de Funcionalidades](https://github.com/franciscogelabert/EntregaFinal_JS_GelabertFrancisco/blob/master/docs/0%20-%20Diagrama%20Foodier.png)




## Algunas aclaraciones sobre la entrega.


| Nombre | Description |
| --- | --- |
| 01- Home | No agrega contenido a la entrega, se sube solo a los efectos de darle contexto y navegabilidad al resto del trabajo. En la misma se presenta una pantalla desde el cual se puede acceder al contenido publicado por los contenidistas del sitio. Mediante esta pantallase puede acceder a las diferentes funcionalidades para el login o registro de usuarios, consultar info de mi perfil, buscar publicaciones y publicar.  |
| 02. Ingresar/Registrar Usuario | Permite el ingreso de un usuario existente y/o el registro de un nuevo usuario. Una vez autenticado se habilitan nuevos permisos, como ser por ejemplo publicar y gestionar publicaciones. Incorpora funcionalidades que ineractúan con el DOM, validando los datos ingresados por el usuario e interactuando con el mismo mediante mensajes (Toastify y SweetAlert). También se se incorpora asincronía simulando una promoción por tiempo limitado. (setInterval y clearInterval )
| 03. Visitar Perfil | Mediante esta funcionalidad se puede acceder a gestionar las publicaciones ya realizadas y a publicar nuevas. Incorpora funcionalidades que ineractúan con el DOM. Las recetas que se muestran en dicho perfil se consmen mediante un fetch de un JSON (fetch('../misRecetas.json'))|
| 04. Buscar Publicaciones |Permite la búsqueda de publicaciones en el portal de Foodier. Incorpora funcionalidades que ineractúan con el DOM, validando los datos ingresados por el usuario e interactuando con el mismo mediante mensajes (SweetAlert). También se se incorpora asincronía consumiendo dos APIs, la primera traduce los criterios de búsqueda del usuario ![Rapid Api - GoogleTranslate](https://rapidapi.com/opteka-opteka-default/api/google-translate105) y la segunda trae recetas relacionadas a dicha palabra ![Rapid Api - Recetas](https://rapidapi.com/edamam/api/recipe-search-and-diet), luego se renderiza todo el resultado en la página |
| 05. Publicar | Permite agregar una nueva publicación.|
| 06. Saludable | Permite agregar una nueva publicación.|







