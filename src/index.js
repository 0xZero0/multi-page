import _ from 'lodash';
import './style.css';
import icon from './panda.jpg';
import data from './data.xml';
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  //添加图片
  var myIcon = new Image();
  myIcon.src = icon;
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());