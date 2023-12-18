# Proyecto FullStack 💻​ # 

## Contenido ##

En este repositorio encontarás una aplicación web en la que podrás realizar búsquedas de cuentos infantiles y audio libros según los personas o palabras del título. Primero tendrás que registarte, y accederas a las pantallas habilitadas para el usuario. Si quieres acceder como admin tendrás que modificar el script para setear el role como admin. 



## Construcción ##
El proyecto se basa en 4 grandes tecnologías unidas entre sí:
1. Mongo DB para alojar los cuentos creados, desde el frontend por el administrador. Podrás encontrar el esquema en la carpeta ```models```.
2. Firebase: esta plataforma nos permite alojar los ficheros necesarios para la creación de los cuentos(Storage), como son las imágenes y los audio-libros. Además, se ha usado Firestore para crear una base de datos de los usuarios registrados, con su rol y un boleano de registro para  luego poder verificar si ya se ha registrado alguna vez o si no (pendiente de hacer FASE 2). Por último, hemos usado su serivicio de autenticación para crear todo el sistema de registro.
3. React: librería Frontend para el diseño de la web a través de componentes. Es importante mencionar que los componentes se comunican de padre a hijo a través de props.
   En este caso, la comunicación de componentes es:
   
   **SearchPage.jsx** componente Padre ---> **Search.jsx y TaleList.jsx** hijos. Search modifica los estados del padre y TaleList recibe los datos para pintarlos.
   **AllTaleList** componente padre ---> **AdminCard** hijo que recibe sus datos para pintar

4. Express: entorno para la producción y desarrollo del Backend de la aplicación. Manejamos la creación de la APi y las peticiones que se relizan a la base de datos.
   
## Fase 2 ##
Todavía no está terminado este proyecto, tiene trabajo pendiente que será realizado a la mayor brevedad posible. 

## ​⚠️ ​Ejecucción ##
Cuando clones el repositorio, tendrás que abrir una terminal y usar el comando ```npm run dev```. De esta forma, lanzarás el script del frontend y el del backend a la vez.
