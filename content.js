function insertSymbol(symbol) {
  const activeElement = document.activeElement;
  if (activeElement && activeElement.matches('input, textarea')) {
    const caretPosition = activeElement.selectionStart;
    activeElement.value = activeElement.value.substring(0, caretPosition) + symbol + activeElement.value.substring(caretPosition);
    activeElement.focus();
    activeElement.selectionStart = caretPosition + 1;
    activeElement.selectionEnd = caretPosition + 1;
  } //TODO: complex input controls
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
