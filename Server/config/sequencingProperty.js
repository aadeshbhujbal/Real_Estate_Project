const insertCounter = (seqName) => {
  const newCounter = new PropertyCounter({ _id: seqName, seq: 1000 });
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
  PropertyCounter,
  getSequenceNextValue,
  insertCounter,
};
