import { Router } from "express";

import { vagasRoutes } from "./http/vagas.routes";
import { estacionamentoRouter } from "./http/estacionamento.routes";

const router = Router();

router.use("/vagas", vagasRoutes);
router.use("/estacionamentos", estacionamentoRouter);

export { router } ;