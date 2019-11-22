'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageProductSchema extends Schema {
  up () {
    
  this.create('image_product', table => {
    table.increments()
    table.integer('image_id').unsigned()
    table.integer('product_id').unsigned()
    table
    .foreing('image_id')
    .references('id')
    .inTable('images')
    .onDelete('CASCADE')
    table
    .foreing('product_id')
    .references('id')
    .inTable('products')
    .onDelete('CASCADE')
  })
  }

  down () {
    this.drop('image_products')
  }
}

module.exports = ImageProductSchema
