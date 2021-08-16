module.exports = {
    env: {
        MONGO_URI: "mongodb+srv://rahul:test1234@questions.p81ox.mongodb.net/GradeBuilder?retryWrites=true&w=majority",
        IDP_DOMAIN: "grade-builder.auth.us-east-2.amazoncognito.com",
        USER_POOL_ID: "us-east-2_98yQmo7sG",
        USER_POOL_CLIENT_ID: "62er3jbeahqrq49l9a0a7iknud",
        REDIRECT_SIGN_IN: "http://ec2-3-131-137-184.us-east-2.compute.amazonaws.com:3000/token",
        REDIRECT_SIGN_OUT: "http://ec2-3-131-137-184.us-east-2.compute.amazonaws.com:3000",
        AUTH_COOKIE_DOMAIN: "ec2-3-131-137-184.us-east-2.compute.amazonaws.com"
    }
}