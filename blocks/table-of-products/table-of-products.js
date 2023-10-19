import { getSortedProductsIndex } from '../../scripts/scripts.js';
import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  if (block.querySelector('p') == null) {
    const indexedProducts = await getSortedProductsIndex();
    block.querySelectorAll('div').forEach((e) => e.remove());
    indexedProducts.forEach((e) => {
      const entry = document.createElement('div');
      entry.innerHTML = `<a href="${e.path}" title="${e.title}"><h3>${e.title}</h3></a><p class="button-container"><a href="${e.path}" title="${e.title}" class="button secondary">More</a></p>`;
      entry.querySelector('a').prepend(createOptimizedPicture(e.image, e.title, false, [{ width: '750' }]));
      block.append(entry);
    });
  }
}