const { mkdir, readdir, copyFile, readFile, writeFile } = require('fs/promises')

const srcDir = 'node_modules/feather-icons/dist/icons'
const [,, name = 'all', ...include] = process.argv
const names = [], maxi = [], mini = []

function encodeSvg(svg) {
  return svg.replace(/</g, '%3C').replace(/>/g, '%3E').replace(/>/g, '%23')
}

async function addIcon(file) {
  const name = file.substr(0, file.length - 4)
  if (include.length && !include.includes(name)) return
  const content = encodeSvg(await readFile(`${srcDir}/${file}`, 'utf8'))
  names.push(name)
  maxi.push(`mici-icon[name=${name}] {
  background-image: url(\"data:image/svg+xml,${content}\")
}
`)
  mini.push(`mici-icon[name=${name}]{background-image:url(\"data:image/svg+xml,${content}\")}`)
}

function checkIncluded() {
  for (const name of include)
    if (!names.includes(name)) {
      console.warn(`missing "${name}"`)
      process.exitCode = 2
    }
}

async function minifyIcons(input, output) {
  let content = await readFile(input, 'utf8')
  content = content
    .replace(/\] \{\n  /g, ']{')
    .replace(/: url\(/g, ':url(')
    .replace(/\)\n\}\n\n/g, ')}')
  await writeFile(output, content)
}

async function main() {
  const [files] = await Promise.all([
    readdir(srcDir), mkdir('dist', { recursive: true })
  ])
  await Promise.all(files.map(addIcon))
  checkIncluded()
  await Promise.all([
    writeFile(`dist/icons-${name}.css`, maxi.join('\n')),
    writeFile(`dist/icons-${name}.min.css`, mini.join('')),
    copyFile('src/components/icon/icons-base.css', 'dist/icons-base.css'),
    minifyIcons('src/components/icon/icons-base.css', 'dist/icons-base.min.css')
  ])
}

main().catch(err => {
  console.error(err)
  process.exitCode = 1
})
