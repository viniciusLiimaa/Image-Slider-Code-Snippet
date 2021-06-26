# Code snippet for image slider with vanilla JS
This is a code snippet for an image slider which can be activated manually by the user but will also automaticaly change images, bouncing between the first one to the last one and then begining from the first one again.

(Live preview)[https://viniciusliimaa.github.io/Image-Slider-Code-Snippet/]

## Changes to be made in case of use
1. Images must be added inside the element with the `image-slider` class, wheter it's through hard coding or injecting the code with JS. The number of images added will not influence the code, so it won't break after a certain amount of images. Just be sure to add it into the right parent. If the add image is not to be showed first, you must add `style="display: none;`.
2. If you want to change the used to display the image look for the `.image-slider` class inside the css.
3. Images are being automatically switched through a `setInterval()` inside an IIFE. If you want to change the timer, modify the timer inside the function.
4. If you're using this with ES6 Modules or some framework like react, just import the `svg` files into your js files and build your component from there. The CSS will still apply.
5. Each functionality of the slider in being wrapped into a module for easy visualization.

## Functionalities inside js file
### `arrowFunc`
Encapsulates the functionality related to the arrows used to toggle images.

### `btnFunc`
Encapsulates the functionality related to the footer buttons used to toggle images.

### `timeoutFunc`
Encapsulates the functionality related to automatically toggle images.

### `myListeners`
Encapsulates the listeners used by the user to interect with the page.

### IIFE
Contains the execution of the code.

## Folder strucutre
```
├── icons
│   ├── arrow_back.svg
│   └── arrow_forward.svg
├── images
│   ├── nature_five.jpeg
│   ├── nature_four.jpeg
│   ├── nature_one.jpg
│   ├── nature_three.jpeg
│   └── nature_two.jpg
├── index.html
├── README.md
├── script.js
├── styles.css
├── styles.css.map
└── styles.scss
```

## Disclaimer
Sass was used but the same end result can be achieved with just plain CSS.
