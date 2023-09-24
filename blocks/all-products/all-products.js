import { fetchQueryIndex } from '../../scripts/scripts.js';

export default async function decorate(block) {
  const index = await fetchQueryIndex();
  const indexedProducts = index.data.filter((e) => e.path.includes('/products/'));
  block.querySelectorAll('div').forEach((e) => e.remove());
  indexedProducts.forEach((e) => {
    const entry = document.createElement('div');
    entry.innerHTML = `<a href="${e.path}"><img src="${e.image.replace('pjpg', 'png')}"><h3>${e.title}</a></h3><p class="button-container"><a href="${e.path}" title="${e.title}" class="button secondary">More</a></p>`;
    block.append(entry);
  });
}
