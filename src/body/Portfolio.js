import "./Portfolio.css";


export async function Portfolio() {
 const dataApi =   await  fetch("https://api.jikan.moe/v4/anime").then(response => response.json()).then(json => json.data)
 console.log(dataApi)
}
