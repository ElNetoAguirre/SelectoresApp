<p align="center">
  <a href="https://www.angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="200" alt="Angular Logo"/></a>
</p>

# Selectores App

Aplicación creada utilizando **Bootstrap**, la cual muestra el funcionamiento de los **Formularios Reactivos con múltiples selectores anidados** mediante selectores que al escoger alguna de las opciones, despliega un nuevo selector con más opciones predefinidas y así sucesivamente.

La App se conecta a la API [REST Countries](https://restcountries.com/) mediante peticiones HTTP.

Algunos conceptos utilizados para la generación de ésta App, son:

1. Selectores anidados.
2. Llenar selectores desde peticiones HTTP.
3. Encadenamiento de operadores de RXJS.

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.1.1.

## Servidor de Desarrollo

1. Clona el proyecto para extraer los datos del repositorio.

2. Ejecuta `npm install` para descargar e instalar los paquetes necesarios para la ejecución de la app.

3. Ejecuta `ng serve` para generar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.
