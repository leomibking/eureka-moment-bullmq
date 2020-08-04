import { Job, Queue, Worker } from 'bullmq';
import { SandboxQueue } from '../sandbox/sandbox.queue';

export const EnvioEmailQueue = new Queue('EnvioEmailQueue');

EnvioEmailQueue.on('waiting', (job: Job) => {
  console.log('EnvioEmailQueue', 'job criado', job.data);
});

const consumeEmail = async (job: Job) => {
  console.log('consumeEmail', 'enviando e-mail', job.data);
  await SandboxQueue.add('emailSandbox', { origin: 'email', data: job.data });
};

export const EnvioEmailWorker = new Worker('EnvioEmailQueue', consumeEmail);

EnvioEmailWorker.on('completed', (job: Job) => {
  console.log('EnvioEmailWorker', 'job completed', job.data);
});

EnvioEmailWorker.on('failed', (job: Job) => {
  console.log('EnvioEmailWorker', 'job failed', job.data);
});
