import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const imagesToOptimize = [
    'diverse-business-team.jpg',
    'diverse-meeting.jpg',
    'about-team.jpg',
    'cyber-diverse-team.jpg',
    'cyber-security-team.jpg',
    'diverse-approach.jpg',
    'about-story.jpg'
];

const publicImagesDir = '/Users/loktioncode/Desktop/stratos/public/images';

async function optimizeImages() {
    for (const imageName of imagesToOptimize) {
        const inputPath = path.join(publicImagesDir, imageName);
        const outputPath = path.join(publicImagesDir, imageName.replace('.jpg', '.webp'));

        try {
            console.log(`Optimizing ${imageName}...`);
            await sharp(inputPath)
                .resize(1920, null, { withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(outputPath);

            const stats = await fs.stat(outputPath);
            console.log(`Created ${path.basename(outputPath)} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
        } catch (error) {
            console.error(`Error optimizing ${imageName}:`, error);
        }
    }
}

optimizeImages();
