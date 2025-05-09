var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
// Comentario
typewriter.typeString('Analista de Datos Jr')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Transformando ...')
    .pauseFor(2500)
    // Número de caracteres que se borrarán
    .deleteChars(4)
    .typeString('<strong> datos ... !</strong>')
    .pauseFor(2500)
    .start();