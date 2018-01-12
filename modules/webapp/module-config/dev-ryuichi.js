const projectConfig = require('../../../config/dev-ryuichi')
const moduleCommonConfig = require('./common')

module.exports = Object.assign({}, moduleCommonConfig, {
  bucketName: 'builddictionary-webapp-dev-ryuichi',
  bucketDeletionPolicy: projectConfig.customDeletionPolicy
})
