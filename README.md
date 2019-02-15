render-download-link
==================

Takes a blob and puts a link on the page so that the user can download the contents of that blob.

Installation
------------

    npm install render-download-link

Usage
-----

    var renderDownloadLink = require('render-download-link');

    renderDownloadLink({
      blob: createEncodedBlob(audioBuffer),
      parentSelector: '#downloads',
      downloadLinkText: 'Download the mix',
      filename: 'mix.wav'
    });

This will yield a link under the `downloads` element in the page that says "Download the mix." When the user clicks on the link, they will get a file dialog that will download the contents of the provided blob, in this case, an audio file.

[Here's some information on how to create a blob in the browser.](https://developer.mozilla.org/en-US/docs/Web/API/Blob#Examples)

The implementation is eight lines of code (I put in a package so that I prefer not to repeat them across projects). It's here as much for reference (perhaps moreso) than for reuse. 

License
-------

The MIT License (MIT)

Copyright (c) 2019 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
