<?php include 'private/includes/nav.php';?>

<?php 
?>
<button onclick="playAudio()" type="button">Play Music</button>
<button onclick="pauseAudio()" type="button">Pause Music</button>

<div class="quiz-container">
  <div id="quiz"></div>
</div>

<audio id="myAudio1">
  <source src="80s Synthwave Background Music for Videos.ogg" type="audio/ogg">
  <source src="80s Synthwave Background Music for Videos.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<br>
<button id="previous">Previous Question</button>
<button id="next">Next Question</button>
<button id="submit">Submit Quiz</button>
<div id="results"></div>
<script src="quiz.js"></script>
<link href="style.css" rel="stylesheet">
<script>
var x = document.getElementById("myAudio1");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}
</script>

<?php include 'private/includes/footer.php';?>