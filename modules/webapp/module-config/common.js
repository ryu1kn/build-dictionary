const projectConfig = require('../../../config/common')

module.exports = {
  artifactBucket: projectConfig.artifactBucket,
  deploymentOutputsBucket: projectConfig.deploymentOutputsBucket,
  artifactBasePath: 'webapp'
}
