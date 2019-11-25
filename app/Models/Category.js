'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

    //Relacionamento entre Categoria e Imagens de destaques
    //Nome do model que eu quero relacionar
    image(){
        return this.belongsTo('App/Models/Image')
    }

    //Relacionamento entre categoria e produto
    products(){
        return this.belongsToMany('App/Models/Product') //Uma categoria pode ter mais de um produto .. toMany
    }
}

module.exports = Category
