# CSCN_practica_2018 Simplified Protocol

JsPsych experiments on one html file.

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [CSCN_practica_2018](#cscnpractica2018)
	- [Getting Started](#getting-started)
		- [Prerequisites](#prerequisites)
		- [Creating a paradigm](#creating-a-paradigm)
		- [Deployment of the paradigm](#deployment-of-the-paradigm)
	- [Built With](#built-with)
	- [Contributing](#contributing)
	- [Authors](#authors)
	- [License](#license)

<!-- /TOC -->

## Getting Started

These instructions will get you a copy of the simplified protocol up and running on your local machine for development and testing purposes.

### Prerequisites

You must have downloaded the project (in case you want to construct a paradigm) or have the following files if the paradigm has already been constructed:

* index.html
* jzip.min.js
* [experiments](../pruebas_individuales)

To get the project/paradigm running in any computer you need either Firefox (or any web browser that ignores cors) or a server to host the files.

### Creating a paradigm

To create a paradigm that can be tested in any computer, you must first select your experiments from our [repository](../pruebas_individuales) or [make your own experiment compatible](./wiki/Haciendo-experimentos-compatibles.), and download them thogeter with [small.py](./small.py) and [index.html](./index.html). Then starting from [orden_pruebas.csv](./orden_pruebas.csv) choose the order of your experiments. Naming an experiment in a cell will place that experiment in that position, leaving an empty cell will place a random experiment from the experiment folders you downloaded when you open the protocol. Once you have put as many rows as experiments folders you have (or at least no more than you have) run small.py with python 2.7, it will ask wether you want to use jsZip or not, then will check for orden_pruebas.csv and configure index.html acordingly (this all must be done in the same folder).

### Deployment of the paradigm

Once you have your index.html ready you only need to load it, thogeter with jzip.min.js and your experiments folders, onto a computer and either host it with a server, use Firefox or even use a [portable version of Firefox](https://drive.google.com/open?id=1Az57tGQlhMLIHxTenzkWzwOhtmb_z8Ju) with modified interface and startup scripts for linux and windows.

## Built With

* [JSZip](https://github.com/Stuk/jszip)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Alejandro Cofre Garcia** - [Fethrblaka](https://github.com/Fethrblaka)

See also the list of [contributors](https://github.com/gorkang/CSCN_practica_2018/graphs/contributors) who participated in this project.

## License

This project is licensed under the NO LICENSE YET - see the [LICENSE.md](LICENSE.md) file for details
JSZip is used with [the license](./jszip_license.markdown)
