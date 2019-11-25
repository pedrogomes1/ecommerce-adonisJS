'use strict'

const Model = use('Model')

const Hash = use('Hash')

class User extends Model {
  static boot () { //Esse método é chamado quando a Model é instanciado
    super.boot()

    
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) { //Verifica se a senha do usuário foi alterada
        userInstance.password = await Hash.make(userInstance.password) //Se for, ele gera um hash que não é pra salvar essa senha em texto plano no banco
      }
    })
  }


  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  image() {
    return this.belongsTo('App/Models/Image')
  }

  coupons() { //ToMany é relacionamento N pra N
    return this.belongsToMany('App/Models/Coupon')
  }
}

module.exports = User
