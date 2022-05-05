module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: '@ntegral/strapi-provider-upload-azure-storage-blob',
      providerOptions: {
        account: env('STORAGE_ACCOUNT'),
        serviceBaseURL: env('STORAGE_URL'),
        containerName: env('STORAGE_CONTAINER_NAME'),
        connectionString: env('STORAGE_CONNECTION_STRING'),
        defaultPath: 'assets'
      }
    }
  },
  sentry: {
    enabled: true,
    config: {
      dsn: env('SENTRY_DSN'),
      sendMetadata: true
    }
  },
  publisher: {
    enable: true
  }
})
