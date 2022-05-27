const mongoose = require("mongoose");
const Users = require("../models/user");

module.exports = {
  //   add_users: async (req, res) => {
  //     try {
  //       let users = req.body;
  //       const savedusers = await Users.create(users);
  //       res.send(savedusers);
  //     } catch (error) {
  //       res.send(error);
  //     }
  //   },

  add_users(req, res) {
    console.log(req.body);
    var users = req.body;
    Users.create(users, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result); //reponse eli bech tarja3 lel front
      }
    });
  },

  //   add_many_users: async (req, res) => {
  //     try {
  //       let users = req.body.users;
  //       const savedusers = await Users.insertMany(users);
  //       res.send(savedusers);
  //     } catch (error) {
  //       res.send(error);
  //     }
  //   },
  find_one_users: async (req, res) => {
    try {
      let id = req.params._id;
      const users = await Users.findById(id);
      res.send(users);
    } catch (error) {
      res.send(error);
    }
  },
  //   find_many_users: async (req, res) => {
  //     try {
  //       let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
  //       const users = await Users.find({
  //         _id: { $in: ids },
  //       });
  //       res.send(users);
  //     } catch (error) {
  //       res.send(error);
  //     }
  //   },

  find_all_users: async (req, res) => {
    try {
      const users = await Users.find();
      res.send(users);
    } catch (error) {
      res.send(error);
    }
  },

  //   update_one_users: async (req, res) => {
  //     try {
  //       let users = req.body;
  //       let id = req.params._id;
  //       const updatedusers = await Users.findByIdAndUpdate(id, users);
  //       res.send(updatedusers);
  //     } catch (error) {
  //       res.send(error);
  //     }
  //   },

  
  //   delete_one_users: async (req, res) => {
  //     try {
  //       let id = req.params._id;
  //       const deletedusers = await Users.findByIdAndRemove(id);
  //       res.send(deletedusers);
  //     } catch (error) {
  //       res.send(error);
  //     }
  //   },
};
