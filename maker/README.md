
# Sistema Maker

Este documento es una introducción al uso del sistema maker.

## Sobre Módulos actuales del Maker

Esta sección será usada para poder explicar los módulos actualmente agregados al sistema maker, los cuales se pretende que sean mejorados y aumentados en cantidad.

### Sistema Multimaker

El sistema multimaker es una extensión del sistema maker, en el cual se podrán crear varias pruebas en un solo lanzamiento del sistema maker, para su uso se debe agregar los archivos yaml que se deseen usar a la carpeta "multimaker" que se encuentra dentro del sistema maker, y luego correr el comando: 

> python3 multi_maker.py

El sistema leerá cada archivo yaml encontrado en la carpeta multimaker, creará la prueba y la agregará a la lista de pruebas individuales, además, por cada prueba se permitirá al usuario, si este desea, usar el sistema de testing automático para ver el resultado de la última prueba creada.

## Sobre Uso de Maker

Esta sección tiene como objetivo dar algunas guías importantes sobre el uso del maker

### Detalles del archivo yaml

Es importante destacar que yaml funciona como una extensión para armar el documento de manera accesible desde python, por lo que hay algunas cosas que no pueden ser usadas, para este caso tenemos:

- Si se desea escribir comillas **debe ser** con doble comillas (**"element"**) no comillas simples (**'element'**), dado que el sistema que se está usando para reescribir el javascript está escrito con comillas simples, por esto, las comillas simples podrían generar fallos en el archivo resultante.
- Los nombres de item no deben contener guión bajo ( **_** ) dado que es usado en el sistema para poder referirse a los distintos objetos y dividir la iteración de preguntas, el usar guión bajo generará nombres indeterminados fuera del acceso del sistema de creación, por lo que si se desea usar guiones se pide que sean del tipo **-**


