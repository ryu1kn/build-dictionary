module.exports = {
  tasks: [
    // Build modules
    {
      description: 'Lint entire project',
      command: 'yarn run prep'
    },

    // Deploy modules
    {
      description: 'Deploy module',
      path: /^(modules\/[^/]+)\/.*/,
      command:
        'cd $BM_PATH_VAR_1 && yarn run deploy --env $ENV_NAME --region $AWS_REGION'
    },

    // Deploy apps
    {
      description: 'Deploy webapp',
      path: /^(modules\/webapp)\/.*/,
      command:
        'cd $BM_PATH_VAR_1 && yarn install && yarn run build && yarn run deploy:app'
    }
  ]
}
