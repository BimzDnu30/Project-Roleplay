// DEBUG (biar tau kalau ada error)
window.onerror = function(msg) {
    console.log("ERROR:", msg);
};

// EFFECT CLICK
document.addEventListener("click", function (e) {
    const circle = document.createElement("div");
    circle.classList.add("click-effect");
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
    document.body.appendChild(circle);

    circle.addEventListener("animationend", () => {
        circle.remove();
    });
});

// AMBIL ELEMENT (AMAN)
const overlay = document.querySelector('.overlay');
const cover = document.querySelector('.cover');
const reset = document.querySelector('.reset');
const title = document.querySelector('.title');
const container = document.getElementById('container');
const titleC = document.querySelector('.titleC');
const messageC = document.querySelector('.messageC');
const stiker = document.querySelector('.stiker');
const mainStiker = document.querySelector('#main-stiker');

const envwrap = document.querySelector('.envwrap');
const wallpaper = document.querySelector('.wallpaper');
const linkmp3 = document.getElementById('linkmp3');

// SAFE STYLE
if (envwrap) envwrap.style = "transform:scale(0);opacity:0;transition:all .6s ease";
if (reset) reset.style = "transform:scale(0);opacity:0;transition:all .6s ease";

// AUDIO FIX
let audio = null;
if (linkmp3) {
    audio = new Audio(linkmp3.src);
    audio.loop = true;
    audio.volume = 0.7;
}

// ENVELOPE
const envelope = document.getElementById('envelope');
const btnOpen = document.getElementById('open');

if (envelope) envelope.addEventListener('click', open);
if (btnOpen) btnOpen.addEventListener('click', open);

function open() {
    if (!envelope) return;

    envelope.classList.remove("close");
    envelope.classList.add("open");

    if (reset) reset.style="transform:scale(0);opacity:0;transition:all .6s ease";

    setTimeout(function(){
        if (envwrap) envwrap.classList.add('opahidden');
        if (wallpaper) wallpaper.style="transform: scale(1.5)";

        setTimeout(function(){
            if (container) {
                container.classList.remove('hidden');
                container.classList.add('opamuncul');
            }

            if (stiker) stiker.classList.add('opamuncul');

            if (wallpaper) wallpaper.style="transform: scale(1)";
            if (envwrap) envwrap.classList.add('hidden');

            katanimasi();
        }, 800);
    }, 1500);
}

// AWALAN CLICK
const awalan = document.querySelector(".awalan");
if (awalan) {
    awalan.onclick = async function() {
        if (audio) {
            try {
                await audio.play();
            } catch (e) {
                console.log("Audio gagal play");
            }
        }

        if (overlay) overlay.style="opacity:0;transition:all .6s ease";
        if (cover) cover.style="transform:scale(0);opacity:0;transition:all .6s ease";

        setTimeout(function(){
            if (overlay) overlay.style.display="none";
            if (envwrap) envwrap.style="transition:all .6s ease";
            if (reset) reset.style="transition:all .6s ease";
            if (wallpaper) wallpaper.style="transform: scale(1)";
        }, 300);
    }
}

// TEXT DATA
let vjudul = titleC ? titleC.innerHTML : "";
if (titleC) titleC.innerHTML = "";

let vmessage = messageC ? messageC.innerHTML : "";
if (messageC) messageC.innerHTML = "";

// ANIMASI JUDUL
function katanimasi(){
    new TypeIt(".titleC", {
        strings: [vjudul],
        startDelay: 400,
        speed: 35,
        lifeLike: true,
        cursor: true,
        afterComplete: function(){
            if (titleC) titleC.innerHTML = vjudul;
            setTimeout(() => {katanimasiAlts()}, 600);
        },
    }).go();
}

// ANIMASI MESSAGE
function katanimasiAlts(){
    new TypeIt(".messageC", {
        strings: [
            "─",
            "<br>" + (window.pesanSurat1?.innerHTML || ""),
            "<br>" + (window.pesanSurat2?.innerHTML || ""),
            "<br>" + (window.pesanSurat3?.innerHTML || "")
        ],
        startDelay: 600,
        speed: 45,
        lifeLike: true,
        cursor: true,
        breakLines: true,

        afterStep: function(instance) {
            if (instance.is('completed')) {
                setTimeout(() => {
                    instance.next();
                }, 1200);
            }
        },

        afterComplete: function(){
            const cursor = document.querySelector(".ti-cursor");
            if (cursor) cursor.style.display = "none";

            setTimeout(() => {
                clearInterval(scrollInterval);
            }, 1000);
        },
    }).go();
}

// STIKER ANIMATION (AMAN)
function stikerHidden(){
    if (!stiker) return;
    stiker.style="transform:scale(0);opacity:0;";
    setTimeout(function(){
        stiker.style="transform:scale(1.1);opacity:1;";
    }, 300);
}

// AUTO SCROLL
function autoScroll() {
    if (container) container.scrollTop += 10;
}
const scrollInterval = setInterval(autoScroll, 50);
