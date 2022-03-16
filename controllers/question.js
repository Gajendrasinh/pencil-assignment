const questionHelper = require('../helpers/question');
const responseGenerator = require('../response/json-response');

class QuestionController {

    /**
     * addQuestion method is used to add question and insert question data in to database
     * @param {*} req 
     * @param {*} res 
     */
    async addQuestion(req, res) {
        try {
            const body = {
                ...req.body,
                createdBy: req.user.id
            }
            const question = await questionHelper.addQuestion(body);
            responseGenerator.sendResponse(res, { message: 'Question is added successfully', question: question});
        } catch (error) {
            responseGenerator.sendError(res, error);
        }
    }

    async searchQuestion(req, res) {
        try {

            const q = req.body.q || req.query.q;
            console.log(req.body.q )
            console.log(req.query.q )
            // let badgeDetail = await adminHelper.findBadgeById(req.params.id)

            // if(!badgeDetail) {
            //     throw new Error("105");
            // }
            // let returnedTarget = {}
            // if(badgeDetail.badgeType === "exam") {
                
            //     const examDetail = await examHelper.checkExamById(badgeDetail.taskId);
            //     returnedTarget = { exam: {
            //         name: examDetail.name,
            //         duration: examDetail.time,
            //     }
            // };

            // } else {
            //     const tutorialDetail = await tutorHelper.findTutorialById(badgeDetail.taskId);
            //     returnedTarget = { tutorial: {
            //             name: tutorialDetail.name,
            //             description: tutorialDetail.description,
            //             duration: tutorialDetail.duration
            //         }
            //     };

            // }
            responseGenerator.sendResponse(res, { q: q})

        } catch(error) {
            responseGenerator.sendError(res, error);
        }
    }
}

module.exports = new QuestionController();