import { getStrapiData } from '@/data/getData';
import BlogPost from '@/components/blogPost';
import { getDictionary } from '@/dictionaries/dictionaries';
type Props = {
  params: Promise<{ lang: string }>;
};
type Post = {
  id: string;
  title: string;
  description: string;
  before: {
    url: string;
    caption: string;
  };
  after: {
    url: string;
    caption: string;
  };
};
type Dict = {
  blog: {
    before: string;
    after: string;
  };
};

export default async function Blog({ params }: Readonly<Props>) {
  const { lang } = await params;
  const locale = lang === 'en' ? 'en' : 'uk';
  const dict: Dict = await getDictionary(lang);
  const strapiData = await getStrapiData(
    `/api/blog?populate[blogPost][populate]=*&locale=${locale}`
  );
  const blogPosts = strapiData.data.blogPost;
  return (
    <div className="flex flex-col gap-16">
      {blogPosts.map((post: Post) => (
        <BlogPost dict={dict} key={post.id} post={post}></BlogPost>
      ))}
    </div>
  );
}
