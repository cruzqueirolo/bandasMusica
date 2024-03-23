const db = require('../db/index')

const bandaController = {
    listaBandas:function(req,res){
        return res.render("listadoBandas",{
            index:db.lista
        })
    },
    id: function (req, res) {
        let id = req.params.id 
        let datos = db.lista[id]
        if (id < db.lista.length) { 
            return res.send("La banda con este id es " + datos.nombre)
        }
        else{
            return res.send("No encontramos a la banda indicada. Por favor, elija otro id");
        }
    },
    genero: function (req, res) {
        let bandas_con_genero = [];
        let genero = req.params.genero;
        for (let i = 0; i < db.lista.length; i++) {
            let generoEnLista = db.lista[i].genero;
            if (genero.toLowerCase() === generoEnLista.toLowerCase()) {
                bandas_con_genero.push(db.lista[i].nombre);
            }
        }
        return res.send("Las bandas con este género son " + bandas_con_genero);
    } 
}

module.exports = bandaController