var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 60,
});

typewriter
    .typeString('Pasante de Ingeniería en Sistemas Computacionales')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Prácticas Profesionales')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Me apasiona investigar, analizar información y comprender cómo funcionan las cosas')
    .pauseFor(2000)
    .start();