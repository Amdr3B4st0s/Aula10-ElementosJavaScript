const header = document.querySelector('header');
header.insertAdjacentHTML('afterbegin', '<h1>Colocando um título pelo JavaScript</h1>');

const main = document.querySelector('main');
const novdiv = document.createElement('div');
const novdiv2 = document.createElement('div');
main.appendChild(novdiv);
novdiv.id = 'div1';
main.appendChild(novdiv2);
novdiv2.id = 'div2';

const div1 = document.querySelector('#div1');
div1.insertAdjacentHTML('afterbegin', '<h2>Div 1 criada com sucesso</h2>');
div1.insertAdjacentHTML('beforeend', '<p>Bem útil de se utilizar esse método.</p>');
        
const div2 = document.querySelector('#div2');
div2.insertAdjacentHTML('afterbegin', '<h2>Div 2 criada com sucesso</h2>');
div2.insertAdjacentHTML('beforeend', '<p>Bem útil de se utilizar esse método.</p>');