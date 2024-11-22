import { Gasto } from "./gasto.js";
import { GrupoGastos } from "./grupoGastos.js";

let grupos = []

let gasto1 = new Gasto("aaaaa",200,null)
console.log(gasto1)
let grupo = new GrupoGastos("cartao nubank",1000)
grupos.push(grupo)
console.log(grupo)
console.log(grupos)

let indexGrupo = grupos.findIndex(grupo => grupo.titulo = "cartao nubank")
console.log(indexGrupo)
let gasto2 = grupos[0].newGasto("aaaa",200,"cartao nubank")
console.log(gasto2)
console.log(grupos[0])
