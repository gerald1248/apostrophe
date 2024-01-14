function copyToClipboard(symbol) {
  var notification = document.getElementById('notification');
  var success = false;
  navigator.clipboard.writeText(symbol).then(() => {
    notification.innerHTML = "Copied";
    success = true;
  }).catch(error => {
    notification.innerHTML = `Error copying text: ${error}`
  });;
  notification.classList.remove('hidden');
  notification.classList.add('visible');
  setTimeout(function() {
    notification.classList.remove('visible');
    notification.classList.add('hidden');
    if (success) {
      window.close(); 
    }
  }, 750);
}

document.addEventListener('DOMContentLoaded', function() {
  var singleQuoteLeftButton = document.getElementById('singleQuoteLeftButton');
  var singleQuoteRightButton = document.getElementById('singleQuoteRightButton');
  var doubleQuoteLeftButton = document.getElementById('doubleQuoteLeftButton');
  var doubleQuoteRightButton = document.getElementById('doubleQuoteRightButton');
  var ndashButton = document.getElementById('ndashButton');
  var mdashButton = document.getElementById('mdashButton');

  singleQuoteRightButton.focus();

  singleQuoteLeftButton.addEventListener('click', function() {
    copyToClipboard('\u2018'); // ‘
  });

  singleQuoteRightButton.addEventListener('click', function() {
    copyToClipboard('\u2019'); // ’
  });

  doubleQuoteLeftButton.addEventListener('click', function() {
    copyToClipboard('\u201c'); // “
  });

  doubleQuoteRightButton.addEventListener('click', function() {
    copyToClipboard('\u201d'); // ”
  });

  guillemotLeftButton.addEventListener('click', function() {
    copyToClipboard('\u00ab'); // «
  });

  guillemotRightButton.addEventListener('click', function() {
    copyToClipboard('\u00bb'); // »
  });

  ndashButton.addEventListener('click', function() {
    copyToClipboard('\u2013'); // –
  });

  mdashButton.addEventListener('click', function() {
    copyToClipboard('\u2014'); // —
  });

});
