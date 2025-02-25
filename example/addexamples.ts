import { v5 as uuidv5 } from 'uuid';
import prisma from '../src/lib/prismadb';
import { NAMESPACE } from '../src/lib/utils';

const users = [
  {
    id: uuidv5('@Medium', NAMESPACE),
    email: 'goat@medium.com',
    name: 'Medium',
    username: '@Medium',
    photoUrl: '/assets/users/@Medium/avatar.jpeg',
    bio: 'Everyone’s stories and ideas',
    isMember: false,
    isFriend: false
  },
  {
    id: uuidv5('@MediumStaff', NAMESPACE),
    email: 'staff@medium.com',
    name: 'Medium Staff',
    username: '@MediumStaff',
    photoUrl: '/assets/users/@MediumStaff/avatar.jpeg',
    bio: 'Official account for news and updates from Medium.',
    isMember: true,
    imFriend: false
  },
  {
    id: uuidv5('@dailynewsletter', NAMESPACE),
    email: 'newsletter@medium.com',
    name: 'The Medium Newsletter',
    username: '@dailynewsletter',
    photoUrl: '/assets/users/@dailynewsletter/avatar.jpeg',
    bio: '',
    isMember: false,
    isFriend: true
  }
];

const articles = [
  {
    id: uuidv5(
      'media-manipulation-lookalike-contests-and-fabricated-outrage',
      NAMESPACE
    ),
    userId: users[2].id,
    user: users[2],
    createdAt: new Date(),
    title: 'Media manipulation, lookalike contests, and fabricated outrage',
    description: 'Issue #228: how to reflect on your year + avoid stress'
  }
];

async function addUsers() {
  users.map(async user => {
    console.log(user.id);
    await prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
        photoUrl: user.photoUrl,
        bio: user.bio,
        isMember: user.isMember,
        isFriend: user.isFriend
      }
    });
  });
}

async function addContent() {
  articles.map(async article => {
    await prisma.article.create({
      data: {
        id: article.id,
        userId: article.userId,
        createdAt: article.createdAt,
        title: article.title,
        description: article.description
      }
    });
  });
}

async function main() {
  console.log('[+] Adding users to database!');
  await addUsers();
  console.log('[+] Adding articles to database!');
  await addContent();
}

main();
