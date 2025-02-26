'use client';

import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Article, User } from '@prisma/client';
import { getUserDataAction } from '@/actions/user.action';
import AuthContext from '@/contexts/AuthContext';
import { getArticlesData } from '@/redux/slices/articlesData.slice';
import { AppDispatch } from '@/redux/store';
import ArticlesCard from './cards/ArticlesCard';
import NavTag from './NavTag';

type ArticlesBunchType = {
  article: Article;
  writer: User;
};

const RightBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const articlesData = useSelector((state: any) => state.articlesData);
  const { user } = useContext(AuthContext);
  const [articlesBunch, setArticlesBunch] = useState<ArticlesBunchType[]>([]);

  useEffect(() => {
    if (!articlesData.data && !articlesData.isLoading && user) {
      dispatch(getArticlesData(user.id)).then(res => {
        res.payload.map(async (article: Article) => {
          await getUserDataAction({ id: article.userId })
            .then(writer => {
              if (writer?.isActivated) {
                articlesBunch.push({ article: article, writer: writer });
              }
            })
            .finally(() => {
              setArticlesBunch([...articlesBunch]);
            });
        });
      });
    }
  }, []);

  return (
    <div className="w-full min-w-[573px] max-w-[728px] h-full flex flex-col items-start justify-start px-10 pt-16">
      <NavTag />
      <ul className="grid w-full min-h-screen h-full mt-16">
        {articlesBunch.map((data: ArticlesBunchType, index) => (
          <li key={index}>
            <ArticlesCard
              user={data.writer}
              title={data.article.title}
              description={data.article.description}
              createdAt={data.article.createdAt.toString()}
              claps={0}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightBar;
