'use strict'

const OrderHook = exports = module.exports = {}

//Atualizar o valor do pedido de acordo com os itens que eu to salvando
OrderHook.updateValues = async model => {
    model.$sideLoaded.subtotal = await model.items().getSum('subtotal') //O modelInstance.items é o relacionamento que criei dentro do order
    model.$sideLoaded.qty_items = await model.items().getSum('quantity') //Calcular quantos produtos que cada item do pedido tem
    model.$sideLoaded.discount = await model.discount().getSum('discount')
    //As propriedades acima são 'virtuais'

    //Como o total é um atributo da tabela ordem .. posso acessar direto .. n preciso criar um atr virtual
    model.total = model.$sideLoaded.subtotal - model.$sideLoaded.discount
}

OrderHook.updateCollectionValues = async models => {
    for (let model of models ) {
         model = await OrderHook.updateValues(model)
    }
}
