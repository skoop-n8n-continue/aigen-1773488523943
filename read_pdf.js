const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('/tmp/agent_workspace/4ed79eeb-dfd0-4b2d-89a5-7fd67bfac307/.agent_uploads/testpdf.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error){
    console.error(error);
});