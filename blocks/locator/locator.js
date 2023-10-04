export default async function decorate(block) {
  window.locate = async (form) => {
    form.style.display = 'none';
  };
  const map = document.createElement('div');
  map.className = 'map';
  block.textContent = '';
  block.append(map);
}
