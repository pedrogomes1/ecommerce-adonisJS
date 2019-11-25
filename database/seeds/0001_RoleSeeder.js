'use strict'

const Role = use ('Role') //Não preciso colocar o caminho pois no app.js dentro do aliases, foi definido já o caminho dos roles

//Uma Role é um model ..  https://www.npmjs.com/package/adonis-acl (Working With Roles) .. e ela tem 3 propriedades .. name, slug description

class RoleSeeder {
  async run () {

    //Cria o adm
    await Role.create({
      name: 'Admin',
      slug: 'admin',
      description: 'Administrador do sistema!'
    })

    //Cria o cargo do gerente
    await Role.create({
      name: 'Manager',
      slug: 'manager',
      description: 'Gerente da loja!'
    })

    await Role.create({
      name: 'Client',
      slug: 'client',
      description: 'Cliente da loja'
    })
  }
}

module.exports = RoleSeeder
