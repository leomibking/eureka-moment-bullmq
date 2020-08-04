import Queue from 'bull';
import { EnvioEmailQueue } from '../queue/EnvioEmail.queue';
import { ImportacaoQueue } from '../scheduler/Importacao.scheduler';

export const QUEUES = [
  new Queue(EnvioEmailQueue.name),
  new Queue(ImportacaoQueue.name),
];
