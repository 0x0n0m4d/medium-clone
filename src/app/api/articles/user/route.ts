import { NextRequest, NextResponse } from 'next/server';
import { getUserArticlesAction } from '@/actions/article.action';

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const username = searchParams.get('username');

  if (!username)
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });

  try {
    const articles = await getUserArticlesAction({
      username: username,
      size: 3
    });
    return NextResponse.json({ articles: articles });
  } catch (err) {
    console.log('[ERROR_GET_USER_ARTICLES]', err);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
};
