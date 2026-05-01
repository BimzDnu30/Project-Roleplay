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

const overlay = document.querySelector('.overlay');
const cover = document.querySelector('.cover');
const reset = document.querySelector('.reset');
const title = document.querySelector('.title');
const container = document.getElementById('container');
const titleC = document.querySelector('.titleC');
const messageC = document.querySelector('.messageC');

// 🔥 STIKER DIMATIKAN TOTAL
const stiker = document.querySelector('.stiker');
stiker.style.display = "none";

envwrap.style = "transform:scale(0);opacity:0;transition:all .6s ease";

// 🔥 AUDIO LOOP
const linkmp3 = document.getElementById('linkmp3');
const audio = new Audio(linkmp3.src);
audio.loop = true;
audio.volume = 0.7;

const envelope = document.getElementById('envelope');
const btnOpen = document.getElementById('open');

reset.style = "transform:scale(0);opacity:0;transition:all .6s ease";

envelope.addEventListener('click', open);
btnOpen.addEventListener('click', open);

function open() {
    envelope.classList.remove("close");
    envelope.classList.add("open");

    reset.style = "transform:scale(0);opacity:0;transition:all .6s ease";

    setTimeout(function () {
        envwrap.classList.add('opahidden');
        wallpaper.style = "transform: scale(1.5)";

        setTimeout(function () {
            container.classList.remove('hidden');
            container.classList.add('opamuncul');

            wallpaper.style = "transform: scale(1)";
            envwrap.classList.add('hidden');

            katanimasi();
        }, 800);
    }, 1500);
}

// 🔥 PLAY AUDIO SETELAH KLIK
document.querySelector(".awalan").onclick = async function () {
    try {
        await audio.play();
    } catch (err) {
        console.log("Autoplay diblokir");
    }

    overlay.style = "opacity:0;transition:all .6s ease";
    cover.style = "transform:scale(0);opacity:0;transition:all .6s ease";

    setTimeout(function () {
        overlay.style.display = "none";
        envwrap.style = "transition:all .6s ease";
        reset.style = "transition:all .6s ease";
        wallpaper.style = "transform: scale(1)";
    }, 300);
};


let vjudul = document.querySelector('.titleC').innerHTML;
titleC.innerHTML = "";

let vmessage = document.querySelector('.messageC').innerHTML;
messageC.innerHTML = "";

function katanimasi() {
    new TypeIt(".titleC", {
        strings: [vjudul],
        startDelay: 500,
        speed: 40,
        lifeLike: true,
        cursor: true,
        afterComplete: function () {
            titleC.innerHTML = vjudul;
            setTimeout(() => {
                katanimasiAlts();
            }, 800);
        },
    }).go();
}

function katanimasiAlts() {
    new TypeIt(".messageC", {
        strings: [
            "─",
            "<br>" + pesanSurat1.innerHTML,
            "<br>" + pesanSurat2.innerHTML,
            "<br>" + pesanSurat3.innerHTML,
        ],
        startDelay: 800,
        speed: 50,
        lifeLike: true,
        cursor: true,
        breakLines: true,
        waitUntilVisible: true,

        afterStep: function (instance) {
            if (instance.is('completed')) {
                setTimeout(function () {
                    instance.next();
                }, 1500); // 🔥 delay antar paragraf
            }
        },

        afterComplete: function () {
            document.querySelector(".ti-cursor").style.display = "none";

            setTimeout(function () {
                clearInterval(scrollInterval);
            }, 1000);
        },
    }).go();
}

function autoScroll() {
    container.scrollTop += 10;
}

const scrollInterval = setInterval(autoScroll, 50);                    "<br>" + pesanSurat2.innerHTML,
                    "<br>" + pesanSurat3.innerHTML,
				 ],
        startDelay: 1,
        speed: 28,
        cursor: true,
        breakLines: true,
        waitUntilVisible: true,
        afterStep: function(instance) {
            if (instance.is('completed')) {
                setTimeout(function() {
                    instance.next();
                }, 700);
            }
        },
        afterComplete: function(){      
            document.querySelector(".ti-cursor").style.display = "none";
            setTimeout(function() {
                clearInterval(scrollInterval);
            }, 1000);
            setTimeout(() => {
                stikerHidden();
                setTimeout(() => {
                   mainStiker.src = stikerAlt1.src;
                   //setInterval(berjatuhan,300);
                 }, 300);
             }, 100);
             
        },}).go();
    }
    
    function stikerHidden(){
    	stiker.style="transform:scale(0);opacity:0;";
        setTimeout(function(){stiker.style="transform:scale(1.1);opacity:1;";}, 300);
    }
    
    function autoScroll() {container.scrollTop += 10;} 
    const scrollInterval = setInterval(autoScroll, 50); 
