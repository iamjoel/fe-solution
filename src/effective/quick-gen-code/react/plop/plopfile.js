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
          name: 'isContainer',
          message: '是 Container 吗？(y/n)', // TODO: 改成 是否是 func comp
        }
      ],
      actions: data => {
        const folder = data.isContainer === 'y' ? 'containers' : 'components'
        const componentName = toComponentName(data.name)
        const actions = [
          {
            type: 'add',
            path: `src/components/${folder}/{{name}}/index.tsx`,
            templateFile: 'plop-templates/component.hbs',
            data: {
              componentName
            },
            skipIfExists: true
          },
          {
            type: 'add',
            path: `src/components/${folder}/{{name}}/style.scss`,
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