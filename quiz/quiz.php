<?php include 'private/includes/nav.php' ?>
<link rel="stylesheet" href="public/assets/css/quiz.css">

<div class="musicbuttons">
    <button onclick="playAudio()" type="button">Play Music</button>
    <button onclick="pauseAudio()" type="button">Pause Music</button>
</div>
<div class="quiz-container">
    <div id="quiz"></div>
</div>

<audio id="myAudio1">
    <source src="public/assets/music/music.ogg" type="audio/ogg">
    <source src="public/assets/music/music.mp3" type="audio/mpeg">
</audio>
<br>
    <button id="previous">Previous Question</button>
    <button id="next">Next Question</button>
    <button id="submit">Submit Quiz</button>
<div id="results"></div>

<script src="public/assets/js/quiz.js"></script>
<script src="public/assets/js/music.js"></script>

<?php include 'private/includes/footer.php' ?>