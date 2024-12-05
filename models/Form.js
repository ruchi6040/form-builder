const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    type: String,
    question: String,
    options: [String],
    answer: String,
    image: String,
});

const FormSchema = new mongoose.Schema({
    title: String,
    headerImage: String,
    questions: [QuestionSchema],
    responses: [
        {
            userId: String,
            answers: [
                {
                    questionId: String,
                    answer: String,
                },
            ],
        },
    ],
});

const Form = mongoose.model('Form', FormSchema);
module.exports = Form;
