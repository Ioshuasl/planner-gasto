import { Gasto } from "./gasto.js"

export class GrupoGastos {
    constructor(titulo, valorDisponível){
        this.titulo = titulo
        this.valorDisponível = valorDisponível
        this.gastosGrupo = []
        this.ValorSobra = valorDisponível
    }

    newGasto(nome,valor,classificacao){
        const gasto = new Gasto(nome,valor,classificacao)
        this.ValorSobra = this.ValorSobra - valor
        this.gastosGrupo.push(gasto)
        return gasto
    }

    relatorioGastoGrupo(){
        return this.gastosGrupo
    }
}