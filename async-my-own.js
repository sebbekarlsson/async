async function doSomething() {
    let result = 0;

    for (let i = 0; i < 10000; i++) {
        result += 1;
    }

    return result;
}


doSomething().then(function(data){
    console.log(data);
});

async function main() {
    const value = await doSomething();

    console.log(value);
}