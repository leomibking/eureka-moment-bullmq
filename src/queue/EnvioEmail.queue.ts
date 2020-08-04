import { Job, Queue } from 'bullmq';

export const EnvioEmailQueue = new Queue('EnvioEmailQueue');

EnvioEmailQueue.on('waiting', (job: Job) => {
  console.log('EnvioEmailQueue', 'job criado', job.data);
});
