var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 60,
});

typewriter
    .typeString('Practicante de Analista de Datos')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Especialista en ETL & Data Quality')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Desarrollo de Dashboards & BI')
    .pauseFor(2000)
    .start();