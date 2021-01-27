//Required-s

const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');

let listarTabla = (base, limite) => {


    console.log('================'.green);
    console.log(`tabla de ${ base }`.red);
    console.log('================'.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`"${base}" no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${ i } = ${ base * i }\n`);
        }
        resolve(`${data}`);
    });
}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`"${ base }" no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            // += concatenar 
            data += (`${ base } x ${ i } = ${ base * i }\n`);
        }

        // .writeFile(nombre del archivo, contenido, error)
        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${limite}.txt`.green);

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

// MODULE forma 1
// module.exports = {
//     crearArchivo
// }



// MODULE forma 2
// module.exports.crearArchivo = (base) => 
//     ...
// }