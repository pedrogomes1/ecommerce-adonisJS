'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PasswordReset extends Model {

    static boot(){
        super.boot()

        this.addHook('beforeCreate', async model => { //Antes de criar no BD
            model.token = await str_random(25) //Gera uma string randomica e atribui a propriedade token(que vem da migration, da tabela passwordReset)
        
            //Controlar quando o token expirou ou não
            const expires_at = new Date() //Pega hora atual
            expires_at.setMinutes(expires_at.getMinutes() + 30)

            model.expires_at = expires_at //O model.expires_at que vem do banco é um token que vai ser expirado à partir de 30 minutos
        })
    }

    //Formatando os campos do tipo data, pois o JS interpreta a data como um numero inteiro de millisegundos
    // o ORM do adonis procura os get antes de inserir no BD e exibir pro usuario
    static get dates() {
        return ['created_at', 'updated_at', 'expires_at']
    }
}

module.exports = PasswordReset
