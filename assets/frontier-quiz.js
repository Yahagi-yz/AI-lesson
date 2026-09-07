document.querySelectorAll('[data-frontier-quiz]').forEach((quiz) => {
  const correctSet = new Set(
    (quiz.dataset.correctSet || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
  );
  const selected = new Set();
  const result = quiz.querySelector('.frontier-result');

  quiz.querySelectorAll('button[data-frontier-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      const choice = button.dataset.frontierChoice;
      if (selected.has(choice)) {
        selected.delete(choice);
        button.setAttribute('aria-pressed', 'false');
      } else {
        selected.add(choice);
        button.setAttribute('aria-pressed', 'true');
      }
      result.textContent = '';
      result.classList.remove('ok', 'bad');
    });
  });

  const check = quiz.querySelector('[data-frontier-check]');
  const reset = quiz.querySelector('[data-frontier-reset]');

  check.addEventListener('click', () => {
    const sameSize = selected.size === correctSet.size;
    const sameMembers = [...selected].every((item) => correctSet.has(item));
    const correct = sameSize && sameMembers;
    result.classList.remove('ok', 'bad');
    result.classList.add(correct ? 'ok' : 'bad');
    result.textContent = correct
      ? (quiz.dataset.correctFeedback || '正确：这就是当前完整的 decision frontier。')
      : (quiz.dataset.wrongFeedback || '还不对。只选前置条件已经解决、现在无需猜测就能回答的问题。');
  });

  reset.addEventListener('click', () => {
    selected.clear();
    quiz.querySelectorAll('button[data-frontier-choice]').forEach((button) => {
      button.setAttribute('aria-pressed', 'false');
    });
    result.textContent = '';
    result.classList.remove('ok', 'bad');
  });
});
