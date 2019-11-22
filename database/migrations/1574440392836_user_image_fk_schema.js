'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserImageFkSchema extends Schema {
  up () {
    this.table('users', (table) => {
      
      table.foreing('image_id').references('id').inTable('images').onDelete('CASCADE')
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UserImageFkSchema
