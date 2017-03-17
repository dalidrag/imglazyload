# Demonstration of lazy loading images

Download the code and from the project root directory:

> npm install

This will install only one package: node express. Now type:

> node server

Now open your browser, turn on throttling, set it to GPRS (in Chrome, you do this by going devtools -> network --- you will find throttling menu in the upper right corner) and open file `without-lazyload.html`. Take notice of how much time elapsed before page became responsive.

Now repeat the same with `lazyload.html`---the same page using lazy loading of images. Notice how quickly page became responsive, and take a look at how lazy loading works by scrolling the page down.
