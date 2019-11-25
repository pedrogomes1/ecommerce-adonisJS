'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {

    //Dizer pro adonis quais campos do tipo data
    static get dates(){
        return ['created_at', 'updated_at', 'valid_form', 'valid_until']
    }

    //Cupom relacionado ao usuário .. Coupon User
    users(){
        return this.belongsToMany('App/Models/User')
    }

    //Coupon Product    
    products(){
        return this.belongsToMany('App/Models/Product')
    }

    //Coupon order eu tenho o cupon_id e order_id
    orders(){
        return this.belongsToMany('App/Models/Order', 'order_id', 'id') //Armazeno no order_id o id que é a PK da order
    }

    coupon(){
        return this.belongsTo('App/Models/Coupon', 'coupon_id', 'id')
    }
}

module.exports = Coupon
