function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}
let counter = 4;

function incCounter() {
    counter++;
    console.log('incCounter: ' + counter);
}

export { square, cube, counter, incCounter };

setTimeout(() => {
    counter = 10;
    console.log('after 500ms: ' + counter);
}, 500);