import { GrupoGastos } from "./grupoGastos.js";
import { Gasto } from "./gasto.js";

export class Gerenciador{
    constructor(valorRecebido){
        this.valorRecebido = valorRecebido;
        this.relatorioGasto = []
        this.grupos = []
        this.valorSobra = valorRecebido
    }

    novoGasto(nome,valorGasto,classificacao){
        if (classificacao === null) {
            const gasto = new Gasto(nome,valorGasto,null)
            return gasto
        } else {
            let indexGrupo = this.grupos.findIndex(grupo => grupo.titulo === classificacao)
            const gasto = this.grupos[indexGrupo].newGasto(nome,valorGasto,classificacao)
            return gasto
        }
    }

    mostrarRelatorioGastos(){
        return this.relatorioGasto
    }

    criarGrupo(titulo, valorDisponível){
        const grupo = new GrupoGastos(titulo, valorDisponível)
        this.grupos.push(grupo)
        return {message: "Adicionado novo grupo",grupo}
    }

    mostrarGrupos(){
        return this.grupos
    }

    novoLucro(valor){
        const lucro = valor

        this.valorRecebido = this.valorRecebido + lucro
        this.valorSobra = this.valorSobra + lucro

        return lucro
    }    
}