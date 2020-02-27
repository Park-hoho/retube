const express = require('express'); //node_modules 에서 Import
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`)
}

app.listen(PORT, handleListening); //4000포트 연결