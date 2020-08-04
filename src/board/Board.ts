import Queue from 'bull';
import { EnvioEmailQueue } from '../queue/EnvioEmail.queue';
import { ImportacaoQueue } from '../scheduler/Importacao.scheduler';
import { SandboxQueue } from '../sandbox/sandbox.queue';

export const QUEUES = [
  new Queue(EnvioEmailQueue.name),
  new Queue(ImportacaoQueue.name),
  new Queue(SandboxQueue.name),
];
