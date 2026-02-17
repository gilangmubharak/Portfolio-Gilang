const fs = require('fs');
const path = require('path');

// Fix for @vercel/analytics with Webpack 4 (react-scripts 4.x)
// Webpack 4 doesn't fully support package.json "exports" field
const analyticsPath = path.join(__dirname, '..', 'node_modules', '@vercel', 'analytics', 'dist', 'react');

if (fs.existsSync(analyticsPath)) {
  const packageJsonPath = path.join(analyticsPath, 'package.json');
  const packageJsonContent = {
    main: './index.js',
    types: './index.d.ts'
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonContent, null, 2));
  console.log('✓ Created package.json for @vercel/analytics/react compatibility');
}
