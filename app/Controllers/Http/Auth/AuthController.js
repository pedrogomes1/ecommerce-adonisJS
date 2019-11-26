'use strict'

class AuthController {


    //o auth, o adonis automaticamente captura através do header
    async register ( {request, response} ) {

    }

    async login ( { request, response, auth }) {

    }

    //Atualizar o token caso ele expire

    async refresh( { request, response, auth }) {

    }

    async logout ( { request, response, auth }) {
    }


    //Enviar e-mail de recuperação de senha
    async forgot ( { request, response }) {

    }

    //Redefinição senha
    async remember ( { request, response } ) {

    }

    async reset ( { request, response }) {

    }

}

module.exports = AuthController
