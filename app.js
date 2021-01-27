const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

/* argv._  (._ se utiliza para hacer referencia al arreglo) */
let comando = argv._[0];

switch (comando) {

    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(resultado => console.log(resultado))
            .catch(e => console.log(e));
        break;

    case 'crear':
        //console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//let argv2 = process.argv;

// console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(base);