import { Job, Worker } from 'bullmq';

const consumeEmail = async (job: Job) => {
  console.log('consumeEmail', 'enviando e-mail', job.data);
};

export const EnvioEmailWorker = new Worker('EnvioEmailQueue', consumeEmail);

EnvioEmailWorker.on('completed', (job: Job) => {
  console.log('EnvioEmailWorker', 'job completed', job.data);
});

EnvioEmailWorker.on('failed', (job: Job) => {
  console.log('EnvioEmailWorker', 'job failed', job.data);
});
