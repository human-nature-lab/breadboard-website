const vuedoc = require('@vuedoc/md')
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { walk, titleCase, generated } = require('./util')

const excluded = ['SVGGraph.vue']
const clientComponents = walk('./frontend/client/components', { max_depth: 1 }).filter(f => 
  f.endsWith('.vue') && !excluded.includes(path.basename(f))
)
const modules = {
  chat: {
    description: fs.readFileSync('./snippets/chat-module.md', 'utf-8'),
    files: walk('./frontend/modules/chat').filter(f => f.endsWith('.vue'))
  },
  crossword: {
    description: fs.readFileSync('./snippets/crossword-module.md', 'utf-8'),
    files: walk('./frontend/modules/crossword').filter(f => f.endsWith('.vue'))
  }
}

async function genVueFiles(title, filenames, output, description) {
  // Generate documentation for client side components
  let contents = `# ${title}\n\n` + generated
  if (description) {
    contents += description + '\n\n'
  }
  for (const file of filenames) {
    contents += await vuedoc.md({
      level: 2,
      filenames: [file],
      parsing: {
        features: ['name', 'description', 'keywords', 'slots', 'model', 'props', 'events']
      }
    })
    contents += '\n\n\n'
  }
  await mkdirp(path.dirname(output))
  await fs.promises.writeFile(output, contents)
}


async function run() {

  // Generate the client components documentation
  await genVueFiles(
    'Vue browser components',
    clientComponents,
    'docs/api/frontend/client-components.md',
    fs.readFileSync('./snippets/client-components.md')
  )

  // Generate documentation for modules
  for (const name in modules) {
    await genVueFiles(
      `${titleCase(name)} Module`,
      modules[name].files,
      `docs/api/modules/${name}/README.md`,
      modules[name].description
    )
  }

  let indexContent = `# Modules\n${generated}\n`

  for (const name in modules) {
    indexContent += `- [${titleCase(name)}](./${name}/)\n`
  }

  await fs.promises.writeFile(path.join(__dirname, 'docs/api/modules/README.md'), indexContent, 'utf-8')

}


run()