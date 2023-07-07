// N1 - Load images with a callback
function preloadImages(sources, callback) {
    let loadedImgs = 0;
    
    sources.forEach(image => {
        let img = document.createElement("img");
        img.src = image;
        
        img.onerror = img.onload = () => {
            loadedImgs++;
            if (loadedImgs == sources.length) callback();
        }
    });
}

// ---------- The test ----------

let sources = [
    "https://en.js.cx/images-load/1.jpg",
    "https://en.js.cx/images-load/2.jpg",
    "https://en.js.cx/images-load/3.jpg"
];

// add random characters to prevent browser caching
for (let i = 0; i < sources.length; i++) {
    sources[i] += '?' + Math.random();
}

// for each image,
// let's create another img with the same src and check that we have its width immediately
function testLoaded() {
    let widthSum = 0;
    for (let i = 0; i < sources.length; i++) {
        let img = document.createElement('img');
        img.src = sources[i];
        widthSum += img.width;
    }
    alert(widthSum);
    console.log("n");
}

// every image is 100x100, the total width should be 300
preloadImages(sources, testLoaded);