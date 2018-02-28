# CSCN_practica_2018

JsPsych experiments and tools

<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

 - [CSCN_practica_2018](#cscnpractica2018)
	 - [Experiments](#experiments)
	 - [Experimental Factory Protocol](#experiment-factory)
	 - [Simplified Protocol](#simplified-protocol)
	 - [Built With](#built-with)
	 - [Contributing](#contributing)
	 - [Authors](#authors)
	 - [License](#license)
	 - [Acknowledgments](#acknowledgments)

<!-- /TOC -->

## [Experiments](./pruebas_individuales)

This repository host multiple adaptations of psicological experiments in jsPsych formated for experimental factory and our own html simplified protocol.

* [BART_balloon_analogue_risk_task](./pruebas_individuales/BART_balloon_analogue_risk_task)
* [BDI_becks_depression_inventory](./pruebas_individuales/BDI_becks_depression_inventory)
* [BIS_barratt_impulsiveness_scale](./pruebas_individuales/BIS_barratt_impulsiveness_scale)
* [BRET_bomb_risk_elicitation_task](./pruebas_individuales/BRET_bomb_risk_elicitation_task)
* [CRT_numerico](./pruebas_individuales/CRT_numerico)
* [CRT_verbal](./pruebas_individuales/CRT_verbal)
* [DSS_decision_styles_scale](./pruebas_individuales/DSS_decision_styles_scale)
[ECR* -RS_relationship_structures](./pruebas_individuales/ECR-RS_relationship_structures)
* [EPI_eysenck_personality_inventory](./pruebas_individuales/EPI_eysenck_personality_inventory)
* [GDMS_estilo_toma_decisiones](./pruebas_individuales/GDMS_estilo_toma_decisiones)
* [GHQ_general_health_questionnaire](./pruebas_individuales/GHQ_general_health_questionnaire)
* [IRI_interpersonal_reactivity_index](./pruebas_individuales/IRI_interpersonal_reactivity_index)
* [LIPKUS_numeracy](./pruebas_individuales/LIPKUS_numeracy)
* [MINI_SEA_mini_social_cognition_emotional_assessment](./pruebas_individuales/MINI_SEA_mini_social_cognition_emotional_assessment)
* [OMS_ASSIST_alcohol_smoking_substance_involvement_screening_test](./pruebas_individuales/OMS_ASSIST_alcohol_smoking_substance_involvement_screening_test)
* [SASS_social_adaptation_self_evaluation_scale](./pruebas_individuales/SASS_social_adaptation_self_evaluation_scale)
* [SPR_III_self_report_psychopathy_scale](./pruebas_individuales/SPR_III_self_report_psychopathy_scale)
* [STAI_state_trait_anxiety_inventory](./pruebas_individuales/STAI_state_trait_anxiety_inventory)
* [actividad_fisica](./pruebas_individuales/actividad_fisica)
* [aislamiento_social_y_redes_sociales](./pruebas_individuales/aislamiento_social_y_redes_sociales)
* [ansiedad_matematica](./pruebas_individuales/ansiedad_matematica)
* [bienestar_psicosocial](./pruebas_individuales/bienestar_psicosocial)
* [bienestar_social](./pruebas_individuales/bienestar_social)
* [comprension_lectora](./pruebas_individuales/comprension_lectora)
* [empatia_por_dolor](./pruebas_individuales/empatia_por_dolor)
* [escala_experiencias_disociativas](./pruebas_individuales/cala_experiencias_disociativas)
* [escala_rosenberg](./pruebas_individuales/cala_rosenberg)
* [escala_tacticas](./pruebas_individuales/cala_tacticas)
* [estilo_atribucional](./pruebas_individuales/tilo_atribucional)
* [estres_percibido](./pruebas_individuales/tres_percibido)
* [graph_literacy](./pruebas_individuales/graph_literacy)
* [habilidad_matematica](./pruebas_individuales/habilidad_matematica)
* [ineco_frontal_screening](./pruebas_individuales/ineco_frontal_screening)
* [informacion_sociodemografica](./pruebas_individuales/informacion_sociodemografica)
* [informacion_sociodemografica_simple](./pruebas_individuales/informacion_sociodemografica_simple)
* [interocepcion](./pruebas_individuales/interocepcion)
* [iowa_gambling_task](./pruebas_individuales/iowa_gambling_task)
* [metacognicion](./pruebas_individuales/metacognicion)
* [miradas](./pruebas_individuales/miradas)
* [optimismo_aprendido](./pruebas_individuales/optimismo_aprendido)
* [protocolo_fin](./pruebas_individuales/protocolo_fin)
* [protocolo_inicio](./pruebas_individuales/protocolo_inicio)
* [protocolo_pausa](./pruebas_individuales/protocolo_pausa)
* [razonamiento_bayesiano](./pruebas_individuales/razonamiento_bayesiano)
* [razonamiento_silogistico](./pruebas_individuales/razonamiento_silogistico)
* [razonamiento_transitivo](./pruebas_individuales/razonamiento_transitivo)
* [regulacion_emocional](./pruebas_individuales/regulacion_emocional)
* [religiosidad](./pruebas_individuales/religiosidad)
* [rotacion_mental](./pruebas_individuales/rotacion_mental)
* [sMARS_short_mathematics_anxiety_rating_scale](./pruebas_individuales/MARS_short_mathematics_anxiety_rating_scale)
* [wais_matrices](./pruebas_individuales/wais_matrices)
* [wais_vocabulario](./pruebas_individuales/wais_vocabulario)
* [wais_working_memory](./pruebas_individuales/wais_working_memory)

## [Experiment Factory Protocol](./protocolo_experiment_factory)

Consist of two python scripts, one for seting up an enviorement and another for running experimental factory and helpers. It's designed for more controled setings were we have control over the computers that run the experiments.

## [Simplified Protocol](./protocolo_simplificado)

It's designed with not having control of the computer in mind and using portable version of Firefox in order to have control over the used browser.

## Built With

- [Experiment Factory](https://expfactory.github.io/expfactory/) - For the creation of paradigms
- [jsPsych](http://www.jspsych.org/) - For the creations of trials in each experiment
- [d3](https://d3js.org/) - Used to easily read from csv files
- [JSZip](https://github.com/Stuk/jszip) - For batch downloads as zip

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Gorka Navarrete** - _Initial work_ - [gorkang](https://github.com/gorkang)
- **Alejandro Cofre Garcia** - [fethrblaka](https://github.com/fethrblaka)

See also the list of [contributors](https://github.com/gorkang/CSCN_practica_2018/graphs/contributors) who participated in this project.

## License

This project is licensed under the NO LICENSE YET - see the <LICENSE.md> file for details

## Acknowledgments

- Hat tip to anyone who's code was used
- Inspiration
- etc
