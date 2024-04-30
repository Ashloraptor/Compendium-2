const { User } = require('../models');


const resolvers = {
  Query: {

    // user: async (parent, {}, context) => {
    //   console.log(context);
    //   // const user = await User.findOne({_id: context.userid});
    //   const user = await User.findOne({_id: context.user._id});
    //   return user;
    // },

    user: async (parent, args) => {
      return await User.findById(args.id);

      
    }
    
  },

  Mutation: {

    addUser: async (parent, args) => {
      const user = await User.create(args);
      //login user after creation
      const token = signToken(user);
      return {token, user};
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

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

    savePlant: async(parent, args, context) =>{
      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedPlants: args.plant } },
        { new: true, runValidators: true }
      );
      return user;
    },

    removePlant: async(parent, args, context) =>{
      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: {savedPlants: {custom_id: args.custom_id}}}, //not sure if custom_id is accurate, needs to be Plant.id's ID of plants, maybe access token?
        {new: true}
      );
      return user;
    }
  }
};

module.exports = resolvers;
