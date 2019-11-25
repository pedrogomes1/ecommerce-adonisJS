'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use ('Env') //Importa o arquivo .env no principal

class Image extends Model {

    static get computed() {
        return ['url'] //Essa url é do getURL
    }

    getUrl( { path }) {
        return `${Env.get('APP_URL')}/images/${ path }`
    }
}

module.exports = Image
