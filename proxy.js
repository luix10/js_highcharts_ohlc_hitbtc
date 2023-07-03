const http = require('http');
const request = require('request');
const cors = require('cors');
const express = require('express');

const app = express();

// Configurar as opções do CORS
const corsOptions = {
  origin: '*', // Permitir solicitações de qualquer origem
  methods: 'GET', // Permitir apenas o método GET
};

// Habilitar o CORS nas rotas do servidor
app.use(cors(corsOptions));

// Definir rota de proxy
app.get('*', (req, res) => {
  console.log(`${req.url}`);
  
  //const url = `https://api.hitbtc.com/api/3/public/candles/${req.params[0]}${req.url.slice(req.url.indexOf('?'))}`;
  const url = 'https://api.hitbtc.com'.concat(req.url);
  
  req.pipe(request(url)).pipe(res);
});

const proxy = http.createServer(app);

proxy.listen(8081, () => {
  console.log('Servidor proxy rodando na porta 8081');
});
