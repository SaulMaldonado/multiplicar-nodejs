/////
const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Print the list to multiply', options)
    .command('crear', 'Crea la tabla de multiplicar', options)
    .help()
    .argv;

module.exports = {
    argv
}