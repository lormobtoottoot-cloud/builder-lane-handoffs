const eventLog = document.querySelector('#eventLog');
const observerState = document.querySelector('#observerState');
const snapshotState = document.querySelector('#snapshotState');
const validationState = document.querySelector('#validationState');

function addLog(message) {
  const item = document.createElement('li');
  item.textContent = `${new Date().toLocaleTimeString()} - ${message}`;
  eventLog.prepend(item);
}

document.querySelector('#observeButton').addEventListener('click', () => {
  observerState.textContent = 'mock observed';
  document.querySelector('#inputState').textContent = 'input stream sampled';
  document.querySelector('#materialState').textContent = 'mock stable';
  document.querySelector('#layerState').textContent = 'observer preview';
  document.querySelector('#shellState').textContent = 'untouched';
  addLog('Mock observer updated local UI only. No source app files changed.');
});

document.querySelector('#snapshotButton').addEventListener('click', () => {
  snapshotState.textContent = 'mock snapshot noted';
  addLog('Mock snapshot status updated. No file was created.');
});

document.querySelector('#validateButton').addEventListener('click', () => {
  validationState.textContent = 'mock pass';
  addLog('Mock validation completed in the starter interface only.');
});
