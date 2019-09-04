(function() {
  const myQuestions = [
    {
      question: "Eye of the tiger is a song by?",
      answers: {
        a: "Wham!",
        b: "Survivor",
        c: "Soft Cell"
      },
      correctAnswer: "b"
    },
    {
      question: "Which song is from a-ha?",
      answers: {
        a: "Time After Time",
        b: "Tainted Love",
        c: "Take on Me"
      },
      correctAnswer: "c"
    },
    {
      question: "Another one bites the dust is a song from Queen. What year is this song from?",
      answers: {
        a: "1980",
        b: "1984",
        c: "1982",
        d: "1987"
      },
      correctAnswer: "a"
    },
    {
      question: "Which song has the following lyrics: We're no strangers to love You know the rules and so do I!",
      answers: {
        a: "Footloose",
        b: "Never Gonna Give You Up",
        c: "Don't Stop Believin",
        d: "The Final Countdown"
      },
      correctAnswer: "b"
    },
    {
      question: "Africa is a song by?",
      answers: {
        a: "Europe",
        b: "David Bowie",
        c: "Queen",
        d: "Toto"
      },
      correctAnswer: "d"
    },
    {
      question: "Which song has the following lyrics: You put the boom boom into my heart (hoo, hoo) You send my soul sky high when your lovin' starts!",
      answers: {
        a: "Wake Me Up Before You Go",
        b: "Summer of '69",
        c: "Ashes to Ashes",
        d: "Temptation"
      },
      correctAnswer: "a"
    },
    {
      question: "Which song is from Cyndi Lauper?",
      answers: {
        a: "Blue Monday",
        b: "Karma Chameleon",
        c: "Girls Just Want to Have Fun",
        d: "Sweet Dreams"
      },
      correctAnswer: "c"
    },
    {
      question: "I Wanna Dance with Somebody is a song from Whitney Houston. What year is this song from?",
      answers: {
        a: "1986",
        b: "1987",
        c: "1984",
        d: "1981"
      },
      correctAnswer: "b"
    },
    {
      question: "Addicted To Love is a song by?",
      answers: {
        a: "Robert Pattrick",
        b: "Robert Paul",
        c: "Robert Plant",
        d: "Robert Palmer"
      },
      correctAnswer: "d"
    },
    {
      question: "How often is final countdown said in The Final Countdown by Europe?",
      answers: {
        a: "18 times",
        b: "20 times",
        c: "16 times",
        d: "11 times"
      },
      correctAnswer: "c"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "block";
    } else {
      nextButton.style.display = "block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
