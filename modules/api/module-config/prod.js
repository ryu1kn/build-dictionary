const {
  certDomainName,
  hostedZoneId,
  deploymentOutputsBucket
} = require('../../../config/prod')

module.exports = {
  deploymentOutputsBucket,
  hostedZoneId,
  certDomainName,
  domainName: 'builddictionary-api.ryuichi.io'
}
