document.addEventListener('DOMContentLoaded', function() {
  var singleQuoteLeftButton = document.getElementById('singleQuoteLeftButton');
  var singleQuoteRightButton = document.getElementById('singleQuoteRightButton');
  var doubleQuoteLeftButton = document.getElementById('doubleQuoteLeftButton');
  var doubleQuoteRightButton = document.getElementById('doubleQuoteRightButton');
  var ndashButton = document.getElementById('ndashButton');
  var mdashButton = document.getElementById('mdashButton');

  singleQuoteRightButton.focus();

  singleQuoteLeftButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'singleQuoteLeft' });
    });
  });

  singleQuoteRightButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'singleQuoteRight' });
    });
  });

  doubleQuoteLeftButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'doubleQuoteLeft' });
    });
  });

  doubleQuoteRightButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'doubleQuoteRight' });
    });
  });

  ndashButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'ndash' });
    });
  });

  mdashButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'mdash' });
    });
  });

});
