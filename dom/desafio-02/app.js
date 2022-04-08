new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Exibir alerta')
        },
        guardaValor(valorDigitado){
            this.valor = valorDigitado.target.value
        }
    }
})