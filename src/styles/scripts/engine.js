const pianokeys = document.querySelectorAll(".piano-keys .key")
const volumeslider = document.querySelector(".volume-slider input")
const keyscheck = document.querySelector(".keys-check input");


let mapedKeys = [];
let audio = new Audio("./src/tunes/g.wav")

const playTune = (key) => {
audio.scr = `src/tunes/${key}.wav`;
audio.play();

const clickedKey = 
document.querySelector(`[data-key="${key}"]`)
clickedKey.classList.add("active");
setTimeout(() => {
    clickedKey.classList.remove("active");
}, 150);

};

pianokeys.forEach((key)=> {
    console.log(key.dataset.key);
    key.addEventListener("click", ()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
})

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
    playTune(e.key)
    }
}) 
const handlevolume = (e)=> {
    audio.volume = e.target.value
};

const showhidekeys = () =>{
    pianokeys.forEach(key => key.classList.toggle("hide"))
}

volumeslider.addEventListener("input" , handlevolume);

keyscheck.addEventListener("click",showhidekeys)