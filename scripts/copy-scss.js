import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const srcDir = path.resolve(__dirname, '../src/styles')
const destDir = path.resolve(__dirname, '../dist/styles')

const filesToCopy = ['forward.scss', 'mixins.scss', 'variables.scss', 'typography.scss']

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true })
}

filesToCopy.forEach((fileName) => {
  const srcFile = path.resolve(srcDir, fileName)
  const destFile = path.resolve(destDir, fileName)

  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile)
    console.log(`✅ Copied ${fileName} to dist/styles/`)
  } else {
    console.warn(`⚠️ Source file not found: ${srcFile}`)
  }
})
