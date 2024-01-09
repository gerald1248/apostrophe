var contextID = -1;

chrome.input.ime.onFocus.addListener(function(context) {
  contextID = context.contextID;
});

chrome.input.ime.onBlur.addListener(function(context) {
  contextID = -1;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'callFunction' && request.functionName === 'wrapSendKeyEvents') {
    const result = this[request.functionName](request.data);
    console.log(result);
  }
});

function wrapSendKeyEvents(data) {
  console.log(data);
  return true;
}
