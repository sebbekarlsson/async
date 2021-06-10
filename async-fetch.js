async function hej() {
    const result = await fetch("https://cat-fact.herokuapp.com/facts");
    const data = await result.json();

    console.log(data);
}


hej();