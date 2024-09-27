import { GrupoGastos } from "./grupoGastos.js";

export class Gerenciador{
    constructor(valorRecebido){
        this.valorRecebido = valorRecebido;
        this.relatorioGasto = []
        this.grupos = []
        this.valorSobra = valorRecebido
    }

    novoGasto(nome,valorGasto){
        const gasto = {
            nome: nome,
            valor: valorGasto
        }
        this.valorSobra = this.valorSobra - valorGasto
        this.relatorioGasto.push(gasto)
        return gasto
    }

    mostrarRelatorioGastos(){
        const relatorio = this.relatorioGasto.forEach((gasto) => {
            console.log("Motivo do gasto:",gasto.nome)
            console.log("Valor gasto:",gasto.valor)
            console.log("================================================================")
        })

        return relatorio,this.valorSobra
    }

    criarGrupo(titulo, valorDisponível){
        const grupo = new GrupoGastos(titulo, valorDisponível)
        this.grupos.push(grupo)
        return {message: "Adicionado novo grupo",grupo}
    }

    criarGastoGrupo(titulo,nome,valor){
        let indexGrupo = this.grupos.findIndex(grupo => grupo.titulo = titulo)

        const gasto = this.grupos[indexGrupo].gasto(nome,valor)

        this.valorSobra = this.valorSobra - valor
        this.relatorioGasto.push(gasto)

        return gasto
    }

    mostrarGrupos(){
        return this.grupos.forEach((grupo,index) => {
            console.log("Nome do grupo:",grupo.titulo)
            console.log("Índce:",index)
            console.log("Valor disponível:",grupo.valorDisponível)
            console.log("================================================================") 
        })
    }

    novoLucro(valor){
        const lucro = valor

        this.valorRecebido = this.valorRecebido + lucro
        this.valorSobra = this.valorSobra + lucro

        return lucro
    }    
}