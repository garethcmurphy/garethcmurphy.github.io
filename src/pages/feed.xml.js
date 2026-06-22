import rss from '@astrojs/rss';
import { site } from '../data/site';
import { getPosts } from '../utils/posts';

export function GET(context) {
  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: getPosts().slice(0, 10).map((post) => ({
      title: post.title,
      description: post.excerpt,
      pubDate: post.date,
      link: post.url,
      categories: post.categories,
    })),
  });
}
