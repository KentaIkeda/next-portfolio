import React from 'react';
import { getAllData } from '@/app/lib/_contentful/getData';
import { client } from '@/app/lib/_contentful/contentfulClient';
import { EntrySkeletonType } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, INLINES, MARKS, Text } from '@contentful/rich-text-types';
import Image from 'next/image';
import * as B from '@/app/_components/(blogs)/(ui)/uis';
import * as S from '@/app/_components/(blogs)/(ui)/OL_ULstyle';
import { notoSansJP } from '@/app/lib/fonts';
import BackButton from '@/app/_components/(blogs)/backButton';


const BlogContents = async ({
  params
}: {
  params: { slug: string }
}) => {

  const blogs = await getAllData();
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
    <div id='blog-body' className='w-full h-full mb-20'>
      <h2 className='font-semibold text-center text-xl'>
        <strong>
          {blogBody.items[0].fields.title}
        </strong>
      </h2>
      <div className={`w-[70%] mx-auto tracking-wide ${S.ulStyle} ${S.olStyle} ${notoSansJP.className}`}>
        {documentToReactComponents(blogBody.items[0].fields.richText, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
              if (
                node.content.length === 1 &&
                (node.content[0] as Text).marks.find((x) => x.type === "code")
              ) {
                return <div><pre>{children}</pre></div>;
              }
              return <p>{children}</p>;
            },
            [BLOCKS.HEADING_1]: (_, children) => <B.HEADING_1 text={children} />,
            [BLOCKS.HEADING_2]: (_, children) => <B.HEADING_2 text={children} />,
            [BLOCKS.HEADING_3]: (_, children) => <B.HEADING_3 text={children} />,
            [BLOCKS.EMBEDDED_ASSET]: node => ( // imageの設定, width, heightの設定変更しよう
              <div className='relative w-[50%] h-auto mx-auto my-10'>
                <Image
                  src={`https:${node.data.target.fields.file.url}`}
                  width={500}
                  height={500}
                  alt='img'
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>
            ),
            [BLOCKS.OL_LIST]: (node) =>  {
              const UnTaggedChildren = documentToReactComponents((node as Document), {
                renderNode: {
                  [BLOCKS.PARAGRAPH]: (_, children) => children,
                  [BLOCKS.LIST_ITEM]: (_, children) => <li className='my-0.5'>{children}</li>,
                },
              });
              return <>{UnTaggedChildren}</>;
            },
            [BLOCKS.UL_LIST]: (node) => {
              const UnTaggedChildren = documentToReactComponents((node as Document), {
                renderNode: {
                  [BLOCKS.PARAGRAPH]: (_, children) => children,
                  [BLOCKS.LIST_ITEM]: (_, children) => <li className='my-0.5'>{children}</li>,
                },
              });
              return <>{UnTaggedChildren}</>;
            },
            [BLOCKS.HR]: () => <B.HR />,
            [INLINES.HYPERLINK]: (node, children) => <B.HYPERLINK link={node.data.uri} text={children} />,
          },
          renderMark: {
            [MARKS.BOLD]: text => <B.BOLD text={text} />,
            [MARKS.ITALIC]: text => <B.ITALIC text={text} />,
            [MARKS.UNDERLINE]: text => <B.UNDERLINE text={text} />,
            [MARKS.SUPERSCRIPT]: text => <B.SUPERSCRIPT text={text} />,
            [MARKS.SUBSCRIPT]: text => <B.SUBSCRIPT text={text} />,
            [MARKS.CODE]: text => <B.CODE text={text} />,
          },
        })}
        <div className='mt-8'>
          <BackButton />
        </div>
      </div>
    </div >
  );
}

export default BlogContents;