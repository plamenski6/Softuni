function solve() {

  let quizzie = document.getElementById("quizzie");
  let section = document.getElementsByTagName("section");
  let result = document.getElementsByClassName("results-inner")[0];

  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let userAnswers = 0;
  let currentStep = 0;

  quizzie.addEventListener("click", (e) => {

    if (e.target.className === 'answer-text') {

      section[currentStep].style.display = "none";

      if (correctAnswers.includes(e.target.innerHTML)) {
        userAnswers++;
      }

      currentStep++;

      if (currentStep < correctAnswers.length) {
        section[currentStep].style.display = "block"
      }

      if (currentStep === 3) {
        document.getElementById("results").style.display = "block";
        result.textContent = correctAnswers.length === userAnswers ?
          "You are recognized as top JavaScript fan!" : `You have ${userAnswers} right answers`
      }

    }

  });

}
