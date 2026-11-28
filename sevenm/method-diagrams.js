/* Tái dùng sơ đồ demo; danh sách HTML vẫn là nguồn của đủ 51 chuẩn. */
(() => {
  const data = window.SevenMStandards;
  const diagrams = window.SevenMDiagrams;
  if (!data || !diagrams) return;
  document.querySelectorAll('.standard-chapter').forEach((chapter, index) => {
    const source = chapter.querySelector('.standard-body > div');
    const list = source?.querySelector('ol');
    if (!list) return;
    const figure = document.createElement('figure');
    figure.className = 'method-diagram';
    figure.setAttribute('aria-label', diagrams.titles[index]);
    const visual = document.createElement('div');
    visual.className = 'sm-visual sm-view-' + diagrams.layouts[index];
    visual.innerHTML = diagrams.diagram(data[index], index);
    const caption = document.createElement('figcaption');
    caption.className = 'method-selection';
    caption.setAttribute('aria-live', 'polite');
    figure.append(visual, caption);
    const graph = visual.querySelector('.sm-diagram');
    const nodes = [...visual.querySelectorAll('[data-sm-standard]')].map(article => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = article.className;
      button.dataset.smStandard = article.dataset.smStandard;
      button.innerHTML = article.innerHTML;
      button.setAttribute('aria-pressed', 'false');
      article.replaceWith(button);
      button.addEventListener('click', () => select(button));
      return button;
    });
    function select(button) {
      nodes.forEach(n => n.setAttribute('aria-pressed', String(n === button)));
      caption.replaceChildren(button.querySelector('span').cloneNode(true), button.querySelector('strong').cloneNode(true));
      if (graph) {
        graph.dataset.selectedCode = button.dataset.smStandard;
        graph.querySelectorAll('.sm-wires path').forEach(path => path.classList.toggle('is-connected', [path.dataset.from, path.dataset.to].includes(button.dataset.smStandard)));
      }
    }
    source.append(figure);
    list.hidden = true;
    chapter.classList.add('has-method-diagram');
    if (graph) {
      const resize = new ResizeObserver(() => diagrams.draw(graph, data[index], index));
      resize.observe(graph);
      document.fonts?.ready.then(() => diagrams.draw(graph, data[index], index));
    }
    select(nodes[0]);
  });
})();
