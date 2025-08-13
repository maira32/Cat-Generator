let btn = document.querySelector("#btn");
let img = document.getElementById("myImage");
const catSound = new Audio('meow.mp3');
const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const getFacts = async ()=>{
  try{
//console.log("getting data...");
let response = await fetch(URL);
//console.log(response); //JSON
let data = await response.json();
//console.log(data[0].url);
img.src = data[0].url;
img.style.display = "block";
img.style.opacity = 1; 
catSound.play();
confetti({
      particleCount: 100,
      spread: 50,
      origin: { y: 1 },
      colors: ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93']
    });
} catch (error) {
    console.error("Error fetching cat:", error);
  }
};
btn.addEventListener("click",getFacts);

document.addEventListener("keydown",(event)=>{
if (event.code === "Space") {   // or event.key === " " 
    event.preventDefault();       // prevents scrolling the page
    getFacts();
  }
});