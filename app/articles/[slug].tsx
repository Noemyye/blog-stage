import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default function ArticlePage({ content, metadata }) {
  return (
    <article className="prose mx-auto p-6">
      <h1>{metadata.title}</h1>
      <p><em>{metadata.date}</em></p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'data'));
  const paths = files
    .filter(name => name.endsWith('.md'))
    .map(name => ({
      params: { slug: name.replace('.md', '') },
    }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: metadata, content: markdownContent } = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(markdownContent);

  return {
    props: {
      content: processedContent.toString(),
      metadata,
    },
  };
}
