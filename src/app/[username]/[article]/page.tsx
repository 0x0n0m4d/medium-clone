'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Article, User } from '@prisma/client';
import { usePathname, useRouter } from 'next/navigation';
import RenderArticle from '@/components/articles/RenderArticle';
import Loading from '@/components/Loading';
import { getUniqueArticleData } from '@/redux/slices/articlesData.slice';
import { getUniqueUserData } from '@/redux/slices/usersData.slice';
import { AppDispatch } from '@/redux/store';

type ArticleData = {
  metadata: Article;
  content: string;
};

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const [contentExists, setContentExists] = useState<boolean | null>(null);
  const [article, setArticle] = useState<ArticleData>();
  const [writer, setWriter] = useState<User>();

  const Content = (): ReactNode => {
    if (!contentExists) {
      router.push('/');
      window.location.reload();
    }

    return (
      <RenderArticle
        writer={writer!}
        metadata={article!.metadata}
        content={article!.content}
      />
    );
  };

  useEffect(() => {
    if (contentExists === null) {
      const username = pathname.split('/')[1];
      const title = pathname.split('/')[2];
      dispatch(getUniqueArticleData({ title: title, username: username })).then(
        (res: any) => {
          if (res.payload.metadata[0] && res.payload.content) {
            setArticle({
              metadata: res.payload.metadata[0],
              content: res.payload.content
            });
            dispatch(getUniqueUserData(res.payload.metadata[0].userId)).then(
              res => {
                if (res.payload) {
                  setWriter(res.payload);
                  setContentExists(true);
                } else {
                  setContentExists(false);
                }
              }
            );
          } else {
            setContentExists(false);
          }
        }
      );
    }
  }, [contentExists]);

  return contentExists === null ? <Loading /> : <Content />;
};

export default Page;
