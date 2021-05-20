module.exports = {
  title: 'Breadboard Docs',
  description: 'A software platform for developing and conducting human interaction experiments on networks using online participants.',
  base: '/docs/',
  dest: 'dist/docs',
  themeConfig: {
    nav: [{
      text: 'Other Versions',
      items: [{
        text: '2.4.0',
        link: '/2.4.0/'
      }, {
        text: '2.3.0',
        link: '/2.3.0/'
      }]
    }],
    sidebar: {
      '': [
        '/getting-started',
        '/upgrade-guide',
        {
          title: 'Deployment',
          path: '/deployment/',
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
          children: [
            '/scripting/graph-algorithms',
            '/scripting/language-reference',
            '/scripting/recipes'
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