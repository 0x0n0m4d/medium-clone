'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Article } from '@prisma/client';
import Link from 'next/link';
import { getUsersArticlesData } from '@/redux/slices/articlesData.slice';
import { AppDispatch } from '@/redux/store';
import PicksContainer from './PicksContainer';

const StaffPicks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [staffArticles, setStaffArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (staffArticles.length <= 0) {
      dispatch(getUsersArticlesData('@MediumStaff')).then(res => {
        setStaffArticles([...res.payload]);
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-y-7 pt-7">
      <Link href="#/@MediumStaff/list/staff-picks">
        <h2 className="text-start font-bold text-base">Staff Picks</h2>
      </Link>
      <div className="w-full flex flex-col gap-y-7">
        {staffArticles.map((article, index) => (
          <span key={index}>
            <PicksContainer
              avatar="/assets/users/@MediumStaff/avatar.jpeg"
              user="Medium Staff"
              title={article.title}
              publishedDate={article.createdAt}
            />
          </span>
        ))}
      </div>
      <Link
        href="#/@MediumStaff/list/staff-picks"
        className="text-start text-sm text-stone-500 hover:underline"
      >
        See the full list
      </Link>
    </div>
  );
};

export default StaffPicks;
