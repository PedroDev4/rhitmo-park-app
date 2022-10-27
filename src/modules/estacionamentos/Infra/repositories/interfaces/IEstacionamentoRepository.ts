import { Estacionamento } from '../../../Models/Estacionamento';

interface IEstacionamentoRepository {
    create(estacionamento: Estacionamento): Promise<void>;
    findOne(estacionamentoId: string): Promise<Estacionamento>;
    findAll(): Promise<Estacionamento[]>;
    update(estacionaemntoId: string, estacionamento: Estacionamento): Promise<void>
    delete(estacionamentoId: string): Promise<void>;
}

export { IEstacionamentoRepository };