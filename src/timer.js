const greeting = () => {
  const root = document.getElementById('root');
  const container = document.createElement('div');
  const header = document.createElement('h1');
  const par = document.createElement('p');

  header.innerHTML = 'Hello, world!';
  par.innerHTML = 'Proto React Component';

  container.append(header, par);
  root.append(container);

  console.log('I\'m from timer.js');
};

export default greeting;
