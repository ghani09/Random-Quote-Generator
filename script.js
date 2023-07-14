let text = document.getElementById("qte");
let btn = document.getElementById("btn");


btn.addEventListener("click",getQuote);


async function getQuote(){
let id = Math.floor(Math.random() * 50);
    const url = `https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count= ${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        text.innerHTML = result ;
    } catch (error) {
        console.error(error);
        text.innerHTML = "Server falure" ;
        text.style.color = "red"
    }






}