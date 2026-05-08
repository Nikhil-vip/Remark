const mongoose = require('mongoose');
const message_schemna = new mongoose.Schema({
  name: { type: String },
  message: { type: String }
}
);
module.exports = mongoose.modle('Message', message_schemna);