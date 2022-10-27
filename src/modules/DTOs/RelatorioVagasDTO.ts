interface RelatorioVagasDto {
    
    VagasTotais: number;
    VagasRestantes: number;
    EstacionamentoCheio: boolean,
    EstacionamentoVazio: boolean,
    VagasPorVeiculo: VagasPorVeiculo

}

interface VagasPorVeiculo {
    VagasMotosDisponiveis: number;
    VagasCarrosDisponiveis: number;
    vagasGrandesDisponiveis: number
}

export { RelatorioVagasDto };