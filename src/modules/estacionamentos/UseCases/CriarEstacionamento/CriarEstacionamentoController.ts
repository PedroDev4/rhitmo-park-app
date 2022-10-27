import { Request, Response } from "express";
import { container } from "tsyringe";

import { CriarEstacionamentoUseCase } from "./CriarEstacionamentoUseCase";

class CriarEstacionamentoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, nome, vagas } = request.body;

        const criarEstacionamentoUseCase = container.resolve(CriarEstacionamentoUseCase);

        await criarEstacionamentoUseCase.execute({
            id, nome, vagas
        });

        return response.status(201).send();
    }
}

export { CriarEstacionamentoController };