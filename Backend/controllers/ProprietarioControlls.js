const express = require('express');
const router = express.Router();
//Importando o módulo do proprietario
const Proprietario = require('../models/Proprietario');
//Buscar Proprietario (GET)
router.get('/', async (req, res) => {
    const proprietarios = await Proprietario.findAll();
    res.status(200).json(proprietarios);
});
//Cadastra Proprietario (POST)
router.post('/', async (req, res) => {
    const { nome } = req.body;
    const { cpf } = req.body;
    const newEdit = await Proprietario.create({nome, cpf});
    res.status(201).json({ message: 'Cadastrado com sucesso'});
});
//Busca por ID a proprietario (GET)
router.get('/:id', async (req, res) => {
    // const id = req.params.;
    const proprietario = await Proprietario.findByPk(req.params.id);
    res.status(200).json(proprietario);
});
//Deleta Proprietario por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Proprietario.destroy({
        where: {
            id_proprietario: req.params.id,
        },
    });
    res.status(200).json({ message: 'Deletado com sucesso'});
});

//Altera proprietario por ID (PUT)
router.put('/:id', async (req, res) => {
    const { nome } = req.body;
    const { cpf } = req.body;	
    await Proprietario.update(
        { nome, cpf },
        {
            where: {
                id_proprietario: req.params.id,
            },
        },	
    );
    res.status(200).json({ message: 'Atualizado com sucesso'});
});

module.exports = router;