-- CreateTable
CREATE TABLE "estacionamento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "estacionamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vaga" (
    "id" TEXT NOT NULL,
    "tipoVaga" TEXT NOT NULL,
    "estacionamentoId" TEXT,

    CONSTRAINT "Vaga_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "estacionamento_nome_key" ON "estacionamento"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Vaga_tipoVaga_key" ON "Vaga"("tipoVaga");

-- AddForeignKey
ALTER TABLE "Vaga" ADD CONSTRAINT "Vaga_estacionamentoId_fkey" FOREIGN KEY ("estacionamentoId") REFERENCES "estacionamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
