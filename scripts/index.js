const { readdir, writeFile } = require('fs/promises')

const exclude = ['tooltip']
const lines = []

function addExport(name) {
  if (exclude.includes(name)) return
  const className = name.charAt(0).toUpperCase() + name.substr(1)
  lines.push(`export { default as Mici${className}Element } from './components/${name}/${name}'
`)
}

async function main() {
  const names = await readdir('src/components')
  for (const name of names) addExport(name)
  await writeFile('src/index.ts', lines.join(''))
}

main().catch(err => {
  console.error(err)
  process.exitCode = 1
})
