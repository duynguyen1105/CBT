const express = require('express')

const {
  getAllWorkspaces,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
  getWorkspace,
} = require('../controllers/workspaceController')
const { checkAuth } = require('../middlewares/checkAuth')
const { checkWorkspace } = require('../middlewares/checkWorkspace')

const Router = express.Router()

Router.route('/')
  .get(checkAuth('SUPER_ADMIN'), getAllWorkspaces)
  .post(checkAuth(['USER', 'ADMIN_WORKSPACE']), createWorkspace)

Router.route('/:workspaceDomain')
  .get(checkAuth('ADMIN_WORKSPACE'), checkWorkspace, getWorkspace)
  .put(checkAuth('ADMIN_WORKSPACE'), checkWorkspace, updateWorkspace)
  .delete(checkAuth('SUPER_ADMIN'), deleteWorkspace)


module.exports = Router
