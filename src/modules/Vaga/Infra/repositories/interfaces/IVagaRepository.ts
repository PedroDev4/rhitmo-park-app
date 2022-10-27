import { Vaga } from '../../../Models/Vaga';

interface IVagaRepository {
    create({ tipoVaga, ocupada, estacionamentoId}: Vaga): Promise<void>;
    findAll(tipoVaga?: string): Promise<Vaga[]>;
    update({ id ,tipoVaga, ocupada , estacionamentoId }: Vaga): Promise<void>
    delete(vagaId: string): Promise<void>;
}

export { IVagaRepository };