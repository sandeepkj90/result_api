const UserModel = require('../model/user-model');
const UserDAO = {
    registerUser: (payload) => {
        return new UserModel({
            ...payload
        }).save();
    },
    isUserExist: (payload) => {
        return UserModel.findOne({ userName: payload.userName });
    },
    login: (payload) => {
        return UserModel.findOne({ userName: payload.userName, password: payload.password });
    }
}
module.exports = UserDAO;