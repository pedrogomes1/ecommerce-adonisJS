'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    
    //Resource cria as rotas padrão(get, post, put, delete automatico)
    Route.resource('categories', 'CategoryController').apiOnly()
    Route.resource('products', 'ProductController').apiOnly()
    Route.resource('coupons', 'CouponController').apiOnly()
    Route.resource('order', 'OrderController').apiOnly()
    Route.resource('image', 'ImageController').apiOnly()
    Route.resource('user', 'UserController').apiOnly()


}).prefix('v1/admin').namespace('Admin')