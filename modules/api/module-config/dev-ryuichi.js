const {
  certDomainName,
  hostedZoneId,
  deploymentOutputsBucket
} = require('../../../config/dev-ryuichi')

module.exports = {
  deploymentOutputsBucket,
  hostedZoneId,
  certDomainName,
  domainName: 'builddictionary-dev-ryuichi-api.ryuichi.io'
}
