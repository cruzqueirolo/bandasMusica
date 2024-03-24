const db = require('../db/index')

const bandaController = {
    listaBandas:function(req,res){
        return res.render("listadoBandas",{
            index:db.lista
        })
    },
    id: function (req, res) {
        let id = req.params.id
        let detalleBanda = [] 
        for (let i = 0; i < db.lista.length; i++) {
            if (id == db.lista[i].id) {
                detalleBanda.push(db.lista[i]) 
            return res.render("detallesBanda",{
                index:detalleBanda
            })
        }
        else if(id>db.lista.length){
            return res.render("idNoValido",{
                mensaje:"No encontramos a la banda indicada. Por favor, elija otro id"})
        }
    }},
    genero: function (req, res) {
        let genero = req.params.genero;
        let bandasPorGenero = [];
        for (let i = 0; i < db.lista.length; i++) {
            if (db.lista[i].genero === genero) {
                bandasPorGenero.push(db.lista[i]);
            }
        }
        return res.render('listadoGeneros', { index: bandasPorGenero, genero: genero });
    }
    
}

module.exports = bandaController