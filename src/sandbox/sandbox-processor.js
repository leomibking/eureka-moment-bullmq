module.exports = function (job) {
  console.log('Executando a job em sandbox em outra thread', job.data);
  return Promise.resolve({ processed: true, msg: 'teste' });
};
