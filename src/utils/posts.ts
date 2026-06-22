type MarkdownModule = {
  Content: unknown;
  frontmatter: {
    title?: string;
    date?: string | Date;
    categories?: string[] | string;
  };
};

const postModules = import.meta.glob('../../_posts/*.{md,markdown}', {
  eager: true,
}) as Record<string, MarkdownModule>;
const rawPostModules = import.meta.glob('../../_posts/*.{md,markdown}', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>;

const excerptLength = 160;

const stripFrontmatter = (content: string) => content.replace(/^---[\s\S]*?---\s*/, '');

const stripMarkdown = (content: string) =>
  stripFrontmatter(content)
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`{1,3}[^`]*`{1,3}/g, ' ')
    .replace(/[*_>#]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const buildExcerpt = (content: string) => {
  const plainText = stripMarkdown(content);

  if (plainText.length <= excerptLength) {
    return plainText;
  }

  const truncated = plainText.slice(0, excerptLength);
  return `${truncated.slice(0, truncated.lastIndexOf(' '))}…`;
};

const parseDate = (value: string | Date | undefined, filePath: string) => {
  if (value instanceof Date) {
    return value;
  }

  if (value) {
    return new Date(value);
  }

  const fileName = filePath.split('/').pop() ?? '';
  const match = /^(\d{4})-(\d{2})-(\d{2})-/.exec(fileName);
  return new Date(`${match?.[1] ?? '1970'}-${match?.[2] ?? '01'}-${match?.[3] ?? '01'}T00:00:00Z`);
};

const parseCategories = (value: string[] | string | undefined) => {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value.flatMap((entry) => parseCategories(entry));
  }

  return value.includes(',')
    ? value
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean)
    : value
        .split(/\s+/)
        .map((entry) => entry.trim())
        .filter(Boolean);
};

const getPostPath = (filePath: string, date: Date) => {
  const fileName = filePath.split('/').pop() ?? '';
  const match = /^\d{4}-\d{2}-\d{2}-(.+)\.(?:md|markdown)$/.exec(fileName);

  if (!match) {
    throw new Error(`Unexpected post filename: ${fileName}`);
  }

  const year = date.getUTCFullYear();
  const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
  const day = `${date.getUTCDate()}`.padStart(2, '0');

  return `${year}/${month}/${day}/${match[1]}/`;
};

export const formatPostDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);

export const getPosts = () =>
  Object.entries(postModules)
    .map(([filePath, module]) => {
      const rawContent = rawPostModules[filePath] ?? '';
      const date = parseDate(module.frontmatter.date, filePath);
      const path = getPostPath(filePath, date);

      return {
        Content: module.Content,
        categories: parseCategories(module.frontmatter.categories),
        date,
        excerpt: buildExcerpt(rawContent),
        title: module.frontmatter.title ?? 'Untitled',
        url: `/${path}`,
        path,
      };
    })
    .sort((left, right) => right.date.getTime() - left.date.getTime());
