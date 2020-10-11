const express = require('express')

module.exports = (server) => {

    // Rotas da API
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Tarefas com MongoDB
    const tarefaController = require('../controller/tarefa-controller')
    tarefaController.register(router, '/tarefas')

    // Rotas de Usuários com MySQL
    const usuarioController = require('../controller/usuario-controller');
    router.post('/usuarios', usuarioController.insert);
    router.get('/usuarios', usuarioController.selectAllUsers);
}