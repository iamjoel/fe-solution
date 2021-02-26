module.exports = function (plop) {
  plop.setGenerator('component', {
      description: 'creat component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: '组件名称'
        },
        {
          type: 'input',
          name: 'isFunComp',
          message: '是函数组件吗(默认是 Class 组件)？(y/n)'
        }
      ],
      actions: data => {
        const isFunComp = data.isFunComp === 'y'
        const componentName = toComponentName(data.name)
        const actions = [
          {
            type: 'add',
            path: `src/components/{{name}}/index.tsx`,
                templateFile: `plop-templates/${isFunComp ? 'fun-component' : 'class-component'}.hbs`,
            data: {
              componentName
            },
            skipIfExists: true
          },
          {
            type: 'add',
            path: `src/components/{{name}}/style.scss`,
            templateFile: 'plop-templates/style.hbs',
            skipIfExists: true
          }
        ]
        return actions
      }
  });
}

function toComponentName(name) {
  let nameArray = name.split('-')
  return nameArray.map(item => `${item.charAt(0).toUpperCase()}${item.substr(1)}`).join('')
}