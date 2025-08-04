const express = require('express');

const app = express();

const PORT = 8081;

app.listen(8081, ()=>{
    console.log(`Servidor de usuários rodando na porta ${PORT}`);
});
