# Demonstration of lazy loading images

Download the code and from the root directory:

npm install

This will install only one package: express. Now type:

node server

Now open your browser, turn on throttling (in chrome devtools -> network and you will find throttling menu in the upper right corner) and open file without-lazyload.html. Take notice of how much time elapsed before page became responsive.
Now repeat the same with lazyload.html, the same page using lazyloading. Notice how quickly page is becoming responsive, and try how lazy loading works by scrolling the page down.