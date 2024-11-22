import Gasto from "../Models/gastoModel.js";
import CategoriaGasto from "../Models/categoriaGastoModel.js";
import Orcamento from "../Models/orcamentoModel.js";

//gasto: nomeGasto, descricaoGasto, categoriaGasto_id
//categoriaGasto: nomeCategoriaGasto
//orcamento: tituloOrcamento, valorMetaOrcamento, valorAtualOrcamento 
class Controller{

    //criar gasto
    async createGasto(nomeGasto,descricaoGasto,categoriaGasto_id){

        const hoje = new Date()
        const dataGasto = new Date(`${(hoje.getFullYear())}-${hoje.getMonth() + 1}-${hoje.getDate()}`)
        
        const gasto = await Gasto.create(nomeGasto,descricaoGasto,categoriaGasto_id,dataGasto)
        return {message: "gasto criado com sucesso",gasto}
    }
    //visualizar gastos
    async findAllGastos(){
        const gastos = await Gasto.findAll()
        return gastos
    }

    //visualizar gastos com determinada categoria
    async findGastosByCategoriaId(categoriaGasto_id){
        const gastos = await Gasto.findAll({
            where:{categoriaGasto_id}
        })
        return gastos
    }

    //atualizar gasto


    //excluir gasto
    async deleteGasto(id){
        const gasto = await Gasto.destroy({where: {id}})
        return {message: "gasto excluído com sucesso", gasto}
    }
    
    //criar CategoriaGasto
    async createGastoCategoria(nomeCategoriaGasto){
        const categoriaGasto = await CategoriaGasto.create(nomeCategoriaGasto)
        return {message:"Categoria de gasto criado com sucesso", categoriaGasto}
    }

    //visualizar CategoriaGasto
    async findAllCategoriaGastos(){
        const categoriaGastos = await CategoriaGasto.findAll()
        return categoriaGastos
    }

    //atualizar CategoriaGasto


    //excluir CategoriaGasto
    async deleteCategoriaGasto(id){
        const categoriaGasto = await CategoriaGasto.destroy({where:{id}})
        return {message:"Categoria de gasto foi excluído com sucesso",categoriaGasto}
    }
    
    //criar Orcamento
    async createOrcamento(tituloOrcamento,valorMetaOrcamento,valorAtualOrcamento){
        const orcamento = await Orcamento.create(tituloOrcamento,valorMetaOrcamento,valorAtualOrcamento)
        return {message:"Orçamento criado com sucesso", orcamento}
    }

    //visualizar Orcamento
    async findAllOrcamentos(){
        const orcamentos = await Orcamento.findAll()
        return orcamentos
    }

    //atualizar Orcamento


    //excluir Orcamento
    async deleteOrcamento(id){
        const orcamento = await Orcamento.destroy({where:{id}})
        return {message:"Orçamento excluído com sucesso", orcamento}
    }
}

export default new Controller()