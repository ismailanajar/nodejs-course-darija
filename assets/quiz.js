/* quiz.js — reusable retrieval-practice widget.
   Markup:
     <div class="quiz" data-title="Q">
       <p class="quiz-q"><span class="num">1.</span> Question text</p>
       <button class="opt" data-correct>Option text</button>
       <button class="opt">Option text</button>
       <p class="explain" data-for="1">Why the answer is what it is.</p>
     </div>
   Each question block = one .quiz-q followed by its buttons.
   data-correct marks the right answer; .explain after the buttons gets shown.
   Score line appears after the first graded click. */
(function () {
  function init(quiz) {
    if (quiz.dataset.ready) return;
    quiz.dataset.ready = "1";

    var groups = [];
    var current = null;
    Array.prototype.forEach.call(quiz.children, function (el) {
      if (el.classList.contains("quiz-q")) {
        current = { q: el, opts: [], explain: null };
        groups.push(current);
      } else if (current && el.classList.contains("opt")) {
        current.opts.push(el);
      } else if (current && el.classList.contains("explain")) {
        current.explain = el;
      }
    });

    var answered = 0;
    var correct = 0;
    var total = groups.length;

    var score = document.createElement("p");
    score.className = "quiz-score";
    score.hidden = true;
    quiz.appendChild(score);

    function updateScore() {
      score.hidden = answered === 0;
      score.textContent =
        "Score " + correct + " / " + answered + "  ·  " + (total - answered) + " left";
    }

    groups.forEach(function (g) {
      g.opts.forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (g.done) return;
          g.done = true;
          answered += 1;
          var isRight = btn.hasAttribute("data-correct");
          if (isRight) correct += 1;
          g.opts.forEach(function (o) {
            o.disabled = true;
            if (o.hasAttribute("data-correct")) o.classList.add("reveal");
          });
          btn.classList.add(isRight ? "correct" : "wrong");
          if (g.explain) {
            g.explain.innerHTML =
              (isRight ? "<b>صحيح. </b>" : "<b>غلط. </b>") + g.explain.innerHTML;
            g.explain.classList.add("show");
          }
          updateScore();
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(document.querySelectorAll(".quiz"), init);
  });
})();
