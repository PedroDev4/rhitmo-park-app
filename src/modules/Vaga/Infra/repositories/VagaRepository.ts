import { Vaga } from "../../Models/Vaga";
import { IVagaRepository } from "./interfaces/IVagaRepository";
import { prisma } from '../../../../../database/Core/DatabaseClient';

class VagaRepository implements IVagaRepository {

    async create({ tipoVaga, ocupada, estacionamentoId}: Vaga): Promise<void> {
        await prisma.vaga.create({
            data: {
                tipoVaga,
                ocupada,
                estacionamentoId,
            }
        });
    }

    async findAll(tipoVaga?: string): Promise<Vaga[]> {
        let vagasBuscadas: Vaga[] = [];

        if(tipoVaga) {
            vagasBuscadas = await prisma.vaga.findMany({
                where: { tipoVaga }
            });
        }
        else {
            vagasBuscadas = await prisma.vaga.findMany();
        }

        return vagasBuscadas;
    }

    async update({ id, tipoVaga, ocupada, estacionamentoId }: Vaga): Promise<void> {
        await prisma.vaga.update({
            where: {
                id
            },
            data: {
                tipoVaga,
                ocupada,
                estacionamentoId
            }
        });
    }

    async delete(vagaId: string): Promise<void> {
        await prisma.vaga.delete({
            where: { id: vagaId }
        })
    }
}

export { VagaRepository };