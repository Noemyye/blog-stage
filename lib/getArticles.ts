import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'data')

export function getAllArticleSlugs() {
  const slugs = fs.readdirSync(articlesDirectory)
    .filter(filename => filename.endsWith('.md'))
    .map(filename => filename.replace(/\.md$/, ''))
  console.log('Slugs:', slugs)
  return slugs
}

export function getArticleBySlug(slug: string) {
  const fullPath = path.join(articlesDirectory, `${slug}.md`)
  console.log('Reading file:', fullPath)
  if (!fs.existsSync(fullPath)) {
    console.warn('File does not exist:', fullPath)
    return null
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontmatter, content } = matter(fileContents)
  console.log('Frontmatter:', frontmatter)
  return { frontmatter, content }
}
