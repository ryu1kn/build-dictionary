const {
  certDomainName,
  hostedZoneId,
  deploymentOutputsBucket
} = require('../../../config/ci')

module.exports = {
  deploymentOutputsBucket,
  hostedZoneId,
  certDomainName,
  domainName: 'builddictionary-ci-api.ryuichi.io'
}
