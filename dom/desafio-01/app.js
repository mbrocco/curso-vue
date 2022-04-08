
new Vue({
    el: '#desafio',
    data: {
        nome: 'Mauricio Vedana Brocco',
        idade: 36,
        linkImage: 'https://site.webcgi.com.br/wp-content/themes/webcgi/images/logo.png'
    },
    methods: {
        multiplicaIdade : function() {                
            return this.idade * 3
        },
        randomizarNumero : function(){
            return Math.random(0,1).toString()
        }
    }
})
