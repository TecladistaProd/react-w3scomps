const path = require('path')
const fs = require('fs')

fs.copyFileSync(path.resolve(__dirname, 'dist', 'src', 'index.d.ts'), path.resolve(__dirname, 'dist', 'react-w3scomps.d.ts'))

fs.unlinkSync(path.resolve(__dirname, 'dist', 'src', 'index.d.ts'))