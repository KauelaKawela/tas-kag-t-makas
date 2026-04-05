const choices = ["tas", "kagit", "makas"];
const emojis = {
    "tas": "🪨",
    "kagit": "📄",
    "makas": "✂️"
};

let playerScore = 0;
let computerScore = 0;
let isPlaying = false;

const playerFighter = document.getElementById("player-fighter");
const computerFighter = document.getElementById("computer-fighter");
const resultMessage = document.getElementById("result-message");
const scorePlayer = document.getElementById("player-score");
const scoreComputer = document.getElementById("computer-score");
const buttons = document.querySelectorAll(".choice-btn");

// Ses efektleri için basit webaudio osilatörü fonksiyonu (retro tarzı bip sesleri)
function playRetroSound(type) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        if (type === 'select') {
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); 
            oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.1);
        } else if (type === 'win') {
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
            oscillator.frequency.setValueAtTime(600, audioCtx.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(800, audioCtx.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.3);
        } else if (type === 'lose') {
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.4);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.4);
        } else if (type === 'draw') {
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
            oscillator.frequency.setValueAtTime(300, audioCtx.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.2);
        }
    } catch(e) {
        // Tarayıcı desteklemiyorsa veya etkileşim kısıtlaması varsa sessizce devam et
        console.log("Ses efekti çalınamadı.");
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (!isPlaying) {
            playGame(button.id);
        }
    });
});

function playGame(playerChoice) {
    isPlaying = true;
    playRetroSound('select');
    
    // Savaş hazırlık animasyonu
    playerFighter.textContent = "🤜";
    computerFighter.textContent = "🤛";
    resultMessage.textContent = "SAVAŞIYOR...";
    resultMessage.style.color = "var(--text-color)";
    resultMessage.style.textShadow = "none";
    
    // Shake animasyonlarını ekle
    playerFighter.style.animation = "shakePlayer 0.3s infinite";
    computerFighter.style.animation = "shakeComputer 0.3s infinite";
    
    // Kullanıcı çok sık basamasın diye butonları disable yap
    buttons.forEach(btn => btn.disabled = true);
    
    setTimeout(() => {
        // Animasyonları temizle
        playerFighter.style.animation = "";
        computerFighter.style.animation = "";
        
        // Bilgisayarın seçimi
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        // Emojileri ekrana bas
        playerFighter.textContent = emojis[playerChoice];
        computerFighter.textContent = emojis[computerChoice];
        
        // Kazananı kontrol et
        checkWinner(playerChoice, computerChoice);
        
        // Butonları tekrar aktif et
        buttons.forEach(btn => btn.disabled = false);
        isPlaying = false;
        
    }, 1200);
}

function checkWinner(player, computer) {
    if (player === computer) {
        resultMessage.textContent = "BERABERE!";
        resultMessage.style.color = "#fff";
        resultMessage.style.textShadow = "2px 2px #555";
        playRetroSound('draw');
    } else if (
        (player === "tas" && computer === "makas") ||
        (player === "kagit" && computer === "tas") ||
        (player === "makas" && computer === "kagit")
    ) {
        resultMessage.textContent = "KAZANDIN!";
        resultMessage.style.color = "var(--secondary-color)";
        resultMessage.style.textShadow = "2px 2px #000, 0 0 10px var(--secondary-color)";
        playerScore++;
        scorePlayer.textContent = playerScore;
        playRetroSound('win');
    } else {
        resultMessage.textContent = "KAYBETTİN!";
        resultMessage.style.color = "var(--primary-color)";
        resultMessage.style.textShadow = "2px 2px #000, 0 0 10px var(--primary-color)";
        computerScore++;
        scoreComputer.textContent = computerScore;
        playRetroSound('lose');
    }
}
