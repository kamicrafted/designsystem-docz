export default {
  base: './',
  public: '/public',
  title: 'fuboTV Design System',
  menu: [
    'Welcome',
    { 
      name: 'Overview', 
      menu: [
        'Intro to the Design System', 
        'How The Process Works', 
        'How to Contribute'
      ]
    },
    { 
      name: 'Primitives', 
      menu: [
        'Colors',
        'Typography',
        'Icons',
        'Surfaces',
        'Elevations',
        'Grids and Spacing'
      ]
    },
    { 
      name: 'Components', 
      menu: [
        'Alert', 'Button'
      ] 
    }
  ],
  themeConfig: {
    initialColorMode: 'dark',
  },
  ignore: ['readme.md', 'changelog.md', 'code_of_conduct.md', 'contributing.md', 'license.md']
}
