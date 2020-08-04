# Moment utilizando o BullMQ


<div align="center">
  <br/>
  <img src="https://user-images.githubusercontent.com/95200/64285204-99c04900-cf5b-11e9-925c-4743006ce420.png" width="300" />
  <br/>
  <br/>
</div>

Documentação V4: https://docs.bullmq.io/ | https://github.com/taskforcesh/bullmq  
Documentação v3: https://optimalbits.github.io/bull/ | https://github.com/OptimalBits/bull  

### O que é?
* Biblioteca em node.js que implementa um sistema de filas baseado no Redis
* Fácil de escalar horizontalmente -> adiciona mais workers para paralelismo
* Consistente
* Performático

### Funcionalidades:
* Prioridades (https://docs.bullmq.io/guide/jobs/fifo)
* LIFO (Last In First Out) / FIFO (First In First Out) (https://docs.bullmq.io/guide/jobs/lifo)
* Delay (https://docs.bullmq.io/guide/jobs/delayed)
* Scheduler e repetição de jobs (cron) (https://docs.bullmq.io/guide/jobs/repeatable)
* Retentativas
* Pode ser usado com multiplas threads e fora da thread principal (sandbox)

### Para rodar o projeto:
* Executar o `yarn install` para instalar as dependencias do projeto
* Executar o `yarn build` para compilar o projeto ou `yarn dev` para executar o projeto sem precisar compilar
* Abrir o navegador: (http://localhost:3333) para acessar o painel (board) do BullMQ
![Board](https://i.imgur.com/ug30yb2.png)

Exemplo do processo rodando em sandbox:
![sandbox](https://i.imgur.com/q0wOMT2.png)
