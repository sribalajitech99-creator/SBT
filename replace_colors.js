const fs = require('fs');
const path = require('path');

function replaceColors(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            replaceColors(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content.replace(/#009CD7/gi, '#4169E1');
            newContent = newContent.replace(/#7BC1E8/gi, '#4169E1');
            newContent = newContent.replace(/#7ab8e1/gi, '#4169E1');
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated colors in ${fullPath}`);
            }
        }
    }
}

replaceColors('./src');
console.log("Colors replaced!");
