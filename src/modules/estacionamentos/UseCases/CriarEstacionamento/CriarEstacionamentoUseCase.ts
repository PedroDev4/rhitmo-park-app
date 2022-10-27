import { inject, injectable } from 'tsyringe';
import { IEstacionamentoRepository } from '../../Infra/repositories/interfaces/IEstacionamentoRepository'
import { Estacionamento } from '../../Models/Estacionamento';

@injectable()
class CriarEstacionamentoUseCase {

    constructor(
        @inject("EstacionamentoRepository")
        private estacionamentoRepository: IEstacionamentoRepository
    ){}

    async execute({ nome, vagas }: Estacionamento): Promise<void> {
        await this.estacionamentoRepository.create({
            id: null,
            nome,
            vagas
        });
    }

}

export { CriarEstacionamentoUseCase };