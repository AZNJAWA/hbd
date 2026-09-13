const top_a1 = document.querySelectorAll(".top_a1")
const top_a2 = document.querySelectorAll(".top_a2")
const pembuatan = document.querySelector(".pembuatan_div")
const a3 = document.querySelectorAll(".a3")
const lagu = document.querySelectorAll(".div_lagu")
const b1_a1 = document.querySelector(".Lanjutkan1")
const b1_a2 = document.querySelector(".Lanjutkan2")
const bgpp = document.querySelector(".gpp")
const bga = document.querySelector(".Ga")
const audio = document.querySelector(".audios")
const piring = document.querySelector(".img_lagu")
const berikut = document.querySelector(".berikut")
const bye = document.querySelectorAll(".div_bye")
const btnbyee = document.querySelector(".byee")
const pem = document.querySelector(".kepembuatan")
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let pilihan = "0"
b1_a1.addEventListener("click", () => {
    gantikea2()
    console.log("beres");
});
bga.addEventListener("mouseenter", () => {
    let kena = 0;
    
    kecil(kena)
    console.log("wee")
});

bga.addEventListener("click", () => {
    alert("Wkwkwk ga bisa di klik wkwkwk")
})

b1_a2.addEventListener("click", () => { 
    if (pilihan == 1) {
        gantikea3()
    } else {
        alert("Pilih Dulu woe wkwkwkwk")
    }
})

berikut.addEventListener("click", () => {
    gantike4()
})

btnbyee.addEventListener("click", () => {
    gantike5()
})

bgpp.addEventListener("click", () => { 
    pilihan = 1;
    bgpp.style = "background-color: black;"
   
    bga.style = "display: none;"
})

if (pilihan > 1) {
    pilihan = 0
}

pem.addEventListener("click", () => {
    gantike6();
});

audio.addEventListener("play", () => { startmusik() })
audio.addEventListener("pause", () => { stopmusik() })
console.log(top_a2)


async function kecil(kena) {
    acaks = Math.floor(Math.random() * -300) + 1;
    acaks2 = Math.floor(Math.random() * -300) + 1;
    kurangi = Math.floor(Math.random() * 0.5) + 0.5;
    bga.style = `transform: translateX(${acaks}px) translateY(${acaks2}px);`
    kena += 1

    //await sleep(2000)
    //
 
    
    bga.textContent = "MALAZZ";
}

function startmusik() {
    piring.style = "animation: berputar 2s normal infinite;"
}

function stopmusik() {
    piring.style = "animation: berputar 0s normal;"
}


async function gantikea2() {
    top_a1.forEach((a1) => {
        a1.style = "animation: transisisamping 3s ease, rotasikanamkiri 1s ease infinite";
   
    });
    await sleep(3000)

    top_a1.forEach((a1) => {
        a1.style = "display: none;";

    });

    top_a2.forEach((a2) => {
        a2.style = "display: flex;"
    });

    
}

async function gantikea3() {
    top_a2.forEach((a2) => {
        a2.style = "animation: transisingilang 3s ease"
    });
    top_a2.forEach((a2) => {
        a2.style = "display: none;"
    });
    lagu.forEach((lagu) => {
        lagu.style = "display: flex;"
    });
   

}

async function gantike4() { 
    lagu.forEach((lagu) => {
        lagu.classList.add("naikk")
    });

    await sleep(3000)

    lagu.forEach((lagu) => {
        lagu.style = "display: none;"
    });

    a3.forEach((a3) => {
        a3.style = "display: flex;"
    });
}

async function gantike5() {
    a3.forEach((a3) => {
        a3.classList.add("ilank")
    });
    await sleep(2000)
    a3.forEach((a3) => {
        a3.style = "display: none;"
    });
    bye.forEach((bye) => {
        bye.style = "display: flex;"
    })
    
}

async function gantike6() {
    pembuatan.style = "display: flex;"

    bye.forEach((bye) => {
        bye.style = "display: none;"
    });

}

