const mongoose = require('mongoose');
const message_schemna = new mongoose.Schema({
  name: { type: String },
  message: { type: String }
}
);
module.export = mongoose.modle('message', message_schemna);