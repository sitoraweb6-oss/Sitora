import fs from 'fs';
import path from 'path';

const logosDir = path.join(process.cwd(), 'public', 'logos');

// Ensure directory exists
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// Read and filter image files
const files = fs.readdirSync(logosDir)
  .filter(file => /\.(png|jpe?g|webp|svg)$/i.test(file))
  .sort(); // Deterministic filename sort

// Map to Next.js / Vite public paths
const paths = files.map(file => `/logos/${file}`);

// Fallback logic for sandbox/initial state if no files exist yet
const fallbackFiles = [
  "/logos/Black Yellow Minimalist Optic Logo.webp",
  "/logos/Black and Orange Simple Chinese Restaurant Logo.webp",
  "/logos/Black and Yellow Taxi Company Logo.webp",
  "/logos/Blue Green.webp",
  "/logos/Blue and Black.webp",
  "/logos/Blue and White Modern Academy Logo.webp",
  "/logos/Brown.webp",
  "/logos/Brown Minimalist Fashion Brand Logo.webp",
  "/logos/Farm Logo.webp",
  "/logos/Gold and Green.webp",
  "/logos/Green Minimalist Real Estate Logo.webp",
  "/logos/Green and Black Modern Bold Car Center Brand Logo.webp",
  "/logos/Maroon andogo.webp",
  "/logos/Navy and .webp",
  "/logos/Navy and Red Modern University Logo.webp",
  "/logos/Placeholder 16.webp",
  "/logos/Placeholder 17.webp",
  "/logos/Placeholder 18.webp",
  "/logos/Placeholder 19.webp",
  "/logos/Placeholder 20.webp",
  "/logos/Placeholder 21.webp"
];

const finalPaths = paths.length > 0 ? paths : fallbackFiles;

// Write manifest
fs.writeFileSync(
  path.join(process.cwd(), 'src', 'logoManifest.json'),
  JSON.stringify(finalPaths, null, 2)
);

console.log(`Generated logo manifest with ${finalPaths.length} logos.`);
