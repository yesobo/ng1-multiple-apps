import angular from 'angular';

import { AppModule as App1Module } from './app1/app.module';
import { AppModule as App2Module } from './app2/app.module';

require('./app1/app.scss');

function createAndAppendAppWrapper(appName) {
  var wrapperId = appName.concat('Wrapper');
  var iDiv = document.createElement('div');
  iDiv.id = wrapperId;
  iDiv.className = wrapperId;
  document.getElementsByTagName('body')[0].appendChild(iDiv);
  return iDiv;
}

function insertAppIndexContent(appWrapper, content) {
  appWrapper.innerHTML = content;
}

function bootstrapApp(wrapper, appModuleName) {
  var app = angular.bootstrap(wrapper, [appModuleName]);
  console.log(app);
}

function startApp(appModuleName, instanceName) {
  var appWrapper = createAndAppendAppWrapper(instanceName);
  insertAppIndexContent(appWrapper, `<ng1-app></ng1-app>`);
  bootstrapApp(appWrapper, appModuleName);
}

window.removeApp = function() {
  console.log('hola');
  var wrapper = document.querySelector('#app1Wrapper');
  angular.element(wrapper).scope().$root.$destroy();
  wrapper.remove();
}

startApp(App1Module, 'app1');
startApp(App2Module, 'app2');
