# Sistema Maker

Este documento es una guía para el uso del sistema maker.

## Sobre Uso de Maker

Esta sección tiene como objetivo dar algunas guías importantes sobre el uso del maker

### Lanzamiento del sistema maker

Actualmente hay 2 formas de uso para el sistema de maker.

- El primero y más simple es correr el comando

	> python3 maker.&#8203;py
    
	desde la carpeta de maker, con esto se lanzará el sistema de maker de manera normal leyendo el archivo data.yaml encontrado en la misma carpeta (el cual debe ser llenado con los datos del experimento que se desee crear).

- El segundo es usar el sistema de multimaker como se explica en su sección respectiva ([Multimaker](#sistema-multimaker)).

### Detalles del archivo yaml

Es importante destacar que yaml funciona como una extensión para armar el documento de manera accesible desde python, por lo que hay algunas cosas que no pueden ser usadas, para este caso tenemos:

- Si se desea escribir comillas **debe ser** con doble comillas (**"element"**) no comillas simples (**'element'**), dado que el sistema que se está usando para reescribir el javascript está escrito con comillas simples, por esto, las comillas simples podrían generar fallos en el archivo resultante.
- Los nombres de item no deben contener guión bajo ( **_** ) dado que es usado en el sistema para poder referirse a los distintos objetos y dividir la iteración de preguntas, el usar guión bajo generará nombres indeterminados fuera del acceso del sistema de creación, por lo que si se desea usar guiones se pide que sean del tipo **-**
- Si se quiere ocupar la función de agregar imágenes o variables a un texto es importante que se escriba sin espacios de la forma {image:nombre_imagen.png} o {variable:nombre_variable}, dado que si se pone un espacio luego de los ":" el archivo yaml leerá automáticamente estos datos como un diccionario.
- El nombre de item de la configuración siempre debe ser "test configuration"

### Escritura de archivo yaml

A continuación se explicarán las opciones disponibles en la escritura del archivo yaml, además se pueden ver algunos ejemplos en los archivos con extensión yml de la carpeta multi_maker.

Primero que todo, se debe definir un id para el item en cuestión, este será precedido por un guión (-), es lo primero que leerá el sistema maker y será el identificador que podrá usar para acceder al item desde otro item (esto será explicado más adelante).

>```
- Item-prueba:
- Item-extra:
- Item-prueba:
>```

Luego, si se desea acceder al primer item llamado Item-prueba se puede llamar usando __Item-prueba\_1__ y al segundo de la forma __Item-prueba\_2__, al item extra se puede acceder como __Item-extra\_1__ ya que es el primer item con ese nombre en la lista mostrada. La mayoría de los nombres de los items son de elección personal del usuario, el único que está restringido es "- test configuration:" ya que es usado para almacenar los datos del experimento y debe ser el primer item en la lista. 

Dependiendo del tipo de item que se quiera escribir, la sintaxis será distinta, a continuación se mostrarán los distintos tipos de items que pueden ser creados:

- test configuration: Este item debe ser el primer item en la lista, es un item especial en el cual se describen las distintas opciones para el experimento. Las opciones disponibles en la configuración del experimento son:
    + test\_name: define el nombre del experimento, luego el experimento final tendrá el nombre definido como SIGLAS\_nombre-experimento.

    + scales: esto permite crear listas de opciones que después pueden ser usadas en las preguntas de multi choice o multi select.
    
    + images: Con este tag puede agregar un nombre de carpeta en la sección de imágenes, esta carpeta será buscada en la carpeta images que se encuentra en el sistema maker (para mayor información ver la sección de [imágenes](#agregar-imágenes-al-sistema)).

    un ejemplo del test configuration sería el siguiente:

    ```
    - test configuration:
        test_name: Nombre test
        images: test_images
        scales:
            likert_4:
                - Nunca
                - Pocas veces
                - Bastantes veces
                - Todos los días
    ```

    Esto generará un experimento llamado NT_nombre-test donde se podrá usar una lista de opciones llamada likert\_4. Además agregará la carpeta de imágenes llamada "test\_images" al sistema para su posterior uso.

- fullscreen: este item usa el plugin jspsych-fullscreen para poder crear una página en la que el usuario pueda aceptar el uso de la pantalla completa en la prueba. Solo necesita un texto, el cual debe ir en el área de argumentos de la pregunta actual y será mostrado por pantalla al entrar en este item, si no se ingresa ningún texto, el sistema automáticamente mostrará el texto "El experimento entrará en modo pantalla completa"
    
    Un ejemplo de fullscreen sería el siguiente:
    ```
    - initial-window:
        type: fullscreen
        arguments:
            - text: El experimento entrará el pantalla completa al apretar continuar.
    ```

- instruction: este item usa el plugin jspsych-instructions para poder crear una página en la que el usuario pueda ser guiado para el avance del experimento. Solo necesita un texto, el cual debe ir en el área de argumentos de la pregunta actual y será mostrado por pantalla al entrar en este item, si se desea se puede ingresar también un título para mostrar. En este item también se agregará el orden de las preguntas que le seguirán a continuación (y antes de la siguiente instrucción) usando el tag "questions_mode", si no es seleccionado, las preguntas automáticamente serán ordenadas en orden secuencial, actualmente las preguntas pueden ser mostradas en orden secuencial o random escribiendo "- questions_mode: sequential" o "- questions_mode: random"

    Un ejemplo de instruction sería el siguiente:
    ```
    - initial-window:
        type: instruction
        arguments:
            - title: Sistema de Pruebas
            - text: En las siguientes preguntas deberá contestar segun la escala de likert mostrada.
            - questions_mode: sequential
    ```

### Agregar imágenes al sistema

## Sobre Módulos actuales del Maker

Esta sección será usada para poder explicar los módulos actualmente agregados al sistema maker, los cuales se pretende que sean mejorados y aumentados en cantidad.

### Sistema Multimaker

El sistema multimaker es una extensión del sistema maker, en el cual se podrán crear varias pruebas en un solo lanzamiento del sistema maker, para su uso se debe agregar los archivos yaml que se deseen usar a la carpeta "multi_maker" que se encuentra dentro del sistema maker, y luego correr el comando: 

> python3 multi_maker.py

El sistema leerá cada archivo yaml encontrado en la carpeta multimaker, creará la prueba y la agregará a la lista de pruebas individuales, además, por cada prueba se permitirá al usuario, si este desea, usar el sistema de testing automático para ver el resultado de la última prueba creada.

### Plugins de jsPsych funcionales en sistema maker

Actualmente hay 5 plugins implementados para el uso del sistema maker:

- __jspsych-fullscreen:__ Plugin para poder habilitar la ventana de fullscreen, requiere de un mensaje para ser mostrado en pantalla.
- __jspsych-instructions:__ Plugin para poder mostrar instrucciones al usuario y guiarlo durante el experimento. Permite que los sujetos naveguen a través de múltiples páginas de instrucciones a su propio ritmo, registrando cuánto tiempo pasa el sujeto en cada página. La navegación se puede hacer con el mouse o el teclado. Se puede permitir que los sujetos naveguen hacia adelante y hacia atrás a través de las páginas, si lo desea. Se puede agregar título y texto, en el texto también se pueden incluir imágenes si así se desea usando las llaves del modo {image:nombre_imagen} (previamente habiendo seleccionado la carpeta para agregar estas imágenes).
- __jspsych-survey-multi-choice:__ Plugin para agregar un conjunto de preguntas con campos de respuesta de opción múltiple. El sujeto selecciona una sola respuesta. Las opciones se muestran con botones circulares (de radio).
- __jspsych-survey-multi-select:__ Plugin para agregar un conjunto de preguntas con campos de respuesta de opción múltiple. El sujeto selecciona una múltiples respuestas. Las opciones se muestran con botones cuadrados (de tipo select).
- __jspsych-survey-text:__ Plugin que muestra un conjunto de preguntas con campos de texto de respuesta libre. Actualmente está optimizado para recibir respuestas numéricas, de texto, de fecha o un slider.