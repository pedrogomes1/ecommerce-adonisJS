'use strict'

/*
|--------------------------------------------------------------------------
| CategoryAndProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CategoryAndProductSeeder {
  async run() {
    //Criar 10 categorias
    const categories = await Factory.model('App/Models/Category').createMany(10) //Pega lá do factory.js

    await Promise.all(
      //Percorre a lista com as 10 categorias, passando elas para a função category
      categories.map(async category => {
        //Essa função cria 5 produtos para cada uma das categorias
        const products = await Factory.model('App/Models/Product').createMany(5)

        //Associação dos produtos com a categoria
        await Promise.all(
          //Percorre a lista desses 5 produtos
          products.map(async product => {
            //Associa esses 5 produtos à cada categoria
            await product.categories().attach([category.id])
          })
        )
      })
    )
  }
}

module.exports = CategoryAndProductSeeder
