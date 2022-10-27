import { Router } from "express"
import { AtualizarVagasController } from "../modules/Vaga/UseCases/AtualizarVaga/AtualizarVagaController";
import { BuscarVagasController } from "../modules/Vaga/UseCases/BuscarVagas/BuscarVagasController";

const vagasRoutes = Router();

const buscarVagasController = new BuscarVagasController();
const atualizarVagasController = new AtualizarVagasController();

vagasRoutes.get("/", buscarVagasController.handle);
vagasRoutes.put("/atualizar", atualizarVagasController.handle);


export { vagasRoutes };