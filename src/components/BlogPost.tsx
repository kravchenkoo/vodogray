import StrapiImage from '@/components/StrapiImage'

type Post = {
  post: {
    id: string
    title: string
    description: string
    before: {
      url: string
      caption: string
    }
    after: {
      url: string
      caption: string
    }
  }
  dict: {
    blog: {
      before: string
      after: string
    }
  }
}

function BlogPost({ post, dict }: Post) {
  const beforeImg = post.before
  const afterImg = post.after
  return (
    <div className="bg-gray-0 border rounded-md border-gray-100 border-r-md md:p-[2.4rem_3.2rem_3.2rem] p-[1.4rem_1rem_1.2rem] flex flex-col gap-[2.4rem]">
      <h2 className="text-4xl">{post.title}</h2>
      <p className="text-gray-700 text-xl">{post.description}</p>
      <div>
        <span className="text-xl text-gray-600">{dict.blog.before}</span>
        <StrapiImage
          alt={beforeImg?.caption}
          className="inset-0 w-full"
          height={1080}
          src={beforeImg?.url}
          width={1920}
        />
      </div>
      <div>
        <span className="text-xl text-gray-600">{dict.blog.after}</span>
        <StrapiImage
          alt={afterImg?.caption}
          className="inset-0 w-full"
          height={1080}
          src={afterImg?.url}
          width={1920}
        />
      </div>
    </div>
  )
}

export default BlogPost
