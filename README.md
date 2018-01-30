# CSCN_practica_2018

One Paragraph of project description goes here

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [CSCN_practica_2018](#cscnpractica2018)
	- [Getting Started](#getting-started)
		- [Prerequisites](#prerequisites)
			- [Google drive](#google-drive)
		- [Creating a paradigm](#creating-a-paradigm)
		- [Deployment of the paradigm](#deployment-of-the-paradigm)
	- [Built With](#built-with)
	- [Contributing](#contributing)
	- [Authors](#authors)
	- [License](#license)
	- [Acknowledgments](#acknowledgments)

<!-- /TOC -->

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You must have downloaded the project (in case you want to construct a paradigm) or have the following files if the paradigm has already been constructed:

* experiments.tar
* service_secret.json
* setup.py
* start.py

To get the project/paradigm running in any computer running Linux, you must have installed python and Google chrome.

Then, you can install all the dependencies of the project by running the _setup.py_ script and then rebooting (this is done in order to update the docker group)

```
$ python setup.py
```

#### Google drive

To be able to use Google drive to coordinate the subjects on wish the paradigm has already been tested, you'll need to have a file called **service_secret.json**. This file can be obtained through the [Google Cloud Platform](https://console.developers.google.com/apis/dashboard?hl=ES)

### Creating a paradigm

To create a paradigm that can be tested in any computer, you must first run the _start.py_, indicating the folder where the results will be stored (this folder must be available in every computer where the paradigm is going to be tested)

```
$ python start.py ~/path/to/the/folder
```
After that, you will be asked if you want to use Google drive (for this option to work, you must have the file **service_secret.json**)
and the amount of subjects you wish to utilize to test the paradigm or a csv file with as many rows as subject and the test you want them to perform as each column, additionally you can use the keyword random, _random_ alone can only be used as the last command, as it will select all unchosen test remaining, _random(10)_ with parenthesis and a number will chose that amount of test to randomize, and _random(test1,test3)_ will chose between those test randomly, making sure there are not repeated test in the paradigm.

Finally, specifically for the bayes test, after the rows of commands you can put the keyword items\_bayes and each row after that will serve as a trial for the bayes test in the format:

```
problem_context,presentation_format,response_type,probability
```
This will generate a **tokens.tsv** file with the experiments to be run for each subject, which will be synchronized through Google drive if enabled, and create a compressed file called **experiments.tar**. This file can be shared across different computers to test the paradigm!

### Deployment of the paradigm

Once you have your machine with all the dependencies installed and a **experiments.tar**, you can run the paradigm with the same script _start.py_ used before

```
$ python start.py
```
After this, you will be asked to enter the ID of the subject which you desire to test.

## Built With

* [Experiment Factory](https://expfactory.github.io/expfactory/) - For the creation of paradigms
* [jsPsych](http://www.jspsych.org/) - For the creations of trials in each experiment
* [d3](https://d3js.org/) - Used to easily read from csv files

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Gorka Navarrete** - *Initial work* - [gorkang](https://github.com/gorkang)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the NO LICENSE YET - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
