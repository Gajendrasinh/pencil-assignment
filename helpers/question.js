const Question = require('../lib/models/question');

class QuestionHelper {

    /**
     * @param {*} body contains question body json paramter
     */
    addQuestion(body) {
        return new Promise(async (resolve, reject) => {
            try {
                const createQuestion = new Question({
                    name: body.name,
                    email: body.email,
                    logo: body.logo,
                    phone: body.phone,
                    address: body.address,
                    noofstaffs: body.noofstaffs,
                    department: body.department,
                    createdAt: new Date().toString(),
                    createdBy: body.createdBy
                });
                const question = await createQuestion.save();
                resolve(question);
            } catch (error) {
                reject(error);
            }
        })
    }

    findQuestionByTopic(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const badge = await Badge.find({topic : id});
                if(badge) {
                    resolve(badge);
                } else {
                    resolve(null);
                }
            } catch(error) {
                reject(error);
            }
        })
    }
}

module.exports = new QuestionHelper();