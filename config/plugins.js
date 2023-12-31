module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'local',
        providerOptions: {
          localServer: {
            maxage: 300000
          },
          sizeLimit: 100000000,
        },
      },
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.example.com'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        }
      },
    },
});

