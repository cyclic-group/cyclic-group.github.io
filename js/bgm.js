// let current_bgm = undefined;
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
        // const audio_list = ["https://vgmsite.com/soundtracks/cult-of-the-lamb-original-soundtrack-2022/upclzsolxj/01.%20Praise%20the%20Lamb.mp3", "https://vgmsite.com/soundtracks/cult-of-the-lamb-original-soundtrack-2022/lbccbknyve/05.%20Faith%20Up.mp3", "https://vgmsite.com/soundtracks/cult-of-the-lamb-original-soundtrack-2022/biuzbjcrtj/07.%20Saviour.mp3", 
        //"https://vgmsite.com/soundtracks/cult-of-the-lamb-original-soundtrack-2022/rxoopwecuw/08.%20Darkwood.mp3", "https://vgmsite.com/soundtracks/cult-of-the-lamb-original-soundtrack-2022/mwplkyfcej/10.%20Leshy.mp3", "https://vgmsite.com/soundtracks/cult-of-the-lamb-original-soundtrack-2022/pyrxysussx/11.%20Knucklebones.mp3",
        //"https://vgmsite.com/soundtracks/cult-of-the-lamb-original-soundtrack-2022/bmshkiptnt/16.%20Heket.mp3", "https://vgmsite.com/soundtracks/cult-of-the-lamb-original-soundtrack-2022/shfpubazuq/26.%20Shamura.mp3", "https://vgmsite.com/soundtracks/cult-of-the-lamb-original-soundtrack-2022/cjseknykhh/35.%20The%20One%20Who%20Waits.mp3"];
        // const audio_list = [
        //     "/audios/megalovania.mp3",
        //     "/audios/the-one-who-waits.mp3",
        //     "/audios/faith-up.mp3",
        //     "/audios/rennala-queen-of-the-full-moon.mp3"
        // ];
        // do { 
        //     next_bgm = Math.floor(Math.random() * audio_list.length);
        // } while (next_bgm === current_bgm);
        // current_bgm = next_bgm;
        // bgm.src = audio_list[current_bgm];
        bgm.src = "/audios/rennala-queen-of-the-full-moon.mp3";
        bgm.play();
        return false;
    });
    widget.addEventListener("long-press", () => {
        bgm.pause();
        return false;
    });
};