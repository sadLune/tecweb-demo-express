const Tarefa = require('../model/tarefa')

// Node RESTful já cria a API com todos os métodos declarados
Tarefa.methods(['get', 'post', 'put', 'delete'])
// Configurações para que, ao fazer um put, seja retornado o objeto atualizado e roda as validações
Tarefa.updateOptions({new: true, runValidators: true})

module.exports = Tarefa