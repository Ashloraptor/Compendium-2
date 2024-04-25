const { User } = require('../models');
//import bookSchema?
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find().populate('books');
    // },
    //savedBooks, or books?
    user: async (parent, {}, context) => {
      console.log(context);
      // return User.findOne({ username }).populate('books');
      const user = await User.findOne({_id: context.user._id});
      return user;
    },
    // books: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Book.find(params);
    // },
    // book: async (parent, { _id }) => {
    //   return Book.findOne({ _id: bookId });
    // }, //unsure
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      //login user after creation
      const token = signToken(user);

      return {token, user};
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async(parent, args, context) =>{
      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: args.book } },
        { new: true, runValidators: true }
      );
      return user;
    },
    removeBook: async(parent, args, context) =>{
      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: {savedBooks: {bookId: args.bookId}}},
        {new: true}
      );
      return user;
    }
  }
};

module.exports = resolvers;
