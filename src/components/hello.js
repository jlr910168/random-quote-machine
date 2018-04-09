import './hello.css';

const component = (text) => {
  const elem = document.createElement('div');
  elem.innerHTML = text;
  elem.classList.add('hello');
  return elem;
};

export default component;
