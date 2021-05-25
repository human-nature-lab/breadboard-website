module.exports = {
  title: 'Breadboard Docs',
  description: 'A software platform for developing and conducting human interaction experiments on networks using online participants.',
  base: '/docs/',
  dest: 'dist/docs',
  plugins: ['versioning'],
  themeConfig: {
    sidebar: {
      '': [
        '/getting-started',
        '/upgrade-guide',
        {
          title: 'Deployment',
          path: '/deployment/',
          collapsable: false,
          children: [
            '/deployment/installing-an-ssl-certificate',
            '/deployment/setting-up-a-server',
            {
              title: 'AMT',
              path: '/deployment/amt/',
            }
          ]
        }, {
          title: 'Scripting',
          path: '/scripting/',
          collapsable: false,
          children: [
            '/scripting/event-bus',
            '/scripting/graph-algorithms',
            '/scripting/recipes'
          ]
        },
        {
          title: 'Modules',
          path: '/modules/',
          collapsable: false,
          children: [
            '/modules/form',
            '/modules/chat',
            '/modules/crossword',
          ]
        },
        {
          title: 'API',
          path: '/api/',
          collapsable: false,
          children: [
            '/api/frontend/',
            '/api/scripting/',
          ]
        },
        '/faq',
        '/release-history',
        '/license'
      ]
    },
    footer: '![breadboard logo](https://github.com/human-nature-lab/breadboard/wiki/images/breadboard_blue_trans.png)'
  }
}