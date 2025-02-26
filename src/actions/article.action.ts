import { v5 as uuidv5 } from 'uuid';
import {
  GetArticlesProps,
  GetUserArticlesProps
} from '@/interfaces/article.interface';
import prisma from '@/lib/prismadb';
import { NAMESPACE } from '@/lib/utils';
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

export async function getUserArticlesAction({
  username,
  size = 10
}: GetUserArticlesProps): Promise<GetArticlesType> {
  try {
    if (!username) throw new Error('username required');

    const userId = uuidv5(username, NAMESPACE);

    const data = await prisma.article.findMany({
      where: {
        userId
      },
      take: size
    });
    return data;
  } catch (err) {
    console.log('[ERROR_GET_ARTICLES_ACTION]', err);
  }
}
