import { publicToken, mainSceneUUID } from './config.js';

async function initApp() {
  await SDK3DVerse.joinOrStartSession({
    userToken: publicToken,
    sceneUUID: mainSceneUUID,
    canvas: document.getElementById('display-canvas'),
  });
  // install Three.js and MPR extensions
  await SDK3DVerse.installExtension(SDK3DVerse_ThreeJS_Ext);
  await SDK3DVerse.installExtension(SDK3DVerse_MPR_Ext);
}

window.addEventListener('load', initApp);
