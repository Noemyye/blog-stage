import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), 'data')

export function getAllArticleSlugs() {
  return fs.readdirSync(articlesDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

export function getArticleBySlug(slug: string) {
  const filePath = path.join(articlesDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return {
    frontmatter: data,
    content,
  }
}
