import { Job, Queue, QueueScheduler, Worker } from 'bullmq';
import { EnvioEmailQueue } from '../queue/EnvioEmail.queue';

const processImportacao = async (job: Job): Promise<void> => {
  console.log('processImportacao', 'processando job', job.data);
  await EnvioEmailQueue.add('emailImportacao', {
    body: 'Importação dos registros concluida.',
  });
  return;
};

export const ImportacaoScheduler = new QueueScheduler(
  'ImportacaoSchedulerQueue',
);
export const ImportacaoQueue = new Queue('ImportacaoSchedulerQueue');
export const ImportacaoWorker = new Worker(
  'ImportacaoSchedulerQueue',
  processImportacao,
);

export const initScheduler = async (): Promise<void> => {
  await ImportacaoQueue.add('import', null, {
    repeat: {
      cron: '*/15 * * * * *',
    },
  });
};
