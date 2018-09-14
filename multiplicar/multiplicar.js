const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limit) => {
    console.log('========================='.green);
    console.log(`Tabla del ${ base }`.red);
    console.log('========================='.green);
    for (let i = 1; i <= limit; i++) {
        console.log(`${ base } * ${ i} = ${ base * i }`);
    }
}



let crearArchivo = (base, limit) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("no es un numero");
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
            //console.log(`The file tabla-${ base }.txt has been saved!`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
};