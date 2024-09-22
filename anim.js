// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I sit and wait", time: 3 },
  { text: "Does an angel", time: 6 },
  { text: "contemplate my fate", time: 9 },
  { text: "And do they know", time: 18 },
  { text: "The places where we go", time: 33 },
  { text: "When we're grey and old", time: 41 },
  { text: "'Cause I have been told", time: 47 },
  { text: "That salvation lets their wings unfold", time: 54 },
  { text: "So when I'm lying in my bed", time: 59 },
  { text: "Thoughts running through my head", time: 67 },
  { text: "And I feel the love is dead", time: 72 },
  { text: "I'm loving angels instead", time: 78 },
  { text: "And through it all she offers me protection", time: 83 },
  { text: "A lot of love and affection", time: 91 },
  { text: "Whether I'm right or wrong", time: 97 },
  { text: "And down the waterfall", time: 104 },
  { text: "Wherever it may take me", time: 108 },
  { text: "I know that life won't break me", time: 144 },
  { text: "When I come to call, she won't forsake me", time: 148 },
  { text: "I'm loving angels instead", time: 153 },
  { text: "When I'm feeling weak", time: 158 },
  { text: "And my pain walks down a one way street", time: 164 },
  { text: "I look above", time: 169 },
  { text: "And I know I'll always be blessed with love", time: 176 },
  { text: "And as the feeling grows", time: 183 },
  { text: "She breathes flesh to my bones", time: 188 },
  { text: "And when love is dead", time: 140 },
  { text: "I'm loving angels instead", time: 140 },
  { text: "And through it all she offers me protection", time: 140 },
  { text: "A lot of love and affection", time: 140 },
  { text: "Whether I'm right or wrong", time: 140 },
  { text: "And down the waterfall", time: 140 },
  { text: "Wherever it may take me", time: 140 },
  { text: "I know that life won't break me", time: 140 },
  { text: "When I come to call, she won't forsake me", time: 140 },
  { text: "I'm loving angels instead", time: 140 },
  { text: "And through it all she offers me protection", time: 140 },
  { text: "A lot of love and affection", time: 140 },
  { text: "Whether I'm right or wrong", time: 140 },
  { text: "And down the waterfall", time: 140 },
  { text: "Wherever it may take me", time: 140 },
  { text: "I know that life won't break me", time: 140 },
  { text: "AWhen I come to call, she won't forsake me", time: 140 },
  { text: "I'm loving angels instead", time: 140 },


];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 0);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 0); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);