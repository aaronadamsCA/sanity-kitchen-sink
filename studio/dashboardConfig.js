export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec5f15aa9c378ee57122f74',
                  title: 'Sanity Studio',
                  name: 'nishe-app-web-studio',
                  apiId: '3b4b772f-0236-43d1-9388-7606d8e53f96'
                },
                {
                  buildHookId: '5ec5f15ad184e34894e64eae',
                  title: 'Blog Website',
                  name: 'nishe-app-web',
                  apiId: '83317d2d-a544-4bc8-9647-a6e86ca17605'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aaronadamsCA/nishe-app-web',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nishe-app-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
