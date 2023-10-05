export default async function decorate(block) {
  window.locate = async (form) => {
    form.style.display = 'none';
  };
  block.textContent = '';
  const d = document.createElement('div');
  d.className = 'map-container';
  const map = document.createElement('div');
  map.id = 'locator-map';
  map.className = 'map';
  d.append(map);
  block.append(d);
}
