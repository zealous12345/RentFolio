const fs = require('fs');
const https = require('https');
const path = require('path');

const baseUrl = 'https://retiva.vercel.app/assets/';
const images = [
    'hero.webp',
    'about.webp',
    'services_hero_bg.webp',
    'footer_retiva.webp',
    'retiva_bg.webp',
    'contact_hero_bg.webp'
];

const targetDir = path.join(__dirname, 'FRONTEND', 'public', 'assets');

// Ensure directory exists
if (!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir, { recursive: true });
}

images.forEach(img => {
    const url = baseUrl + img;
    const dest = path.join(targetDir, img);
    const file = fs.createWriteStream(dest);

    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${img}`);
        });
    }).on('error', (err) => {
        fs.unlink(dest, () => {});
        console.error(`Error downloading ${img}: ${err.message}`);
    });
});
