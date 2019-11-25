'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PasswordResetSchema extends Schema {
  up () {
    this.create('password_reset', (table) => {
      table.increments()
      table.string('email', 254).notNullable()
      table.string('token').notNullable().unique //token tem que ser unico

      table.dateTime('expires_at') //Tempo de expiração
      table.timestamps()

      table
      .foreign('email')
      .references('email')
      .inTable('users')
      .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('password_reset')
  }
}

module.exports = PasswordResetSchema
