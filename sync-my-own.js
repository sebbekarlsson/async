function doSomething() {
    let result = 0;

    for (let i = 0; i < 10000; i++) {
        result += 1;
    }

    return result;
}

const value = doSomething();
console.log(value);