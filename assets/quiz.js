document.querySelectorAll('[data-quiz-answer]').forEach((quiz) => {
  const answer = quiz.dataset.quizAnswer;
  const feedback = quiz.querySelector('.feedback');
  quiz.querySelectorAll('button[data-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      quiz.querySelectorAll('button[data-choice]').forEach((b) => b.classList.remove('ok', 'bad'));
      const correct = button.dataset.choice === answer;
      button.classList.add(correct ? 'ok' : 'bad');
      feedback.textContent = correct
        ? (quiz.dataset.correctFeedback || '正确。')
        : (quiz.dataset.wrongFeedback || '再想一次：先判断缺的是哪一种工程能力。');
    });
  });
});
