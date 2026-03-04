import fs from 'fs';
import https from 'https';

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return download(response.headers.location, dest).then(resolve).catch(reject);
            }
            if (response.statusCode !== 200) {
                return reject(new Error(`Status: ${response.statusCode} on ${url}`));
            }
            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', () => { file.close(resolve); });
        }).on('error', reject);
    });
};

Promise.all([
    download('https://upload.wikimedia.org/wikipedia/commons/8/8f/Caterpillar_logo.svg', 'public/brands/cat.svg'),
    download('https://upload.wikimedia.org/wikipedia/commons/b/b3/Komatsu_Logo.svg', 'public/brands/komatsu.svg'),
    download('https://upload.wikimedia.org/wikipedia/commons/5/52/Hitachi_logo.svg', 'public/brands/hitachi.svg'),
    download('https://upload.wikimedia.org/wikipedia/commons/1/1b/Volvo_logo_1.svg', 'public/brands/volvo.svg'),
    download('https://upload.wikimedia.org/wikipedia/commons/f/fb/Doosan_logo.svg', 'public/brands/doosan.svg')
]).then(() => console.log('✅ Logos downloaded successfully')).catch(console.error);
