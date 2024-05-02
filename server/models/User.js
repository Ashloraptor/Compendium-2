
const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');

const Users = new Schema(
  {
   
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    about: {
      type: String,
      maxlength: 280
    },
   
    plants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Plant',
      },
    ],
   
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// set up pre-save middleware to create password
Users.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
Users.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

Users.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', Users);

module.exports = User;
