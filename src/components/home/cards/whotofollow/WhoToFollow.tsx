'use client';

import { ReactNode, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@prisma/client';
import Link from 'next/link';
import AuthContext from '@/contexts/AuthContext';
import { getUsersData } from '@/redux/slices/usersData.slice';
import { AppDispatch } from '@/redux/store';
import LoadingWhoToFollow from './LoadingWhoToFollow';
import WhoToFollowContainer from './WhoToFollowContainer';

const WhoToFollow = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, error } = useContext(AuthContext);
  const [userIsLogged, setUserIsLogged] = useState<boolean | null>(null);
  const [usersToFollow, setUsersToFollow] = useState<User[] | undefined>(
    undefined
  );

  const Content = (): ReactNode => {
    if (error) {
      return <div className="hidden" />;
    }
    if (
      userIsLogged === false ||
      (usersToFollow !== undefined && usersToFollow.length === 0)
    ) {
      return <div className="hidden" />;
    }
    if (usersToFollow === undefined) {
      return <LoadingWhoToFollow />;
    }

    return (
      <div className="w-full flex flex-col gap-y-7 pt-7">
        <h2 className="font-bold text-base text-start">Who to follow</h2>
        <div className="w-full flex flex-col gap-y-7">
          {usersToFollow.map((user: User) => {
            return (
              <div className="h-full min-w-full flex" key={user.username}>
                <WhoToFollowContainer
                  avatar={user.photoUrl}
                  name={user.name}
                  username={user.username}
                  description={user.bio ?? ''}
                />
              </div>
            );
          })}
        </div>
        <Link
          href="/me/following/suggestions"
          className="text-start text-sm text-stone-500 hover:underline"
        >
          See more suggestions
        </Link>
      </div>
    );
  };

  useEffect(() => {
    if (userIsLogged === null) {
      if (user) {
        dispatch(getUsersData(user.id)).then(res => {
          setUsersToFollow(res.payload);
          setUserIsLogged(true);
        });
      } else if (user === null) {
        setUserIsLogged(false);
      }
    }
  }, [user, userIsLogged]);

  return userIsLogged === null ? <LoadingWhoToFollow /> : <Content />;
};

export default WhoToFollow;
