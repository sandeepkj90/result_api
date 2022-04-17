const express = require('express');
const app = express();

const CONSTANT = require('./src/utils/constant');
const UserService = require('./src/service/user-service');

app.use(require('body-parser').json());
require('./database');


 app.use('/users',require('./src/controller/user-controller'))



//create admin 
UserService.isUserExist({ userName: 'admin' }).then(result => {
    console.log('result', result);
    if (!result.data) {
        UserService.registerUser({ name: 'admin', userName: 'admin', password: 'admin123', email: 'sandeepkj90@gmail.com' }).then(reslt => {
            console.log('Admin Created Successfully');
        }).catch(error => {
            console.log(CONSTANT.MESSAGE.COMMON.COMMON_ERROR);

        })
    } else {
        console.log(CONSTANT.MESSAGE.USER.ISEXIST)
    }

}).catch(error => {
    console.log(CONSTANT.MESSAGE.COMMON.COMMON_ERROR, error)
})

// End of Admin Create






app.listen(CONSTANT.PORT, () => {
    console.log(`Stated Server at ${CONSTANT.PORT}`);
})



