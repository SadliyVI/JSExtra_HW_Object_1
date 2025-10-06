import orderByProps from './orderByProps.js';

const hero = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40
};

const sorted = orderByProps(hero, ['name', 'level']);

const container = document.getElementById('app');
if (container) {
  container.innerHTML = `
    <h1>Результат сортировки</h1>
    <pre>${JSON.stringify(sorted, null, 2)}</pre>
    <p>Всего свойств: ${sorted.length}</p>
  `;
}
