# Hey y'all # 

*PARA TESTAR A APLICAÇÃO É NECESSÁRIO UM CONTAINER POSTGRES NO DOCKER!*

**Configuraçõe**:
**1- "yarn" ( para instalar os pacotes no package.json)**

Após criar um container postgres, use o arquivo .env igual ao arquivo de exemplo no repositório substituindo as credencias de acesso especificadas na URL de conexão.
**2- Execute o comando no terminal do vs-code os comandos: "yarn prisma generate"**

Após:

**3- "yarn prisma db push (para criar o banco no container docker)"**
Para testar se o DB está conectado, execute o comando "yarn prisma studio" ira abrir um gerenciador de banco próprio do prisma na URL localhost:5555

**Para INICIAR a aplicação basta escrever no terminal**
**4 - "yarn dev" para inciar a aplicação**
 
 A APLICAÇÃO SERÁ INICIADA NA PORTA localhost:3333
 
 A aplicação se baseia em um sistema de gerenciamento de estacionamento.
