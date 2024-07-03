module.exports = {
  title: 'Breadboard Docs',
  description: 'A software platform for developing and conducting human interaction experiments on networks using online participants.',
  base: '/docs/',
  dest: 'dist/docs',
  plugins: [
    'vuepress-plugin-zooming',
    'check-md'
  ],
  themeConfig: {
    logo: '/images/logo_breadboard_162_x_40.png',
    nav: [
      { text: 'Website', link: 'https://breadboard.yale.edu', target: '_self' },
      {
        text: 'Version',
        items: [{
          text: '2.4.0 (current)',
          link: '/'
        }, {
          text: '2.3.2',
          link: '/v/2.3.2/'
        }]
      }
    ],
    sidebar: {
      '/v/2.4.0/': [
        {
          title: 'Home',
          path: '/v/2.4.0/'
        },
        'getting-started',
        {
          title: 'Dialogs',
          path: '/v/2.4.0/dialogs/',
          collapsable: false,
          children: [
            'dialogs/the-script-dialog.md',
            'dialogs/the-parameters-dialog.md',
            'dialogs/the-steps-dialog.md',
            'dialogs/the-content-dialog.md',
            'dialogs/the-amt-assignments-dialog.md'
          ]
        },
        {
          title: 'Scripting',
          path: '/v/2.4.0/scripting/',
          collapsable: false,
          children: [
            'scripting/graph-algorithms',
            'scripting/event-bus',
            'scripting/recipes'
          ]
        },
        {
          title: 'Modules',
          path: '/v/2.4.0/modules/',
          collapsable: false,
          children: [
            'modules/form',
            'modules/chat',
            'modules/crossword',
          ]
        },
        {
          title: 'Deployment',
          path: '/v/2.4.0/deployment/',
          collapsable: false,
          children: [
            'deployment/setting-up-a-server',
            'deployment/installing-an-ssl-certificate',
            'deployment/amt',
          ]
        },
        {
          title: 'API',
          path: '/v/2.4.0/api/',
          collapsable: false,
          children: [
            'api/scripting/',
            'api/frontend/',
            'api/modules/',
          ]
        },
        'client/',
        'upgrade-guide',
        'faq',
        'release-history',
        'license'
      ],
      '/': [
        {
          'title': 'Home',
          'path': '/'
        },
        '/getting-started',
        {
          'title': 'Dialogs',
          'path': '/dialogs/',
          'collapsable': false,
          'children': [
            '/dialogs/the-script-dialog.md',
            '/dialogs/the-parameters-dialog.md',
            '/dialogs/the-steps-dialog.md',
            '/dialogs/the-content-dialog.md',
            '/dialogs/the-amt-assignments-dialog.md'
          ]
        },
        {
          'title': 'Scripting',
          'path': '/scripting/',
          'collapsable': false,
          'children': [
            '/scripting/graph-algorithms',
            '/scripting/language-reference',
            '/scripting/recipes'
          ]
        },
        {
          'title': 'Deployment',
          'path': '/deployment/',
          'collapsable': false,
          'children': [
            '/deployment/setting-up-a-server',
            '/deployment/installing-an-ssl-certificate',
            '/deployment/amt',
          ]
        },
        '/upgrade-guide',
        '/faq',
        '/release-history',
        '/license'
      ],
    },
    repo: 'human-nature-lab/breadboard',
    docsRepo: 'human-nature-lab/breadboard-website',
    editLinks: false,
    footerCopyright: '© 2020 Yale Institute for Network Science, all rights reserved',
    footerLogo: '/images/logo_breadboard_162_x_40.png',
    nextVersionTitle: '2.4.0'
  }
}