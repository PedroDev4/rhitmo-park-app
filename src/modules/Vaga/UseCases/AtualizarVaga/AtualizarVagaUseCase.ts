import { inject, injectable } from "tsyringe";
import { IVagaRepository } from "../../Infra/repositories/interfaces/IVagaRepository";
import { container } from "tsyringe";
import { Vaga } from "../../Models/Vaga";
import { BuscarVagasUseCase } from "../BuscarVagas/BuscarVagasUseCase";
import { RelatorioVagasDto } from "../../../DTOs/RelatorioVagasDTO";

@injectable()
class AtualizarVagaUseCase {

    constructor(
        @inject("VagaRepository")
        private vagaRepository: IVagaRepository
    ){}

    async execute({id ,tipoVaga, ocupada, estacionamentoId}: Vaga) {
        const buscarVagasUseCase = container.resolve(BuscarVagasUseCase);
        const vagasResumidas = await buscarVagasUseCase.execute();
        
        if(ocupada) {
            await this.ExecutarRegrasVagasCarros(vagasResumidas, { id, tipoVaga, ocupada, estacionamentoId });

            await this.ExecutarRegrasVagasMotos(vagasResumidas, { id, tipoVaga, ocupada, estacionamentoId });

            await this.ExecutarRegrasVagasGrandes(vagasResumidas, { id, tipoVaga, ocupada, estacionamentoId });
        }

        await this.vagaRepository.update({id, tipoVaga, ocupada, estacionamentoId});
    }

    private async ExecutarRegrasVagasGrandes(vagasResumidas: RelatorioVagasDto, {id, tipoVaga, ocupada, estacionamentoId}: Vaga) {

        if(ocupada && tipoVaga === 'grande' && vagasResumidas.VagasPorVeiculo.vagasGrandesDisponiveis > 0) {
            await this.vagaRepository.update({id, tipoVaga, ocupada, estacionamentoId});
        }
        else if (ocupada && tipoVaga === 'grande' && vagasResumidas.VagasPorVeiculo.VagasCarrosDisponiveis >= 3) {
            const vagasCarros = await this.vagaRepository.findAll('carro');
            
            for(let x = 0; x === 2; x++) {
                let vagaCarroParaAtualizar = vagasCarros[x];
                await this.vagaRepository.update({id: vagaCarroParaAtualizar.id, tipoVaga: 'carro', ocupada, estacionamentoId});
            }
        }
    }


    private async ExecutarRegrasVagasCarros(vagasResumidas: RelatorioVagasDto, {id, tipoVaga, ocupada, estacionamentoId}: Vaga) { 

        if(ocupada && tipoVaga === 'carro' && vagasResumidas.VagasPorVeiculo.VagasCarrosDisponiveis > 0) {
            await this.vagaRepository.update({id, tipoVaga, ocupada, estacionamentoId});
            
        } 
        else if (ocupada && tipoVaga === 'carro' && vagasResumidas.VagasPorVeiculo.vagasGrandesDisponiveis > 0) {
            let vagasGrandesArray = await this.vagaRepository.findAll('grande');
            var vagaGrandeObj = vagasGrandesArray.find(vaga => vaga.ocupada === false);

            await this.vagaRepository.update({id: vagaGrandeObj.id, tipoVaga: 'grande', ocupada, estacionamentoId});
        }

    }

    private async ExecutarRegrasVagasMotos(vagasResumidas: RelatorioVagasDto, {id, tipoVaga, ocupada, estacionamentoId}: Vaga) {

        if(ocupada && tipoVaga === 'moto' && vagasResumidas.VagasPorVeiculo.VagasMotosDisponiveis > 0) {
            await this.vagaRepository.update({id, tipoVaga, ocupada, estacionamentoId});
        }
        else if (ocupada && tipoVaga === 'moto' && vagasResumidas.VagasRestantes > 0) {
            let vagas = await this.vagaRepository.findAll();
            var vagaDisponivelObj = vagas.find(vaga => vaga.ocupada === false);

            await this.vagaRepository.update({id: vagaDisponivelObj.id, tipoVaga: 'moto', ocupada, estacionamentoId});
        }
    }

}

export { AtualizarVagaUseCase }