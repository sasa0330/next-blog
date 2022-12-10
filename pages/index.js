import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <div>{blog.title}</div>
            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data)
  return {
    props: {
      blog: data.contents,
    },
  };
};