const express = require('express')

module.exports = function(server) {

    // Rotas da API
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Tarefas
    const tarefaController = require('../controller/tarefa-controller')
    tarefaController.register(router, '/tarefas')
}