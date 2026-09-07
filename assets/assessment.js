(() => {
  const fields = [...document.querySelectorAll('[data-assessment-field]')];
  const status = document.querySelector('[data-assessment-status]');
  const copyButton = document.querySelector('[data-copy-assessment]');

  const update = () => {
    const completed = fields.filter((field) => field.value.trim().length > 0).length;
    if (status) {
      status.textContent = `${completed} / ${fields.length} 个判断已填写`;
      status.classList.toggle('complete', completed === fields.length);
    }
  };

  fields.forEach((field) => field.addEventListener('input', update));
  update();

  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const missing = fields.filter((field) => !field.value.trim());
      if (missing.length) {
        if (status) status.textContent = `还缺 ${missing.length} 项。先把全部判断写完，再提交验收。`;
        missing[0].focus();
        return;
      }

      const text = fields.map((field) => {
        const title = field.dataset.assessmentField;
        return `## ${title}\n${field.value.trim()}`;
      }).join('\n\n');

      try {
        await navigator.clipboard.writeText(text);
        if (status) {
          status.textContent = '答案已复制。回到 ChatGPT 对话粘贴提交；正确性将在对话中即时批改。';
          status.classList.add('complete');
        }
      } catch {
        if (status) status.textContent = '浏览器未允许复制。请手动复制各栏答案并回到对话提交。';
      }
    });
  }
})();
