import { Vaga as VagaInfra } from "@prisma/client";

class Vaga implements VagaInfra{
    id: string;
    tipoVaga: string;
    ocupada: boolean;
    estacionamentoId: string
}



export { Vaga };