const mongoose = require('mongoose');
const message_schemna = new mongoose.Schema({
  name: { type: String },
  message: { type: String }
}
);
module.exports = mongoose.model('message', message_schemna);