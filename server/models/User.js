
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
    },
    // set savedplants to be an array of data that adheres to the plantSchema
    savedplants: [plantSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);



Users.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});




Users.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `plantCount` with the number of saved plants we have
userSchema.virtual('plantCount').get(function () {
  return this.savedplants.length;
});

const User = model('User', Users);

module.exports = User;