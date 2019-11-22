'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponSchema extends Schema {
  up () {
    this.create('coupons', (table) => {
      table.increments()
      table.string('code',100).notNullable()
      table.dateTime('valid_form')
      table.dateTime('valid_until')
      table.integer('quantity').defaultTo(1) //qtd de vezes que o cupom vai ser usado pelo cliente
      table.enu('can_use_for', ['product'], ['client'], ['product_client', 'all']) //O cupom só pode ser aplicado a derterminado produto, ou det cliente ou 
      table.enu('type', ['free', 'percent', 'currency']).defaultTo('currency') //Tipos dos descontos ... Padrão (defaultTo) é currency, valor fixo
      table.boolean('recursive').defaultTo(false) //Serve para não ser aplicado dois cupons diferente na mesma compra
      table.timestamps()
    })
  }

  down () {
    this.drop('coupons')
  }
}

module.exports = CouponSchema
