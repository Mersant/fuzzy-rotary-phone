const { Schema, model } = require('mongoose');
const { Journal } = require('.');
const dateFormat = require('../utils/dateFormat');

const journalSchema = new Schema({
  journalText: {
    type: String,
    required: 'You can not upload an empty journal entry',
    minlength: 1,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Journal = model('Journal', journalSchema);

module.exports = Journal;
