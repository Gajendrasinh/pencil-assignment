const jwt = require('jsonwebtoken');
const responseGenerator = require("../response/json-response");
class UserValidator {


    /**
     * @param {*} req contains request parameters
     * @param {*} res contains res parameters to send response
     * @param {*} next is next callback
     */
     verifyUser (req, res, next) {
        try {
            const token = req.headers['authorization'];
            if (!token) {
                throw new Error('103');
            }

            if (token) {
                const user = jwt.decode(token);
                req.user = user;
                next();
            }

        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }

}

module.exports = new UserValidator();