// receive message from master process
process.on('message', async (params) => {
  console.log(params);
});
