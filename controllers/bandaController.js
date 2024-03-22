const db = require('../db/index')

const bandaController = {
    index:function(req,res){
        listaNombres = []
        for (let i = 0; i < db.lista.length; i++) {
            let nombre = db.lista[i];
            listaNombres.push(nombre)
        }
    
        return res.send(listaNombres)
    },
    show:function(req,res){
        let id = req.params.id;
        let datos = db.lista[id]
        if (id<db.lista.length){
            return res.send("Mi nombre es "+ datos.nombre + "y soy "+ datos.profesion)
        }
        else{
            return res.send('No encontramos al científico indicado. Por favor, elija otro id');
        }
    }
}

module.exports = bandaController