# Bienvenido al sistema de Testing de CSCN

El sistema de testing actual está siendo probado con **pyenv** en la version de **python 3.6.5**

Para la instalación de pyenv siga el [siguiente tutorial](https://phoikoi.io/2018/04/03/bootstrap-pipenv-debian.html)

Una vez instalado el pypenv instalar el módulo de selenium para luego lanzar el ambiente virtual de pipenv: 
```
foo@bar:~$ pipenv install selenium
foo@bar:~$ pipenv shell
```	

Una vez dentro del ambiente virtual se debe agregar la ubicación absoluta de nuestro git para poder cargar en el navegador el archivo necesario, esto se puede hacer en el archivo **Configuration.p<span></span>y** encontrado en la carpeta **tests/testing_config**

Para lanzar el sistema de pruebas simplemente usar **python3 test.py**

> **Nota:** Las pruebas actuales han sido probadas con el driver de **Firefox**, aún falta la adaptación a los drivers de **Chrome** en el area de descargas.
