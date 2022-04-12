const UserDAO = require('../dao/user-dao');
const CONSTANT = require('../utils/constant');
const UserService = {
    registerUser: (payload) => {
        return new Promise((resolve, reject) => {
            UserDAO.registerUser(payload).then(result => {
                resolve({ status: CONSTANT.HTTP_STATUS_CODE.CREATED, message: CONSTANT.MESSAGE.USER.CREATED, data: result })
            }).catch(error => {
                reject({ status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR, message: error })
            })

        })

    },
    isUserExist: (payload) => {
        return new Promise((resolve, reject) => {
            UserDAO.isUserExist(payload).then(result => {
                resolve({ status: CONSTANT.HTTP_STATUS_CODE.SUCCESS, message: CONSTANT.MESSAGE.USER.ISEXIST, data: result })
            }).catch(error => {
                reject({ status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR, message: error })
            })

        })

    },
    login: (payload) => {
        return new Promise((resolve, reject) => {
            UserDAO.login(payload).then(result => {
                resolve({ status: CONSTANT.HTTP_STATUS_CODE.SUCCESS, message: CONSTANT.MESSAGE.USER.LOGIN, data: result })
            }).catch(error => {
                reject({ status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR, message: error })
            })

        })

    },
    
}

module.exports = UserService;