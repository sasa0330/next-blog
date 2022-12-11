import Link from 'next/link'
import Image from 'next/image'
import { client } from "../libs/client";

export default function Home({ blogs }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-2.5">記事一覧</h1>
      <ul className="flex flex-wrap justify-between after:content-[''] after:w-72">
        {blogs.map((blog) => {

          const blogId = blog.id;
          const blogEyecatchUrl = blog.eyecatch ? blog.eyecatch.url : "";
          const blogTitle = blog.title;

          return (
            <li key={blogId} className="border w-72 p-1.5 mb-1.5" >
              <Link href={`/blog/${blogId}`}>
                <div className="border">
                  {
                    blogEyecatchUrl ? <Image className="w-full h-auto" src={blogEyecatchUrl} alt={blogTitle} width={200} height={100} /> : null
                  }
                </div>
                <h2 className="font-bold">{blogTitle}</h2>
              </Link>
            </li>
          )
        })}
      </ul>
    </div >
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data)
  return {
    props: {
      blogs: data.contents,
    },
  };
};