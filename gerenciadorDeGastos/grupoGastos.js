export class GrupoGastos {
    constructor(titulo, valorDisponível){
        this.titulo = titulo
        this.valorDisponível = valorDisponível
        this.gastosGrupo = []
        this.ValorSobra = valorDisponível
    }

    gasto(nome,valor){
        const gasto = {
            nome: nome,
            valor: valor
        }
        this.ValorSobra = this.ValorSobra - valor
        this.gastosGrupo.push(gasto)
        return gasto
    }

    relatorioGastoGrupo(){
        console.log(`Relatório dos gastos do grupo`,this.titulo)
        console.log("================================================================")
        this.gastosGrupo.forEach((gasto,index) =>{
            console.log("Motivo do gasto:",gasto.nome)
            console.log("Índice:",index)
            console.log("Valor gasto:",gasto.valor)
            console.log("================================================================")
        })
    }
}