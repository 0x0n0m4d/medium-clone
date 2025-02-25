import { NextRequest, NextResponse } from 'next/server';
import { getArticlesAction } from '@/actions/article.action';

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const userId = searchParams.get('id');

  if (!userId)
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });

  try {
    const articlesBunch = await getArticlesAction({ id: userId });

    if (!articlesBunch)
      return NextResponse.json(
        { error: 'Error when gathering the articles' },
        { status: 500 }
      );

    return NextResponse.json({ articles: articlesBunch });
  } catch (err) {
    console.log('[ERROR_ARTICLES_GET_REQUEST]', err);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
};
