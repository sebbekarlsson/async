function countTo(x) {
    return new Promise(function(resolve, reject){
        let result = 0;

        for (let i = 0; i < x; i++) {
            result += 1;
        }

        return resolve(result);
    });
    
};


countTo(10000).then(function(data){
    console.log(data);
});

async function main() {
    const value = await countTo(10000);

    console.log(value);
}

main();