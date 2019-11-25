'use strict'

/*
|--------------------------------------------------------------------------
| ClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Role = use ('Role')
const User = use ('App/Models/User')

class ClientSeeder {
  async run () {

    const role = await Role.findBy('slug', 'client') //Busca o valor cliente dentro do Slug
    const clients = await Factory.model('App/Models/User').createMany(30) //Busco lá do factory.js o App/Models/User
    
//Associar todos esses clients à role(cargo)
    await Promise.all(clients.map (async client => { //Percorro os clients pegando cada um dos itens dela e passando pro client
      await client.roles().attach( [ role.id] )
    }))

    const user = await User.create({
      name: 'Pedro',
      surname: 'Gomes',
      email: 'pedro@hotmail.com',
      password: '123'
    })

    const admin = await Role.findBy('slug', 'admin')
    await user.roles().attach ( [ role.id] )
  }
}

module.exports = ClientSeeder
