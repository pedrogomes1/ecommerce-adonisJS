'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

    Route.post('register', 'AuthController.register').as('auth.register') //As atribui à rota um nome exclusivo:
    Route.post('login', 'AuthController.login').as('auth.login')
    Route.post('refresh', 'AuthController.refresh').as('auth.refresh')
    Route.post('logout', 'AuthController.logout').as('auth.logout')

    //Restore password routes

    Route.post('reset-password', 'AuthController.forgot').as('auth.forgot')
    Route.get('reset-password', 'AuthController.remember').as('auth.remember')
    Route.put('reset-password', 'AuthController.reset').as('auth.reset')

})
  .prefix('v1/auth') //V1 é versionamento, se eu precisar melhorar dps posso pedir p usuario a versão q ele ta usando
  .namespace('Auth')