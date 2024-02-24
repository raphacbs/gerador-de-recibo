const path = require('path');
const url = require('url');

function getUrlPage(dirPage){
    const projectRoot = process.cwd();
    const pageURL = url.format({
        pathname: path.join(projectRoot, 'src', 'pages', dirPage, 'index.html'),
        protocol: 'file:',
        slashes: true
    });

    return pageURL;
}

module.exports = {getUrlPage}