# FullCycle Application

Este projeto utiliza Docker e Docker Compose para configurar uma aplicação que consiste em três componentes:

1. **Nginx**: Servindo como proxy reverso.
2. **Node.js**: Aplicação que adiciona registros no banco de dados e retorna uma lista de nomes.
3. **MySQL**: Banco de dados para armazenar os registros.

## Como Rodar

1. Clone o repositório:

   ```sh
   git clone https://github.com/ansusambu/proxy-reverso.git
   cd proxy-reverso
   
2. Construa e inicie os containers:
     ```sh
    docker-compose up -d
   
4. Acesse a aplicação em http://localhost:8080.
