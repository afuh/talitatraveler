require('dotenv').config({
  path: `.env.development`,
})

module.exports = {
  apps: [
    {
      name: 'talita',
      script: 'npm',
      args: 'run dev',
      cron_restart: '0 2 * * *',
    },
  ],
  deploy: {
    production: {
      user: process.env.PREVIEW_USER,
      host: [process.env.PREVIEW_HOST],
      ref: 'origin/master',
      repo: 'https://github.com/afuh/talitatraveler.git',
      path: '/var/www/talitatraveler',
      'post-deploy': 'npm run clean && pm2 reload ecosystem.config.js',
    },
  },
}
