(() => {
  const area = <HTMLElement>document.querySelector('#area');
  area.addEventListener('click', () => {
    const text = area.textContent.trim();
    if (text === 'Hello') {
      import(/* webpackPreload: true */ './a').then(module => {
        module.default(area);
      });
    } else if (text === 'A') {
      import(/* webpackPreload: true */ './b').then(module => {
        module.default(area);
      });
    } else if (text === 'B') {
      import(/* webpackPreload: true */ './c').then(module => {
        module.default(area);
      });
    } else {
      area.textContent = 'Hello';
    }
  });
})();
