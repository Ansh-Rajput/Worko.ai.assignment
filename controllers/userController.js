const userService = require('../services/userService');
const { validateUser, validateId, validateZipCode, validateEmail } = require('../validators/userValidator');

class UserController {
    async createUser(req, res) {
        try {
            const { error } = validateUser(req.body);
            if (error) return res.status(400).send(error.details[0].message);

            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getUsers(req, res) {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getUserById(req, res) {
        try {
            const { error } = validateId(req.params.userId);
            if (error) return res.status(400).send(error.details[0].message);

            const user = await userService.getUserById(req.params.userId);
            if (!user) return res.status(404).json({ message: 'User not found' });

            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async updateUser(req, res) {
        try {
            const { error } = validateId(req.params.userId);
            if (error) return res.status(400).send(error.details[0].message);

            const user = await userService.updateUser(req.params.userId, req.body);
            if (!user) return res.status(404).json({ message: 'User not found' });

            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const { error } = validateId(req.params.userId);
            if (error) return res.status(400).send(error.details[0].message);

            const user = await userService.deleteUser(req.params.userId);
            if (!user) return res.status(404).json({ message: 'User not found' });

            res.status(204).send();
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = new UserController();
