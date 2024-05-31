const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
// protocolo de comunicação entre APIs e outros serviços cors
//CORS: autoriza para qualquer tipo de serviço (front-end, outras apis, etc...)

const cors = require('cors');
const app = express();
const port = 8081;
//importações
const proprietario = require('./controllers/ProprietarioControlls.js');
const veiculo = require('./controllers/VeiculoControlls.js');

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    message:'Você já fez  bastante requisição por hoje, não acha ?'
})
//rotas
app.use(bodyParser.json());
//função CORS para a autorização do uso da API
app.use(cors());
app.use(limiter);
app.get('/', (req, res) => res.send('Estou aqui'));
app.use('/proprietario', proprietario);
app.use('/veiculo', veiculo);
app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`))