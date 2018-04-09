const component = (text) => {
  const elem = document.createElement('div');
  elem.innerHTML = text;
  return elem;
};

document.body.appendChild(component('Hello Babel'));
