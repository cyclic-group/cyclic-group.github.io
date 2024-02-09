let current_bgm = 0;
const bgm = document.createElement("audio");
bgm.id = "bgm";
bgm.src = undefined;
bgm.controls = false;
bgm.autoplay = false; 
bgm.style.display = "none";
bgm.loop = "loop";
document.body.appendChild(bgm);

window.onload = function() {
    const widget = document.querySelector("#live2d-widget");
    widget.style.pointerEvents = "auto";
    widget.style.cursor = "url('/images/clef.png') 20 20, auto";
    widget.addEventListener("mousedown", () => {
        // place music sources to this list
        const audio_list = [
            "/audios/rennala-queen-of-the-full-moon.mp3",
            "/audios/megalovania.mp3",
            // "/audios/the-one-who-waits.mp3",
            "/audios/faith-up.mp3"
        ];
        do { 
            next_bgm = Math.floor(Math.random() * audio_list.length);
        } while (next_bgm === current_bgm);
        current_bgm = next_bgm;
        bgm.src = audio_list[current_bgm];
        bgm.play();
        return false;
    });
    widget.addEventListener("long-press", () => {
        bgm.pause();
        return false;
    });
};