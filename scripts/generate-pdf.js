import puppeteer from 'puppeteer';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
    console.log('Lancement de Puppeteer...');
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // We need an absolute URL for puppeteer.
    // Assuming the dev server is running on localhost:5173 for image assets.
    // To make this fully self-contained without a live server, we'd base64 encode images,
    // but relying on the dev server is fine for a generation script.

    console.log('Chargement du template HTML...');
    const htmlPath = `file://${path.join(__dirname, 'catalog.html')}`;

    await page.goto(htmlPath, {
        waitUntil: 'networkidle0', // Wait until all resources (images) are loaded
    });

    console.log('Génération du PDF...');
    const pdfPath = path.join(__dirname, '..', 'public', 'AGI_Catalogue.pdf');

    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true, // Important to print colors and images
        margin: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        }
    });

    await browser.close();
    console.log(`✅ Catalogue généré avec succès : ${pdfPath}`);
}

generatePDF().catch(console.error);
