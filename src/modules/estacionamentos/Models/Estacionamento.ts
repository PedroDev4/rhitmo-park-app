import { Estacionamento as EstacionamentoInfra } from "@prisma/client";
import { Vaga } from "../../Vaga/Models/Vaga";

class Estacionamento implements EstacionamentoInfra {
    id: string;
    nome: string;
    vagas: Vaga[];
}

export { Estacionamento };