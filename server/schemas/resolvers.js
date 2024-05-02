const { AuthenticationError } = require('apollo-server-express');
const { User,  Plant } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    

    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('posts')
          .populate('plants')
         

        return userData;
      }

      throw new AuthenticationError('Wrong');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
      
        .populate('plants')
       
    },
    
    
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('plants')   
    },
    plant: async (parent, { _id }) => {
      return Plant.findOne({ _id });
    },
    getUsers: async (parent, args) => {
      const { search } = args;

      let searchQuery = {};

      if (search) {
        searchQuery = {
          $or: [
            { userName: { $regex: search, $options: 'i' } },
          ],
        };
      }

      const users = await User.find(searchQuery);

      return {
        users,
      };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Wong');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Wong');
        
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Wong');
      }

      const token = signToken(user);

      return { token, user };
    },
    
    
    addPlant: async (parent, args, context) => {
      if (context.user) {
        const plant = await Plant.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { plants: plant._id } },
          { new: true }
        );

        return plant;
      }

      throw new AuthenticationError('Log in');
    },
    updatePlant: async (parent, args, context) => {
      if (context.user) {
        const {
          plantId,
          image_path,
          common_name,
          description,
        } = args;
        console.log(common_name);
        const plant = await Plant.findByIdAndUpdate(
          plantId,
          {
            common_name: common_name,
            description: description,
            image_path: image_path,
          },
          { new: true }
        );
        console.log(plant);
        return plant;
      }

      throw new AuthenticationError('Log in');
    },
    removePlant: async (parent, { plantId }, context) => {
      if (context.user) {
        const plant = await Plant.findByIdAndDelete(
          plantId,
          function (err, docs) {
            if (err) {
              console.log(err);
            } else {
              console.log('Deleted : ', docs);
            }
          }
        );
        return plant;
      }

      throw new AuthenticationError('Log in');
    },
   
    addPlantHistory: async (parent, { plantId, note_body }, context) => {
      if (context.user) {
        const updatedPlant = await Plant.findOneAndUpdate(
          { _id: plantId },
          {
            $push: {
              plantHistory: { note_body },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedPlant;
      }

      throw new AuthenticationError('Log in');
    },
    
   
    
  },
};

module.exports = resolvers;
