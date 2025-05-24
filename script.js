
// const URL = "https://official-joke-api.appspot.com/random_joke";
const URL = "https://official-joke-api.appspot.com/jokes/general/random";

const btn = document.getElementById("joke-btn");
const display = document.getElementById("joke-box");

async function getAJoke(){
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    let jokePunchline = data[0].punchline;
    let jokeSetUp = data[0].setup;
    console.log(jokePunchline);
    console.log(jokeSetUp);
    let joke = jokePunchline + " " + jokeSetUp;
    
    display.value = `${jokeSetUp} 
${jokePunchline}`;

}

btn.addEventListener('click', async(event) => {
    await getAJoke();
});