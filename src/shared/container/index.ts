import { container } from "tsyringe";

import { VagaRepository } from "../../modules/Vaga/Infra/repositories/VagaRepository";
import { EstacionamentoRepository } from "../../modules/estacionamentos/Infra/repositories/EstacionamentoRepository";
import { IVagaRepository } from "../../modules/Vaga/Infra/repositories/interfaces/IVagaRepository";
import { IEstacionamentoRepository } from "../../modules/estacionamentos/Infra/repositories/interfaces/IEstacionamentoRepository";

// IVagaRepository -> Singleton
// IEstacionamentoRepository -> Singleton

container.registerSingleton<IVagaRepository>(
    "VagaRepository",
    VagaRepository
);

container.registerSingleton<IEstacionamentoRepository>(
    "EstacionamentoRepository",
    EstacionamentoRepository
);