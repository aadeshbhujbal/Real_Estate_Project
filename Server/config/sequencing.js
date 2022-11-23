const insertCounter = (seqName) => {
  const newCounter = new Counter({ _id: seqName, seq: 100 });
  return new Promise((resolve, reject) => {
    newCounter
      .save()
      .then((data) => {
        resolve(data.seq);
      })
      .catch((err) => reject(err));
  });
};
module.exports = {
  Counter,
  getSequenceNextValue,
  insertCounter,
};
