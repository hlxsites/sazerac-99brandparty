import { createOptimizedPicture, getMetadata } from '../../scripts/lib-franklin.js';
import { fetchQueryIndex } from '../../scripts/scripts.js';

function decorateBackground(main) {
  const bg = getMetadata('background');
  if (bg) {
    main.style = `background-image: url('${bg}'); background-repeat: no-repeat; background-size: auto;`;
  }
}

export default async function decorate(block) {
  decorateBackground(document.querySelector('main'));
  const index = await fetchQueryIndex();
  const list = block.querySelector('ul');
  if (list) {
    const nl = document.createElement('div');
    nl.className = 'liquers';
    let imageLeft = true;
    list.querySelectorAll('li').forEach((li) => {
      const item = document.createElement('div');
      item.className = 'liquer-item';
      item.classList.add(imageLeft ? 'left' : 'right');
      nl.append(item);
      const link = li.querySelector('a');
      const path = new URL(link.href).pathname;
      const recipe = index.data.find((r) => r.path === path);
      if (recipe) {
        link.textContent = `See ${recipe.title} recipes`;
        // create image
        const img = createOptimizedPicture(recipe.image, true);
        const imgDiv = document.createElement('div');
        imgDiv.className = 'liquer-image';
        imgDiv.append(img);
        // create info div
        const infoDiv = document.createElement('div');
        infoDiv.className = 'liquer-info';
        const title = document.createElement('h2');
        title.textContent = recipe.title;
        title.className = 'liquer-title';
        infoDiv.append(title);
        const desc = document.createElement('p');
        desc.textContent = 'This is an AWESOME description';
        desc.className = 'liquer-description';
        infoDiv.append(desc);
        infoDiv.append(link);
        if (imageLeft) {
          item.append(imgDiv);
          item.append(infoDiv);
        } else {
          item.append(infoDiv);
          item.append(imgDiv);
        }
      }
      imageLeft = !imageLeft;
    });
    list.before(nl);
    list.remove();
  }
}
