const Workspace = require('../models/Workspace')
const Question = require('../models/Question')
const ShortId = require('id-shorter')

exports.getAllQuestionsOfWorkspace = async (req, res, next) => {
  try {
    const { workspaceDomain } = req.params
    const { _id } = await Workspace.findOne({ domain: workspaceDomain })
    const allQuestions = await Question.find({ workspace: _id })
    const formattedQuestions = allQuestions.map(
      ({
        _id: questionId,
        questionTitle,
        status,
        createdAt,
        category,
        questionType,
      }) => ({
        _id: questionId,
        questionTitle,
        status,
        createdAt,
        category,
        questionType,
      })
    )
    res.status(200).json({
      status: 'Success',
      results: allQuestions.length,
      data: { allQuestions: formattedQuestions },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.createQuestion = async (req, res, next) => {
  try {
    const { workspaceDomain } = req.params
    const { _id } = await Workspace.findOne({ domain: workspaceDomain })

    const question = await Question.create({
      ...req.body,
      workspace: _id,
    })

    res.status(200).json({
      status: 'Success',
      data: { question },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.updateQuestion = async (req, res, next) => {
  try {
    const question = await Question.findByIdAndUpdate(
      req.params.questionId,
      { ...req.body },
      { new: true, runValidator: true }
    )
    res.status(200).json({
      status: 'Success',
      data: { question },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.deleteQuestion = async (req, res, next) => {
  try {
    await User.findByIdAndRemove(req.params.questionId)
    res.status(200).json({
      status: 'Success',
      message: 'Question has been deleted',
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.getInfoQuestion = async (req, res, next) => {
  try {
    const question = await Question.findById(req.params.questionId)
    res.status(200).json({
      status: 'Success',
      data: { question },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
