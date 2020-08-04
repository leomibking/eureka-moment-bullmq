import { Job, Queue, Worker } from 'bullmq';

const SandboxQueue = new Queue('SandboxQueue');
SandboxQueue.on('', () => {
  console.log('SandboxQueue', 'Job adicionado');
});
const SandboxWorker = new Worker(
  'SandboxQueue',
  __dirname + '/sandbox-processor.js',
);

SandboxWorker.on('completed', (job: Job) => {
  console.log(
    'SandboxWorker',
    'job completed',
    job.data,
    'returning ',
    job.returnvalue,
  );
});

SandboxWorker.on('failed', (job: Job) => {
  console.log('SandboxWorker', 'job failed', job.data);
});

const configureSandbox = async (): Promise<void> => {
  await SandboxQueue.add('sandbox', { body: 'teste' });
};

export default configureSandbox;
