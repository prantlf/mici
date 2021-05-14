const { mkdir, writeFile } = require('fs/promises')
const { createCompilerHost, createProgram } = require('typescript')

const exclude = ['helpers', 'tooltip']

function generateTypes(options) {
  const types = {}
  const host = createCompilerHost(options)
  host.writeFile = (fileName, contents) => types[fileName] = contents

  const program = createProgram(['src/index.ts'], options, host)
  program.emit()

  return types;
}

async function saveType(file, content) {
  if (exclude.some(part => file.includes(part))) return
  if (file === 'dist/index.d.ts')
    content = content.replace(/\/components\/[^/]+/g, '')
  else
    file = file.replace(/^([^/]+)\/[^/]+\/[^/]+\/([^/]+)$/, '$1/$2')
  await writeFile(file, content)
}

async function saveTypes(types) {
  await Promise.all(Object
    .keys(types)
    .map(file => saveType(file, types[file]))
  )
}

async function main() {
  const types = generateTypes({
    experimentalDecorators: true,
    declaration: true,
    declarationDir: 'dist',
    emitDeclarationOnly: true
  })
  await mkdir('dist', { recursive: true })
  await saveTypes(types)
}

main().catch(err => {
  console.error(err)
  process.exitCode = 1
})
