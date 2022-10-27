import { Request, Response } from "express";
import { container } from "tsyringe";

import { BuscarVagasUseCase } from "./BuscarVagasUseCase";

class BuscarVagasController {
    async handle(request: Request, response: Response): Promise<Response> {
        const buscarVagasUseCase = container.resolve(BuscarVagasUseCase);

        const retorno = await buscarVagasUseCase.execute();

        return response.status(200).json(retorno);
    }
}

export { BuscarVagasController };