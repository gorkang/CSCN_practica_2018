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
- En cualquier caso que se quiera agregar en un texto (text, title) o estímulo (stimulus), una variable o una imagen, o se quiera insertar saltos de linea se debe ocupar la sintaxis de YAML usando el símbolo "|" de la siguiente forma:

  ```
    text: |
      acá va el texto con variables como {variable: nombre_variable},
      saltos de linea
      o imágenes {imagen: nombre_imagen.extension} 
  ```

- El nombre de item de la configuración siempre debe ser "test configuration"

### Escritura de archivo yaml

A continuación se explicarán las opciones disponibles en la escritura del archivo yaml, además se pueden ver algunos ejemplos en los archivos con extensión yml de la carpeta multi_maker.

Primero que todo, se debe definir un id para el item en cuestión, este será precedido por un guión (-), es lo primero que leerá el sistema maker y será el identificador que podrá usar para acceder al item desde otro item (esto será explicado más adelante).

```
- Item-prueba:
- Item-extra:
- Item-prueba:
```

Luego, si se desea acceder al primer item llamado Item-prueba se puede llamar usando __Item-prueba\_1__ y al segundo de la forma __Item-prueba\_2__, al item extra se puede acceder como __Item-extra\_1__ ya que es el primer item con ese nombre en la lista mostrada. La mayoría de los nombres de los items son de elección personal del usuario, el único que está restringido es "- test configuration:" ya que es usado para almacenar los datos del experimento y debe ser el primer item en la lista. 

Dependiendo del tipo de item que se quiera escribir, la sintaxis será distinta, a continuación se mostrarán los distintos tipos de items que pueden ser creados:

- <a name="test_configuration"></a>**test configuration**: Este item debe ser el primer item en la lista, es un item especial en el cual se describen las distintas opciones para el experimento. Las opciones disponibles en la configuración del experimento son:

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
        		likert_5:
        	        - Nunca.
            	    - 1 o 2 veces.
                	- Cada mes.
                	- Cada semana.
                	- A diario o casi a diario.
        ```

    Esto generará un experimento llamado NT_nombre-test donde se podrá usar una lista de opciones llamada likert\_4. Además agregará la carpeta de imágenes llamada "test\_images" al sistema para su posterior uso.

- **fullscreen**: este item usa el plugin jspsych-fullscreen para poder crear una página en la que el usuario pueda aceptar el uso de la pantalla completa en la prueba. Solo necesita un texto, el cual debe ir en el área de argumentos de la pregunta actual y será mostrado por pantalla al entrar en este item, si no se ingresa ningún texto, el sistema automáticamente mostrará el texto "El experimento entrará en modo pantalla completa"

    Un ejemplo de fullscreen sería el siguiente:

      ```
      * initial-window:
          type: fullscreen
          arguments:
              * text: El experimento entrará el pantalla completa al apretar continuar.
      ```

- **instruction**: Este item usa el plugin jspsych-instructions para poder crear una página en la que el usuario pueda ser guiado para el avance del experimento. Solo necesita un texto o lista de textos, el cual debe ir en el área de argumentos de la pregunta actual y será mostrado por pantalla al entrar en este item, si se desea se puede ingresar también un título, el cual se mostrará en todas las instrucciones. En este item también se agregará el orden de las preguntas que le seguirán a continuación (y antes de la siguiente instrucción) usando el tag "questions_mode", si no es seleccionado, las preguntas automáticamente serán ordenadas en orden secuencial, actualmente las preguntas pueden ser mostradas en orden secuencial o random escribiendo "- questions_mode: sequential" o "- questions_mode: random"

    Un ejemplo de instruction sería el siguiente:
    ```
    - initial-window:
        type: instruction
        arguments:
            - title: Sistema de Pruebas
            - text: En las siguientes preguntas deberá contestar segun la escala de likert mostrada.
            - questions_mode: sequential
    ```

    Otro ejemplo de instruction sería el siguiente:

    ```
    - initial-window:
        type: instruction
        arguments:
            - title: Sistema de Pruebas
            - text: 
            	- A continuación podrá ver una serie de instrucciones, lealas con atención.
            	- Elija la opción que le parezca más correcta según su método de trabajo.
            	- Una vez terminado el test favor llamar al instructor.
            - questions_mode: sequential
    ```




> Los items que siguen son de tipo "pregunta" y tienen acceso a 2 opciones extras además del tipo de pregunta que son "previous" y "next", estas opciones van separadas de los argumentos y definen una forma de crear árboles según las decisiones que el usuario vaya eligiendo en el camino.
>
> Previous permite "ocultar" una pregunta si no se cumple alguna condición, las distintas opciones se escriben como una lista de listas, los elementos dentro de cada lista deben cumplirse como restricciones "and", esto significa que deben cumplirse todos los elementos dentro de la lista, y la separación de listas genera la opción de restricciones "or" lo que significa que deben cumplirse todas las condiciones de la lista 1 o todas las condiciones de la lista 2 para que la pregunta sea mostrada.
>
> Next permite saltar de una pregunta a otra dependiendo de las distintas condiciones que se hayan creado durante el experimento, al igual que en la opción previous se tiene una lista de listas pero estas están adjuntas a un elemento mas grande que es el item al cual se quiere saltar en caso que se cumplan las condiciones de las listas. La pregunta de salto puede ser una pregunta siguiente en el test o una anterior. 
>
> Los nombres de las listas tanto de previous o next no tienen relevancia, solo son usadas para poder identificar los and's de los or's, por orden se recomienda usar L1, L2, etc.
>
> Además de esto también se puede usar el tag "chocen_value" para guardar una variable que se quiera usar más adelante, la variable almacenará la respuesta del usuario y puede ser usada de la forma {variable:nombre\_de\_variable} en los textos de las preguntas posteriores.
>
> Por otro lado, en los argumentos hay algunos tags que son comunes para todos los tipos de preguntas, en este caso tenemos: 
>
> - "title", para seleccionar un texto que se mostrará con letra tipo __negrita__ en la pregunta. 
> - "text", que es el texto de la pregunta en si. 
> - "error_message", para seleccionar un mensaje de error para la pregunta, en caso que no se elija ninguno se usará el mensaje automático "Por favor verifique su respuesta". 
> - "chocen_value", para poder almacenar la respuesta del usuario en una variable que se pueda usar más adelante.
> - "required", para hacer que la pregunta deba responderse obligatoriamente.

- **text**: Este item usa el plugin jspsych-survey-text con el cual se crea una página con preguntas del tipo texto, en el cual el usuario podrá ver un texto y responder en un cuadro de texto que se encontrará después de la pregunta.

    Un ejemplo de text sería el siguiente:
    ```
    - Otros:
        type: text
        previous:
          L1:
            - Otros_1: Si
        arguments:
          text: ¿Cual es el nombre de este otro tipo de sustancia que consumió?
          chocen_value: otra_sustancia
    ```

    Como se puede ver esta es una pregunta de texto que solo se mostrará si en la primera pregunta con nombre de item "Otros" se seleccionó "Si", además, una vez se responda a esta pregunta, el sistema almacenará la respuesta del usuario en una variable llamada "otra\_sustancia", el cual podrá ser usado más adelante de la forma {variable:otra\_sustancia}.

- **number**: Este item usa el plugin jspsych-survey-text y funciona de manera parecida al item de texto, la diferencia es que en este caso el usuario debe ingresar un número y se puede poner un rango o número determinado a la respuesta, en caso que el usuario escriba un número fuera del rango o del valor decidido la pregunta lanzará un error y el usuario deberá responder nuevamente

    Un ejemplo de number sería el siguiente:

    ```
    - Personal-information:
        type: number
        next:
        	Mayor_1:
              L1:
                - number: 20
        arguments:
          text: A continuación indique su edad
          range: [0,150]
          chocen_value: edad
    ```

    

- **date**: Este item usa el plugin jspsych-survey-text, al igual que el item texto este item muestra un cuadro en el que el usuario puede responder, la diferencia es que en este caso al apretar en el cuadro se despliega una ventana con el calendario para poder seleccionar la fecha de una manera más simple.

- **range**:  Este item usa el plugin jspsych-survey-text, a pesar de usar este plugin, en este caso este item generará un slider y un cuadro numérico, el usuario podrá seleccionar su respuesta en cualquiera de los 2 lados. 
  >Nota: Este slider está hecho para preguntas en las que haya que dar una respuesta con porcentajes o númerica como "De las 20 personas presentadas ¿Que porcentaje de personas cree usted que leyeron el periódico el día de hoy?", no un slider de decisión como "¿Que tan mala crees que haya sido esta acción?" en la cual el slider tendrá que tener las palabras muy mala y nada mala en los extremos derecho e izquierdo respectivamente, para este último slider usar el tipo [slider](#slider)

- **multi choice**: Este item usa el plugin jspsych-survey-multi-choice. Permite crear preguntas con respuestas prediseñadas de manera que el usuario pueda seleccionar una de ellas al responder y no sea necesario que escriba sus propias respuestas. 

    Un ejemplo de multi choice sería el siguiente:

    ```
    - Alcohol:
        type: multi choice
        previous:
          L1:
            - Alcohol_1: Si
        next:
          Tabaco_5:
            - L1:
              - Tabaco_2: Nunca.
              - Alcohol_2: Nunca.
              - Cannabis_1: No
              - Cocaina_1: No
              - Anfetamina_1: No
              - Inhalantes_1: No
              - Tranquilizantes_1: No
              - Alucinogenos_1: No
              - Opiaceos_1: No
              - Otros_1: No
        arguments:
          text: ¿Con qué frecuencia ha consumido bebidas alcohólicas (cerveza, vino, licores, destilados, etc.) en los últimos 3 meses?
          choices: likert_5
          orientation: vertical
    ```

    Como se puede ver, además también se ha usado una de las escalas mostradas en la parte de [test configuration](#test_configuration)

- **multi select**: Este item usa el plugin jspsych-survey-multi-select, y hace una tarea parecida al item multi choice pero en este caso tenemos más opciones. El encuestador puede elegir la cantidad de respuestas que quiera que ingrese el usuario, y puede, si lo desea, poner uno o más elementos guías al inicio de la lista de opciones, los cuales el usuario no podrá seleccionar pero si podrá ver.

    Un ejemplo de multi select sería el siguiente:

    ```
    - Mental-rotation:
        type: multi select
        arguments:
          text: Ahora mira este objeto:<br/><br/>Dos de estos cuatro dibujos muestran el mismo objeto.<br />&iquest;Puedes encontrar los dos? <br/>
          choices: 
            - image: pag1_3_0.png   
            - image: pag1_3_1.png   
            - image: pag1_3_2.png
            - image: pag1_3_3.png
            - image: pag1_3_4.png
          expected_options: 2
          orientation: horizontal
          not_enabled_options: 1
          required: True
          error_message: Por favor seleccione 2 opciones
    ```

    Podemos ver que el usuario deberá elegir 2 de las 4 opciones disponibles (como dice en expected_options), además la primera opcion no está habilitada para respuesta (en este caso "image: pag1_3_0.png"), la orientación de las alternativas es horizontal y también se puede ver el uso de imágenes en las alternativas de la forma image: "nombre_imagen.extension".

- <a name="slider"></a>**slider**:
- **animation**:

### Agregar imágenes al sistema

Para agregar imágenes al sistema, primero que todo, se debe acceder a la carpeta "images" encontrada en la carpeta maker del sistema, una vez ahí se debe crear la carpeta de imágenes que se usará y agregar todas las imágenes que se desee a esta carpeta. 

Una vez creada la carpeta y agregadas las imágenes deseadas se debe agregar la misma al sistema maker, esto se hace desde el item [test configuration](#test_configuration) como se explica en la sección anterior, esto permitirá el acceso del sistema maker a todas las imágenes que estén almacenadas en esa carpeta.

Para el uso de las imágenes hay 2 opciones:

- Uso de imágenes en textos: Para este caso tomar en cuenta lo que se menciona en los [detalles del archivo yaml](#detalles_del_archivo_yaml), donde se menciona que se debe usar el símbolo "|" para el uso de imágenes.
- Uso de imágenes en alternativas de multi choice o multi select: Para este caso el método de acceso es "image: nombre_imagen.extension" **con espacio y sin comillas**, notar que en este caso el editor de texto de markdown comúnmente debería mostrar el texto "image" de otro color, identificando que es una llave para acceso a la imagen.

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