const Constant = {
    PORT: '3000',
    MONGODB_URL: 'mongodb://localhost:27017/result_db',
    COLLECTION: { USER: 'users' },
    HTTP_STATUS_CODE:{SUCCESS:200,SERVER_ERROR:500,BAD_REQUEST:406,CREATED:201,INVALID_CREDENTIAL:401},
    MESSAGE:{
        USER:{
            CREATED:'User Created Successfully.',
            ISEXIST:'User already Exist.',
            LOGIN:'User loggedin Successfully.',
            INVALID_CREDENTIAL:'Invalid UserName/Password..'
        },
        COMMON:{
            COMMON_ERROR:'Something went wrong!!',

        }
    }
}

module.exports = Constant;