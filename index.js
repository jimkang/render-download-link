function renderDownloadLink({
  blob,
  parentSelector,
  downloadLinkText,
  filename
}) {
  var downloadsRoot = document.querySelector(parentSelector);
  var link = document.createElement('a');
  link.textContent = downloadLinkText;
  downloadsRoot.appendChild(link);
  var url = window.URL.createObjectURL(blob);
  link.href = url;
  link.download = filename;
  // Could call window.URL.revokeObjectURL after click. Maybe someday?
}

module.exports = renderDownloadLink;
