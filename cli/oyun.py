import random
import time
import os

# ANSI Renk Kodları (Sıfır Bağımlılık / Zero Dependency)
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    RESET = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    BG_RED = '\033[41m'
    BG_GREEN = '\033[42m'

def ekran_temizle():
    """Terminal ekranını temizleyerek arcade/frame akışı sağlar."""
    os.system('cls' if os.name == 'nt' else 'clear')

def baslik_yazdir():
    ekran_temizle()
    print(Colors.CYAN + Colors.BOLD + "═" * 54)
    print("      👾 TAŞ KAĞIT MAKAS - RETRO ARCADE 👾      ")
    print("═" * 54 + Colors.RESET)
    print(Colors.YELLOW + "      🪙  INSERT COIN TO PLAY... (Çıkış: 'q')" + Colors.RESET + "\n")

secenekler = ["taş", "kağıt", "makas"]

def oyunu_baslat():
    baslik_yazdir()
    skor_oyuncu = 0
    skor_bilgisayar = 0
    
    while True:
        # Retro Skor Tablosu Kutusu
        print(Colors.BLUE + Colors.BOLD + "  ┌────────── SCOREBOARD ──────────┐")
        print(f"  │ {Colors.GREEN}👤 SEN: {skor_oyuncu:<2}{Colors.BLUE}          {Colors.RED}🤖 CPU: {skor_bilgisayar:<2}{Colors.BLUE} │")
        print("  └────────────────────────────────┘" + Colors.RESET)
        
        oyuncu = input(Colors.BOLD + "\n🛡️ [Hamleni Seç] (Taş, Kağıt, Makas): " + Colors.RESET).strip().lower()
        
        # Türkçe karakter toleransı
        if oyuncu == 'tas': oyuncu = 'taş'
        if oyuncu == 'kagit': oyuncu = 'kağıt'
        
        if oyuncu == 'q':
            baslik_yazdir()
            print(Colors.HEADER + Colors.BOLD + "=== OYUN BİTTİ ===".center(54) + Colors.RESET)
            print(f"\n🎮 SON SKOR:")
            print(Colors.GREEN + f"  👤 SEN: {skor_oyuncu}" + Colors.RESET)
            print(Colors.RED + f"  🤖 BİLGİSAYAR: {skor_bilgisayar}\n" + Colors.RESET)
            
            if skor_oyuncu > skor_bilgisayar:
                print(Colors.BG_GREEN + Colors.BOLD + "  🏆 TEBRİKLER, ZAFER SENİN! MAÇI KAZANDIN!  " + Colors.RESET)
            elif skor_bilgisayar > skor_oyuncu:
                print(Colors.BG_RED + Colors.BOLD + "  💀 BİLGİSAYAR KAZANDI, DAHA ÇOK JETON AT!  " + Colors.RESET)
            else:
                print(Colors.YELLOW + Colors.BOLD + "  🤝 İLGİNÇ, DURUM BERABERE! RÖVANŞ ŞART!  " + Colors.RESET)
            
            print(Colors.CYAN + "\nOynadığınız için teşekkürler!\n" + "═"*54 + Colors.RESET)
            break
            
        if oyuncu not in secenekler:
            print(Colors.RED + "\n⛔ GEÇERSİZ KOMUT!" + Colors.RESET + " Lütfen taş, kağıt veya makas yazın.")
            time.sleep(1.2)
            baslik_yazdir()
            continue
            
        bilgisayar = random.choice(secenekler)
        
        print(Colors.YELLOW + "\n⚔️  Savaş başlıyor..." + Colors.RESET)
        time.sleep(0.4)
        print("  🤜 " + Colors.GREEN + Colors.BOLD + oyuncu.upper() + Colors.RESET)
        time.sleep(0.4)
        print(Colors.HEADER + "          VS          " + Colors.RESET)
        time.sleep(0.4)
        print("               🤛 " + Colors.RED + Colors.BOLD + bilgisayar.upper() + Colors.RESET + "\n")
        time.sleep(0.4)
        
        if oyuncu == bilgisayar:
            print(Colors.YELLOW + "► Sonuç: BERABERE! İkiniz de aynı taktiği uyguladınız." + Colors.RESET)
        elif (oyuncu == "taş" and bilgisayar == "makas") or \
             (oyuncu == "kağıt" and bilgisayar == "taş") or \
             (oyuncu == "makas" and bilgisayar == "kağıt"):
            print(Colors.GREEN + "► Sonuç: HARİKA! BU ELİ KAZANDIN! 🎉" + Colors.RESET)
            skor_oyuncu += 1
        else:
            print(Colors.RED + "► Sonuç: EYVAH! BU ELİ KAYBETTİN! 💥" + Colors.RESET)
            skor_bilgisayar += 1
            
        print("\n" + Colors.BLUE + "Sonraki el yükleniyor..." + Colors.RESET)
        time.sleep(2)
        baslik_yazdir()

if __name__ == "__main__":
    # Windows terminalleri için ANSI renklerini aktif et
    if os.name == 'nt':
        os.system('color')
        
    try:
        oyunu_baslat()
    except KeyboardInterrupt:
        print(Colors.RED + "\n\n[!] Oyun aniden sonlandırıldı. Görüşmek üzere!" + Colors.RESET)
