import { Estacionamento } from "../../Models/Estacionamento";
import { IEstacionamentoRepository } from "./interfaces/IEstacionamentoRepository";
import { prisma } from '../../../../../database/Core/DatabaseClient';

class EstacionamentoRepository implements IEstacionamentoRepository {

    async create(estacionamento: Estacionamento): Promise<void> {
        await prisma.estacionamento.create({
            data: {
                nome: estacionamento.nome,
                vagas: {
                    createMany: {
                        data: estacionamento.vagas
                    }
                }
            }
        });
    }

    async findOne(estacionamentoId: string): Promise<Estacionamento> {
        const estacionamento = await prisma.estacionamento.findUnique({
            where: { id: estacionamentoId },
            include: { vagas: true }
        });

        return estacionamento;
    }

    async findAll(): Promise<Estacionamento[]> {
        const estacionamentos = await prisma.estacionamento.findMany({
            include: { vagas: true}
        });
        
        return estacionamentos;
    }

    async update(estacionaemntoId: string, estacionamento: Estacionamento): Promise<void> {
        await prisma.estacionamento.update({
            where: { id: estacionaemntoId },
            data: estacionamento
        });
    }
    
    async delete(estacionamentoId: string): Promise<void> {
        await prisma.estacionamento.delete({
            where: { id: estacionamentoId }
        });
    }
}

export { EstacionamentoRepository };