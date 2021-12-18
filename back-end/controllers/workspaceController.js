const Workspace = require('../models/Workspace')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

exports.getAllWorkspaces = async (req, res, next) => {
  try {
    const allWorkspaces = await Workspace.find({})
      .populate('adminWorkspace')
      .populate('ownerWorkspace')
    res.status(200).json({
      status: 'Success',
      results: allWorkspaces.length,
      data: { allWorkspaces },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.createWorkspace = async (req, res, next) => {
  try {
    const { userId } = req.user
    const workspace = await Workspace.create({
      ...req.body,
      adminWorkspace: [userId],
      ownerWorkspace: userId,
    })
    const adminWorkspace = await User.findById(userId).populate('workspace')
    adminWorkspace.workspace = workspace._id
    adminWorkspace.role = 'ADMIN_WORKSPACE'

    await User.findByIdAndUpdate(
      userId,
      { ...adminWorkspace },
      { new: true, runValidator: true }
    )

    res.status(200).json({
      status: 'Success',
      data: { workspace },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.updateWorkspace = async (req, res, next) => {
  try {
    const { workspaceDomain } = req.params
    const { ownerWorkspace } = Workspace.findOne({ domain: workspaceDomain })
    if (!req.user.userId === ownerWorkspace) {
      const err = new Error('You must be the owner to do it')
      err.statusCode = 403
      return next(err)
    }
    const workspace = await Workspace.findOneAndUpdate(
      { domain: workspaceDomain },
      {
        name: req.body.name,
        domain: req.body.domain,
        ownerWorkspace: req.body.ownerWorkspace,
      },
      { new: true, runValidator: true }
    )

    res.status(200).json({
      status: 'Success',
      data: { workspace },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.deleteWorkspace = async (req, res, next) => {
  try {
    const { workspaceDomain } = req.params
    const foundWorkspace = await Workspace.findOne({ domain: workspaceDomain })
    if (!foundWorkspace) {
      const err = new Error('Can not found this workspace')
      err.statusCode = 400
      return next(err)
    }
    const usersOfWorkspace = await User.find({ workspace: foundWorkspace._id })
    usersOfWorkspace.map(async function (user) {
      user.workspace.splice(foundWorkspace._id)
      await User.findByIdAndUpdate(
        user._id,
        { ...user },
        { new: true, runValidator: true }
      )
    })
    await Workspace.findOneAndRemove({ domain: workspaceDomain })
    res.status(200).json({
      status: 'Success',
      message: 'Workspace has been deleted',
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.getWorkspace = async (req, res, next) => {
  try {
    const { workspaceDomain } = req.params
    const workspace = await Workspace.findOne({ domain: workspaceDomain })
      .populate('adminWorkspace')
      .populate('ownerWorkspace')
    if (!workspace) {
      const err = new Error('Can not found this workspace')
      err.statusCode = 400
      return next(err)
    }
    res.status(200).json({
      status: 'Success',
      data: { workspace },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
