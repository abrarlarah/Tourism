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

  // Replace src=img("...") with src={img("...")}
  content = content.replace(/src=(img\(['"][^'"]+['"]\))/g, 'src={$1}');
  
  // Replace backgroundImage: url(img("...")) which might be wrong too
  // Let's check if there are any backgroundImage=img(...)
  content = content.replace(/backgroundImage:\s*url\(img\((['"][^'"]+['"])\)\)/g, 'backgroundImage: `url(${img($1)})`');


  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
