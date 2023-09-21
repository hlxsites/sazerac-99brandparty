import { fetchQueryIndex } from '../../scripts/scripts.js';

export default async function decorate(block) {
  const index = await fetchQueryIndex();
  const list = block.querySelector('ul');
  if (list) {
    const nl = document.createElement('div');
    nl.className = 'liquers';
    list.querySelectorAll('li').forEach((li) => {
      const d = document.createElement('div');
      d.className = 'liquer-item';
      d.innerHTML = li.innerHTML;
      nl.append(d);
      const link = d.querySelector('a');
      const path = new URL(link.href).pathname;
      const recipe = index.data.find((r) => r.path === path);
      if (recipe) {
        link.textContent = recipe.title;
      }
    });
    list.before(nl);
    list.remove();
  }
}
