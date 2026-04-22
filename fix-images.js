const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'components/team.jsx',
  'components/services.jsx',
  'components/Packages.jsx',
  'components/HeroSection.jsx',
  'components/Destinations.jsx',
  'components/customers.jsx',
  'pages/services.jsx',
  'pages/packages.jsx',
  'pages/gallery.jsx',
  'pages/destinations.jsx',
  'pages/about.jsx',
  'pages/admin/packages.jsx',
  'components/Footer.jsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Add import if not exists
  if (!content.includes("import { img } from")) {
    // find the last import and add it after
    const importMatch = content.match(/import.*?;?\n/g);
    if (importMatch) {
      const lastImport = importMatch[importMatch.length - 1];
      content = content.replace(lastImport, lastImport + `import { img } from '${file.startsWith('pages/admin') ? '../../' : file.startsWith('pages/') ? '../' : '../'}utils/basePath';\n`);
    } else {
      content = `import { img } from '${file.startsWith('pages/') ? '../' : '../'}utils/basePath';\n` + content;
    }
  }

  // Replace '/images/...' with img('/images/...')
  // specifically targeting strings in arrays or props
  content = content.replace(/(?<!img\()(['"]\/images\/[^'"]+['"])/g, 'img($1)');

  // For HeroSection.jsx, also check if there's a `<div style={{ backgroundImage: "url('/images/...')" }}>`
  // Actually, we replaced it using a regex that matches the string itself, so it covers objects, arrays, and inline strings.

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
