import _ from 'lodash';
import printMe from './print'
// import './style.css';
// import icon from './panda.jpg';
// import data from './data.xml';
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  //添加图片
  // var myIcon = new Image();
  // myIcon.src = icon;
  // element.appendChild(myIcon);
  btn.innerHTML = 'Click me and check the console!';
  btn.onClick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}

