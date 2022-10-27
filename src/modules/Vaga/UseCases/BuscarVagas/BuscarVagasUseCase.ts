import { inject, injectable } from "tsyringe";
import { RelatorioVagasDto } from "../../../DTOs/RelatorioVagasDTO";
import { IVagaRepository } from "../../Infra/repositories/interfaces/IVagaRepository";

@injectable()
class BuscarVagasUseCase {

    constructor(
        @inject("VagaRepository")
        private vagaRepository: IVagaRepository
    ){}

    async execute(): Promise<RelatorioVagasDto> {
        const vagas = await this.vagaRepository.findAll();

        const vagasRestantes = vagas.filter(vagas => vagas.ocupada === false).length;
        const vagasTotais = vagas.length;
        const estacionamentoCheio = vagasRestantes === 0 ? true : false;
        const estacionamentoVazio = vagasRestantes === vagasTotais ? true : false;

        const vagasMotosDisponiveis = vagas.filter(vagas => vagas.tipoVaga === 'moto' && vagas.ocupada === false).length
        const vagasCarrosDisponiveis = vagas.filter(vagas => vagas.tipoVaga === 'carro' && vagas.ocupada === false).length;
        const vagasGrandesDisponiveis = vagas.filter(vagas => vagas.tipoVaga === 'grande' && vagas.ocupada === false).length;

        const retorno: RelatorioVagasDto = 
        {
            VagasTotais: vagasTotais,
            VagasRestantes: vagasRestantes,
            EstacionamentoCheio: estacionamentoCheio,
            EstacionamentoVazio: estacionamentoVazio,
            VagasPorVeiculo: {
                VagasMotosDisponiveis: vagasMotosDisponiveis,
                VagasCarrosDisponiveis: vagasCarrosDisponiveis,
                vagasGrandesDisponiveis: vagasGrandesDisponiveis
            }
        }

        return retorno
    }

}

export { BuscarVagasUseCase };