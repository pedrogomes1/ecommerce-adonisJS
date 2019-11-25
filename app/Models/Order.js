'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

    static boot() {
        super.boot()

        //AfterFind buscar um unico item da base de dados
        this.addHook('afterFind', 'OrderHook.updateValues'); //Chamando método updateValues dentro do models/hooks
        this.addHook('afterPaginate', 'OrderHook.updateCollectionValues');
    }

    
    items(){
        return this.hasMany('App/Models/OrderItem') //Order pode ter mais que um item
    }

    //Se precisar consultar quais cupons estão relacionados aos pedidos
    coupons(){
        return this.belongsToMany('App/Models/Coupon')
    }

    discounts(){
        return this.hasMany('App/Models/Discount')
    }

    user(){
        return this.belongsTo('App/Models/User', 'user_id', 'id')
    }
}

module.exports = Order
