let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

console.log("voice select", voiceSelect)

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, index) => (voiceSelect.options[index]  = new Option(voice.name), index))
};
// voiceSelect.addEventListener("change", ()=> {
//     speech.voice =voices[voiceSelect.value]
//     console.log(speech.voice)
// })


document.querySelector("button").addEventListener("click", ()=> {
    // console.log("speech" > speech)
    speech.text = document.querySelector("textarea").value;
    // console.log("speech",speech)
    // console.log(window.speechSynthesis);
    window.speechSynthesis.speak(speech)
})