import { getData } from '@/app/lib/_contentful/getData';
import { client } from '@/app/lib/_contentful/contentfulClient';
import { EntrySkeletonType } from 'contentful';

const BlogContents = async ({
  params
}: {
  params: { slug: string }
}) => {

  // const blogs = await getData();
  // const id = blogs.items.map((item) => {
  //   const test = item.fields.slug === params.slug;
  //   if (test) {
  //     return item.sys.id;
  //   }
  // });

  // console.log(id) // 5RHcmBskEk5OyPAKmBCo1Z を期待


  // const getBody = async () => {
  //   const body: any = await client.getEntries({
  //     content_type: 'postBlog',
  //     "sys.id": id[1]
  //   })
  //   return body
  // }
  // const body = await getBody();
  const blogs = await getData();
  const id = blogs.items.find((item) => item.fields.slug === params.slug)?.sys.id;
  let blogBody: any;

  if (id) {
    const getBody = async () => {
      const body = await client.getEntries<EntrySkeletonType>({
        content_type: 'postBlog',
        'sys.id': id // 動的にIDを指定
      });
      return body;
    };
    const body = await getBody();

    blogBody = body;
  } else {
    return null;
  }


  return (
    <div>
      <div className='text-3xl font-bold'>{params.slug}</div>
      {blogBody.items[0].fields.body}
    </div >
  );
}

export default BlogContents;