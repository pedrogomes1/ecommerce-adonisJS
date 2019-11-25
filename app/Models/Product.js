'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    //Relacionar com uma unica imagem

    image(){
        return this.belongsTo('App/Models/Image')
    }

    //Relacionamento entre produto e imagens (galeria de imagens do produto)

    images(){
        return this.belongsToMany('App/Models/Image') //N para N
    }

    //Relacionamento entre produtos e categorias

    categories(){
        return this.belongsToMany('App/Models/Category') //Mesmo da category.js
    }

    //Relacionamento entre produtos e cupons de desconto

    coupons(){
        return this.belongsToMany('App/Models/Coupon')
    }
}

module.exports = Product
