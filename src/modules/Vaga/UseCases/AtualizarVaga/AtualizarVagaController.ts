import { Request, Response } from "express";
import { container } from "tsyringe";

import { AtualizarVagaUseCase } from "./AtualizarVagaUseCase";

class AtualizarVagasController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, tipoVaga,ocupada, estacionamentoId } = request.body;

        const atualizarVagasUseCase = container.resolve(AtualizarVagaUseCase);

        const retorno = await atualizarVagasUseCase.execute({id, tipoVaga, ocupada, estacionamentoId});

        return response.status(200).json(retorno);
    }
}

export { AtualizarVagasController };