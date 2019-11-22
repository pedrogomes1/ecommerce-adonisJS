'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryProductSchema extends Schema {
  up () {
    this.create('category_product', (table) => {
      table.increments()
      table.integer('product_id').unsigned()
      table.integer('category_id').unsigned()
      table
      .foreign('product_id')
      .references('id')
      .inTable('products')
      .onDelete('CASCADE')
      
      table
      .foreign('category')
      .references('id')
      .inTable('category')
      .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('category_products')
  }
}

module.exports = CategoryProductSchema
