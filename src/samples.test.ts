import { existsSync, readdirSync, readFileSync } from 'fs'
import { parse } from './parser'
import { evaluate } from './interpreter'
import { expect } from 'chai'
import { astToString } from './ast'

function test(dir: string, name: string) {
  it(name, () => {
    let inFile: string
    let outFile: string

    let echoFile = `tests/${dir}/${name}.echo.php`
    if (existsSync(echoFile)) {
      inFile = echoFile
      outFile = echoFile
    } else {
      inFile = `tests/${dir}/${name}.in.php`
      outFile = `tests/${dir}/${name}.out.php`
    }

    let inCode = readFileSync(inFile, 'utf8')
    let outCode = readFileSync(outFile, 'utf8')

    let ast = parse(inCode)
    let result = evaluate(ast)

    expect(astToString(result)).to.equal(outCode)
  })
}

for (let dir of readdirSync('tests')) {
  context(dir, () => {
    for (let file of readdirSync(`tests/${dir}`)) {
      if (file.endsWith('.echo.php')) {
        test(dir, file.replace('.echo.php', ''))
        continue
      }
      if (file.endsWith('.in.php')) {
        test(dir, file.replace('.in.php', ''))
        continue
      }
      if (file.endsWith('.out.php')) {
        continue
      }
      throw new Error(`Unknown file: tests/${dir}/${file}`)
    }
  })
}
