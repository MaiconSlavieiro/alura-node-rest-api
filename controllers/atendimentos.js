const Atendimento = require('../models/atendimentos');

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    res.json({
      message: 'Olá marilene'
    })
  })

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body;
    Atendimento.adiciona(atendimento);
    res.json(atendimento)
  })
}