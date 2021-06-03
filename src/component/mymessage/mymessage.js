//import Vue from 'vue';//会用到Vue.extend()方法
import mymessage from './mymessage.vue';

// let MessageContructor = Vue.extend(mymessage);
// let instance;

// let myMessage = function(options = {}){
//   instance = new MessageContructor().$mount();
//   document.body.appendChild(instance,$el);
// }

// let myMessage2 = function(options = {}){
//   instance = new MessageContructor({
//     data:options
//   });
//   document.body.appendChild(instance.$mount().$el)
// }

// export default myMessage
const defaultInstallOpt = {
  size: '',
  zIndex: 2000,
};

const install = (app, opt) => {
  const option = Object.assign(defaultInstallOpt, opt);
  
  app.config.globalProperties.$ELEMENT = option;
  //setConfig(option);
  app.use(mymessage)
};

export default install