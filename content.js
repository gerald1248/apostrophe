function insertSymbol(symbol) {
  chrome.clipboard.writeText(symbol)
  .then(() => {console.log("done");})
  .catch((error) => {
    console.error("Failed to copy to clipboard:", error);
  });
  const activeElement = document.activeElement;
  console.log(activeElement);
  if (activeElement && activeElement.matches('input, textarea')) {
    //TODO: replace selections
    const caretPosition = activeElement.selectionStart;
    activeElement.value = activeElement.value.substring(0, caretPosition) + symbol + activeElement.value.substring(caretPosition);
    activeElement.focus();
    activeElement.selectionStart = caretPosition + 1;
    activeElement.selectionEnd = caretPosition + 1;
  } else {
    console.log("sendKeyEvents");
    // Create a keydown event for 'A'
    const keydownEvent = new KeyboardEvent('keydown', {
      key: 'a',
      code: 'KeyA',
      which: 65, // Key code for 'A'
      bubbles: true,
      cancelable: true
    });

    // Create a keyup event for 'A'
    const keyupEvent = new KeyboardEvent('keyup', {
      key: 'a',
      code: 'KeyA',
      which: 65,
      bubbles: true,
      cancelable: true
    });

    activeElement.focus();
    activeElement.dispatchEvent(keydownEvent);
    activeElement.dispatchEvent(keyupEvent);
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'singleQuoteLeft') {
      insertSymbol('‘');
  } else if (request.action === 'singleQuoteRight') {
    insertSymbol('’');
  } else if (request.action === 'doubleQuoteLeft') {
    insertSymbol('“');
  } else if (request.action === 'doubleQuoteRight') {
    insertSymbol('”');
  } else if (request.action === 'ndash') {
    insertSymbol('–');
  } else if (request.action === 'mdash') {
    insertSymbol('—');
  }
});
