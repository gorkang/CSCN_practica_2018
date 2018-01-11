FROM vanessa/expfactory-builder:base

########################################
# Configure
########################################

ENV EXPFACTORY_STUDY_ID expfactory
ENV EXPFACTORY_SERVER localhost
ENV EXPFACTORY_CONTAINER true
ENV EXPFACTORY_DATA /scif/data
ENV EXPFACTORY_DATABASE filesystem
ENV EXPFACTORY_HEADLESS false
ENV EXPFACTORY_BASE /scif/apps
 
ADD startscript.sh /startscript.sh
RUN chmod u+x /startscript.sh

WORKDIR /opt 
RUN git clone -b master https://www.github.com/expfactory/expfactory
WORKDIR expfactory 
RUN cp script/nginx.gunicorn.conf /etc/nginx/sites-enabled/default && \
    cp script/nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /scif/data # saved data
RUN mkdir -p /scif/apps # experiments 
RUN mkdir -p /scif/logs # gunicorn logs 
RUN python3 -m pip install gunicorn
RUN cp expfactory/config_dummy.py expfactory/config.py && \
    chmod u+x /opt/expfactory/script/generate_key.sh && \
    /bin/bash /opt/expfactory/script/generate_key.sh /opt/expfactory/expfactory/config.py
RUN python3 setup.py install
RUN python3 -m pip install pyaml    pymysql psycopg2
RUN apt-get clean          # tests, mysql,  postgres

########################################
# Experiments
########################################


LABEL EXPERIMENT_ansiedad_matematica /scif/apps/ansiedad_matematica
ADD ansiedad_matematica /scif/apps/ansiedad_matematica
WORKDIR /scif/apps
RUN expfactory install ansiedad_matematica

LABEL EXPERIMENT_comprension_lectora /scif/apps/comprension_lectora
ADD comprension_lectora /scif/apps/comprension_lectora
WORKDIR /scif/apps
RUN expfactory install comprension_lectora

LABEL EXPERIMENT_habilidad_matematica /scif/apps/habilidad_matematica
ADD habilidad_matematica /scif/apps/habilidad_matematica
WORKDIR /scif/apps
RUN expfactory install habilidad_matematica

LABEL EXPERIMENT_memoria_funcional /scif/apps/memoria_funcional
ADD memoria_funcional /scif/apps/memoria_funcional
WORKDIR /scif/apps
RUN expfactory install memoria_funcional

LABEL EXPERIMENT_rotacion_mental /scif/apps/rotacion_mental
ADD rotacion_mental /scif/apps/rotacion_mental
WORKDIR /scif/apps
RUN expfactory install rotacion_mental

LABEL EXPERIMENT_crtnum /scif/apps/crtnum
ADD crtnum /scif/apps/crtnum
WORKDIR /scif/apps
RUN expfactory install crtnum

LABEL EXPERIMENT_crt_verbal /scif/apps/crt_verbal
ADD crt_verbal /scif/apps/crt_verbal
WORKDIR /scif/apps
RUN expfactory install crt_verbal

LABEL EXPERIMENT_graph_literacy /scif/apps/graph_literacy
ADD graph_literacy /scif/apps/graph_literacy
WORKDIR /scif/apps
RUN expfactory install graph_literacy

LABEL EXPERIMENT_matrices /scif/apps/matrices
ADD matrices /scif/apps/matrices
WORKDIR /scif/apps
RUN expfactory install matrices

LABEL EXPERIMENT_numeracy /scif/apps/numeracy
ADD numeracy /scif/apps/numeracy
WORKDIR /scif/apps
RUN expfactory install numeracy



ENTRYPOINT ["/bin/bash", "/startscript.sh"]
EXPOSE 5000
EXPOSE 80
