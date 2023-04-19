var questionData = [
    {
      question: "Who is the father of Computers?",
      a: "James Gosling",
      b: "Charles Babbage",
      c: "Dennis Ritchie",
      d: "Bjarne Stroustrup",
      correct: "b",
    },
    {
      question: "What is the full form of CPU?",
      a: "Computer Processing Unit",
      b: "Computer Principle Unit",
      c: "Central Processing Unit",
      d: "Control Processing Unit",
      correct: "c",
    },
    {
      question: "Which of the following language does the computer understand?",
      a: "Computer understands only C Language",
      b: "Computer understands only Assembly Language",
      c: "Computer understands only Binary Language",
      d: "Computer understands only BASIC",
      correct: "c",
    },
    {
      question: "Which of the following is not a characteristic of a computer?",
      a: "Versatility",
      b: "Accuracy",
      c: "Diligence",
      d: "I.Q.",
      correct: "d",
    },
    {
      question:
        "Which of the following is the smallest unit of data in a computer?",
      a: "Bit",
      b: "KB",
      c: "Nibble",
      d: "Byte",
      correct: "a",
    },
  ];
  
  var quiz = document.getElementById("quiz");
  var answerQns = document.querySelectorAll(".answer");
  var questionQN = document.getElementById("question");
  
  var a_option = document.getElementById("a_option");
  var b_option = document.getElementById("b_option");
  var c_option = document.getElementById("c_option");
  var d_option = document.getElementById("d_option");
  
  var submitBtn = document.getElementById("submit");
  
  var currentQuestion = 0;
  var score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswer();
  
    var currentQuestionData = questionData[currentQuestion];
  
    questionQN.innerText = currentQuestionData.question;
  
    a_option.innerText = currentQuestionData.a;
    b_option.innerText = currentQuestionData.b;
    c_option.innerText = currentQuestionData.c;
    d_option.innerText = currentQuestionData.d;
  }
  
  function getSelected() {
    var answer = undefined;
  
    answerQns.forEach((answerQN) => {
      if (answerQN.checked) {
        answer = answerQN.id;
      }
    });
  
    return answer;
  }
  
  function deselectAnswer() {
    answerQns.forEach((answerQN) => {
      answerQN.checked = false;
    });
  }
  
  submitBtn.addEventListener("click", () => {
    var answer = getSelected();
  
    if (answer) {
      if (answer === questionData[currentQuestion].correct) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questionData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2>You answered correctly ${score}/${questionData.length} questions. </h2>
        <button onclick="location.reload()">Reload</button>`;
      }
    }
  });