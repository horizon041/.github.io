document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer p');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `&copy; ${year} Horizon News & Blog. All Rights Reserved.`;
    }
    const contactLink = document.querySelector('a[href="contact.html"]');
    if (contactLink) {
        contactLink.addEventListener('click', function() {
            console.log('Navigating to Contact page');
            alert('संपर्क पेज पर जा रहे हैं!');
        });
    }
    const ticker = document.createElement('div');
    ticker.className = 'ticker';
    ticker.innerHTML = '<p>लेटेस्ट न्यूज़: IPL 2025 शेड्यूल जल्दी आएगा!</p>';
    document.querySelector('.container').prepend(ticker);
});