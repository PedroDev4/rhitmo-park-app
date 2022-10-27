import { inject, injectable } from "tsyringe";
import { IVagaRepository } from "../../Infra/repositories/interfaces/IVagaRepository";
import { Vaga } from "../../Models/Vaga";


@injectable()
class CriarVagaUseCase {

    constructor(
        @inject("VagaRepository")
        private vagaRepository: IVagaRepository
    ){}

    async execute(vaga: Vaga): Promise<void> {
        await this.vagaRepository.create(vaga);
    }

}

export { CriarVagaUseCase };