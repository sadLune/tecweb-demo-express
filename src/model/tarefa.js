const restful = require('node-restful')
const mongoose = restful.mongoose

const tarefaSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now }
})

module.exports = restful.model('Tarefa', tarefaSchema)