export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6167cb599028f4819d0c57c2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ps85xb3v',
                  apiId: '9a01a0d0-8e90-404c-ac30-853e942cf552'
                },
                {
                  buildHookId: '6167cb595a65bb6d6642725a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6d9c1du6',
                  apiId: '0373c5d3-45e0-4293-a518-d45d42856bbb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johnnyCOSE/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6d9c1du6.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
