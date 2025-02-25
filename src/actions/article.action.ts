import { GetArticlesProps } from '@/interfaces/article.interface';
import prisma from '@/lib/prismadb';
import { GetArticlesType } from '@/types/article.type';

export async function getArticlesAction({
  id,
  size = 10
}: GetArticlesProps): Promise<GetArticlesType> {
  try {
    if (!id) throw new Error('id required');

    const data = await prisma.article.findMany({
      where: {
        userId: { not: id }
      },
      take: size
    });
    return data;
  } catch (err) {
    console.log('[ERROR_GET_ARTICLES_ACTION]', err);
  }
}
