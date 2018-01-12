const projectConfig = require('../../../config/ci')
const moduleCommonConfig = require('./common')

module.exports = Object.assign({}, moduleCommonConfig, {
  bucketName: 'builddictionary-webapp-ci',
  bucketDeletionPolicy: projectConfig.customDeletionPolicy
})
