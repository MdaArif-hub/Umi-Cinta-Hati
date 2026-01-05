// 1. DATA GAMBAR UTAMA (Arif dah rename .jpg)
const cardData = [
    { frontText: "Umi Ratu Hati Kami", backContent: "assets/img1.jpg" },
    { frontText: "Syurga Di Bawah Kaki Umi", backContent: "assets/img2.jpg" },
    { frontText: "Terima Kasih Umi", backContent: "assets/img3.jpg" },
    { frontText: "Kami Sayang Umi", backContent: "assets/img4.jpg" },
    { frontText: "Doa Umi Kekuatan Kami", backContent: "assets/img5.jpg" },
    { frontText: "Selamat Hari Lahir", backContent: "assets/img6.jpg" }
];

const bgMusic = document.getElementById('bgMusic');
const clickSound = document.getElementById('clickSound');
const bgVolumeSlider = document.getElementById('bgVolume');
const clickVolumeSlider = document.getElementById('clickVolume');

bgMusic.volume = 0.5;
clickSound.volume = 0.25;

bgVolumeSlider.addEventListener('input', (e) => bgMusic.volume = e.target.value);
clickVolumeSlider.addEventListener('input', (e) => clickSound.volume = e.target.value);

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log("Muted"));
}

function createParticle(e) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const icons = ['🌸', '❤️', '✨', '🌹', '💎'];
    particle.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    let x = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    let y = e.clientY || (e.touches ? e.touches[0].clientY : 0);
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.fontSize = Math.random() * 20 + 20 + 'px';
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}

window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
            document.getElementById('landing-page').classList.remove('hidden');
            document.getElementById('landing-page').classList.add('fade-in');
        }, 800);
    }, 2500); 
});

function createBgHearts() {
    const container = document.getElementById('bg-hearts');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-bg-heart';
        heart.innerHTML = ['❤️','🌸','✨','🌹'][Math.floor(Math.random()*4)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
    }, 400);
}
createBgHearts();

const startBtn = document.getElementById('startButton');
const landingPage = document.getElementById('landing-page');
const gamePage = document.getElementById('game-page');
const cardGrid = document.getElementById('cardGrid');
const continueBtn = document.getElementById('continueButton');
const writingTitle = document.getElementById('writing-title');

if (startBtn) {
    startBtn.onclick = function() {
        playClick();
        bgMusic.play().catch(err => console.log("Interaction needed"));
        landingPage.classList.add('fade-out');
        setTimeout(() => {
            landingPage.classList.add('hidden');
            gamePage.classList.remove('hidden');
            gamePage.classList.add('fade-in');
            typeTitle("Ikhlas buat Umi tercinta...");
            renderCards();
        }, 1000);
    };
}

function typeTitle(text) {
    let i = 0; writingTitle.innerHTML = "";
    function type() {
        if (i < text.length) {
            writingTitle.innerHTML += text.charAt(i); i++;
            setTimeout(type, 110);
        }
    }
    type();
}

function renderCards() {
    cardGrid.innerHTML = '';
    cardData.forEach(data => {
        const card = document.createElement('div');
        card.className = 'flip-card shake-infinite';
        card.innerHTML = `<div class="flip-card-inner"><div class="card-front"><span>${data.frontText}</span></div><div class="card-back"><img src="${data.backContent}"></div></div>`;
        card.onclick = function() {
            playClick();
            card.classList.toggle('flipped');
            card.classList.remove('shake-infinite');
            if(document.querySelectorAll('.flipped').length >= 6) {
                setTimeout(() => { continueBtn.classList.remove('hidden'); continueBtn.classList.add('fade-in'); }, 800);
            }
        };
        cardGrid.appendChild(card);
    });
}

const letterPage = document.getElementById('letter-page');
const envelopeContainer = document.getElementById('envelopeContainer');
const typewriterContainer = document.getElementById('typewriter-text');
const clickHint = document.getElementById('clickHint');
const bonusBtn = document.getElementById('bonusBtn');

continueBtn.onclick = function() {
    playClick();
    gamePage.classList.add('fade-out');
    setTimeout(() => {
        gamePage.classList.add('hidden');
        letterPage.classList.remove('hidden');
        letterPage.classList.add('fade-in');
    }, 1000);
};

if (envelopeContainer) {
    envelopeContainer.onclick = function() {
        if (!this.classList.contains('open')) {
            playClick();
            this.classList.add('open');
            this.classList.remove('shake-infinite');
            clickHint.style.display = 'none';
            setTimeout(startTypewriter, 1200);
        }
    };
}

async function startTypewriter() {
    const myMessage = [
        { text: "Selamat Hari Lahir Umi Tersayang yang ke-47. 🌹\n", class: "font-bold-pink" },
        { text: "6 Januari 1979 — 6 Januari 2026\n", class: "font-italic" },
        { type: "divider" },
        { text: "Umi... Arif buat kejutan ni sorang-sorang, khas untuk Umi hari ni. Walaupun Arif tahu web ni tak seberapa cantik macam Umi harap, tapi ini saja cara Arif nak tunjuk... betapa Arif hargai setiap titik peluh, setiap air mata, setiap doa yang Umi korbankan untuk kitaorang.\n\n" },
        { text: "Sebagai abang sulung, Arif nampak segala-galanya, Umi. ", class: "font-bold-pink" },
        { text: "Arif nampak Umi penat lepas kerja tapi masih sempatkan masak untuk kitaorang. Arif nampak Umi senyum depan kitaorang walaupun hati Umi sedang berat. Arif nampak Umi bersabar dengan kerenah Arif, Aqil, Mia, dan Aiman... dari kitaorang masih kecil sampai sekarang dah besar-besar ni.\n\n" },
        { text: "Kadang-kadang Arif terfikir... macam mana Umi boleh kuat sangat? Macam mana Umi mampu besarkan 4 orang anak sorang-sorang dengan penuh kasih sayang?\n\n" },
        { text: "Terima kasih Umi... terima kasih sebab tak pernah mengeluh sikit pun. Terima kasih sebab pastikan ada makanan atas meja walaupun kadang-kadang Umi sendiri makan last sekali. Terima kasih sebab didik kitaorang jadi orang yang berguna, yang tahu erti tanggungjawab dan hormat-menghormati.\n\n", class: "font-bold-pink" },
        { type: "quote", text: "“Syurga Arif memang ada pada setiap senyuman dan redha Umi. Tanpa Umi, tiada erti hidup Arif.”" },
        { text: "\nWalaupun Arif yang buat website ni, tapi Arif nak Umi tahu... ini suara dari hati kitaorang ber-empat. Kitaorang adik-beradik akan sentiasa berusaha untuk jadi anak yang terbaik untuk Umi.\n\n" },
        { text: "Arif janji kat Umi... Arif akan terus jaga adik-adik macam Umi ajar. Arif akan pastikan kitaorang semua dengar cakap Umi dan jadi anak soleh solehah. Arif takkan biar sesiapa pun lukakan hati ratu dalam hidup kitaorang ni.\n\n", class: "font-bold-pink" },
        { text: "Kitaorang sedar sangat Umi... sejauh mana pun Arif pergi, setinggi mana pun kejayaan yang Arif capai nanti, semuanya berpunca daripada berkat doa Umi yang tak pernah putus di atas tikar sejadah tu. ", class: "font-bold-pink" },
        { text: "Tanpa doa Umi yang ikhlas setiap pagi dan malam, tanpa air mata Umi yang jatuh dalam sujud... siapalah kitaorang semua. Kitaorang ni cuma hasil dari pengorbanan Umi yang tak terhitung.\n\n" },
        { text: "Arif minta maaf kalau selama ni Arif banyak buat silap, banyak sakitkan hati Umi dengan sikap degil Arif. Arif janji akan cuba jadi anak yang lebih baik.\n\n" },
        { text: "Semoga Allah panjangkan umur Umi, kurniakan kesihatan yang sempurna, murahkan rezeki Umi, dan sentiasa lindungi Umi dalam rahmat-Nya. Semoga Umi sentiasa bahagia dunia akhirat.\n\n", class: "font-bold-pink" },
        { text: "Arif sayang sangat-sangat kat Umi... lebih dari apa yang boleh Arif luahkan dengan kata-kata. Dan Arif tahu Aqil, Mia, dan Aiman pun sayang Umi dengan sepenuh hati mereka!\n\n" },
        { type: "divider" },
        { text: "Terima kasih untuk segalanya, Umi.\nTerima kasih sebab jadi Umi yang paling hebat dalam dunia ni.\nI love you so much, until my last breath. ❤️\n\n", class: "font-bold-pink" },
        { text: "Ikhlas dari lubuk hati anak sulung Umi,\nArif.\n\n", class: "font-italic" },
        { type: "divider" },
        { text: "P/S: Eh jap Umi... ada banyak lagi memori manis kita kat bawah ni... cuba Umi scroll sikit lagi ke bawah... Arif sediakan something special untuk Umi 💕", class: "font-italic" }
    ];

    typewriterContainer.innerHTML = "";
    for (const segment of myMessage) {
        let element = document.createElement('span');
        if (segment.type === "divider") { 
            element.className = "letter-divider"; 
            typewriterContainer.appendChild(element); 
            await new Promise(r => setTimeout(r, 650)); continue; 
        }
        if (segment.type === "quote") { element.className = "letter-quote"; }
        else if (segment.class) { element.className = segment.class; }
        typewriterContainer.appendChild(element);

        for (let char of segment.text) {
            element.textContent += char;
            const letterDiv = document.querySelector('.letter');
            letterDiv.scrollTop = letterDiv.scrollHeight;
            await new Promise(r => setTimeout(r, 45)); 
        }
    }
    bonusBtn.classList.remove('hidden');
    bonusBtn.classList.add('fade-in');
}

const bonusPage = document.getElementById('bonus-page');
const stackContainer = document.getElementById('stackContainer');
const finalHomeBtn = document.getElementById('finalHomeBtn');

bonusBtn.onclick = function() {
    playClick();
    letterPage.classList.add('fade-out');
    setTimeout(() => {
        letterPage.classList.add('hidden');
        bonusPage.classList.remove('hidden');
        bonusPage.classList.add('fade-in');
        renderStack();
    }, 1000);
};

function renderStack() {
    stackContainer.innerHTML = '';
    let photoNumbers = [];
    for (let i = 1; i <= 28; i++) {
        photoNumbers.push(i);
    }

    // Shuffle logic (Fisher-Yates)
    for (let i = photoNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [photoNumbers[i], photoNumbers[j]] = [photoNumbers[j], photoNumbers[i]];
    }

    photoNumbers.forEach((num, index) => {
        const card = document.createElement('div');
        card.className = 'stack-card';
        const rot = (Math.random() * 10 - 5);
        card.style.transform = `rotate(${rot}deg)`;
        card.style.zIndex = index;
        card.innerHTML = `<img src="assets2/${num}.jpg" alt="Memori ${num}">`;
        
        card.onclick = function() {
            playClick();
            this.classList.add('slide-out');
            checkStackEnd();
        };
        stackContainer.appendChild(card);
    });
}

function checkStackEnd() {
    const remaining = document.querySelectorAll('.stack-card:not(.slide-out)');
    if (remaining.length === 0) {
        setTimeout(() => {
            finalHomeBtn.classList.remove('hidden');
            finalHomeBtn.classList.add('fade-in');
        }, 500);
    }
}