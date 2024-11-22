import { Gerenciador } from "./gerenciadorGastos.js";

let gerenciador = new Gerenciador(2500)
console.log(gerenciador.valorRecebido)
console.log(gerenciador.novoGasto("aaaa",200,null))
gerenciador.criarGrupo("cartao nubank",1000)
console.log(gerenciador.novoGasto("bbbbbb",200,"cartao nubank"))
console.log(gerenciador.grupos[0])
