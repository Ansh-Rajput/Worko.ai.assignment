const userDAO = require('../daos/userDAO');

class UserService {
    async createUser(userDTO) {
        return await userDAO.create(userDTO);
    }

    async getUsers() {
        return await userDAO.findAll();
    }

    async getUserById(userId) {
        return await userDAO.findById(userId);
    }

    async updateUser(userId, userDTO) {
        return await userDAO.update(userId, userDTO);
    }

    async deleteUser(userId) {
        return await userDAO.delete(userId);
    }
}

module.exports = new UserService();
