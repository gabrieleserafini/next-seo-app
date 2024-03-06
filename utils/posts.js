import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const BLOG_DIR = join(process.cwd(), '/content/blog');

const load = () => {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = Promise.all(
    files
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const match = filename.match(/^(.+?)_([a-z]{2})\.md$/);
        if (!match) return null;
        const [, slug, locale] = match;
        return await findPostBySlug(slug, locale);
      })
      .filter(Boolean),
  );

  return posts;
};
let _posts;

/** */
export const fetchPosts = async () => {
  _posts = _posts || load();

  return await _posts;
};

/** */
export const findLatestPosts = async ({ count = 4, locale }) => {
  const posts = await fetchPosts();
  const filteredPosts = posts.filter(post => post.locale === locale);

  return filteredPosts.slice(-count);
};

/** */
export const findPostBySlug = async (slug, locale) => {
  
  if (!slug) return null;

  const filename = `${slug}_${locale}.md`;

  try {
    const readFile = fs.readFileSync(join(BLOG_DIR, filename), 'utf-8');
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      locale,
      ...frontmatter,
      content,
    };
  } catch (e) {
    console.error(e);
  }

  return null;
};

/** */
export const findPostsByIds = async (ids) => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r, id) {
    posts.some(function (post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};
