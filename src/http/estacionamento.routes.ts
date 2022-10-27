import { Router } from "express"
import { CriarEstacionamentoController } from "../modules/estacionamentos/UseCases/CriarEstacionamento/CriarEstacionamentoController";

const estacionamentoRouter = Router();

const criarEstacionamentoController = new CriarEstacionamentoController();

estacionamentoRouter.post("/", criarEstacionamentoController.handle);

export { estacionamentoRouter };