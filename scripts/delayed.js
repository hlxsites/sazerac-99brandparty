// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

const map = document.querySelector('#locator-map');
if (map) {
  loadScript('/blocks/locator/locator-init.js', { defer: true });
}
