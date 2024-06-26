const User = require('../models/userModel');

class UserDAO {
    async create(user) {
        const newUser = new User(user);
        return await newUser.save();
    }

    async findAll() {
        return await User.find({ isDeleted: false });
    }

    async findById(userId) {
        return await User.findById(userId);
    }

    async update(userId, user) {
        return await User.findByIdAndUpdate(userId, user, { new: true });
    }

    async delete(userId) {
        return await User.findByIdAndUpdate(userId, { isDeleted: true });
    }
}

module.exports = new UserDAO();
