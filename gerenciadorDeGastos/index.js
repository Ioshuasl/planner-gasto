import { Gerenciador } from "./gerenciadorGastos.js";

let gerenciador = new Gerenciador(2500)
console.log(gerenciador.valorRecebido)
console.log(gerenciador.novoGasto("academia",130))
console.log(gerenciador.novoGasto("faculdade",605))
gerenciador.criarGrupo("Cartão de crédito", 200)
//console.log(gerenciador.grupos[0].gasto("academia",130))
gerenciador.criarGastoGrupo("Cartão de crédito","sushi",40)
console.log(gerenciador.novoLucro(300))
console.log(gerenciador.valorRecebido)
console.log(gerenciador.mostrarRelatorioGastos())