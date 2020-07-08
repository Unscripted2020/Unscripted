module.exports = {
  apps : [{
    name: 'UnscriptedBackEnd',
    script: 'app.js',
    autorestart: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      key  : '/home/ec2-user/',
      user : 'ec2-user',
      host : 'ec2-18-217-46-116.us-east-2.compute.amazonaws.com',
      ref  : 'origin/master',
      repo : 'git@github.com:Unscripted2020/Unscripted.git',
      path : '/home/ec2-user',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
