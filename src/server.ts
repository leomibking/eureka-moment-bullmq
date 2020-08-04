import express from 'express';
import { UI, setQueues } from 'bull-board';
import { initScheduler } from './scheduler/Importacao.scheduler';
import { QUEUES } from './board/Board';
import { EnvioEmailWorker } from './worker/EnvioEmail.worker';
import { EnvioEmailQueue } from './queue/EnvioEmail.queue';

setQueues(QUEUES);

const queue = EnvioEmailQueue;
const worker = EnvioEmailWorker;

const app = express();
app.use('/', UI);
initScheduler().then(() => console.log('Scheduler initialized'));
app.listen(3333, () => console.log('App listening on port 3333'));
