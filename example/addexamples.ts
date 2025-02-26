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
    isMember: true,
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
    createdAt: new Date(2025, 1, 11),
    title: 'Media manipulation, lookalike contests, and fabricated outrage',
    description: 'Issue #228: how to reflect on your year + avoid stress'
  },
  {
    id: uuidv5('making-featured-stories-even-more-visible', NAMESPACE),
    userId: users[1].id,
    createdAt: new Date(2025, 1, 12),
    title: 'Making Featured stories even more visible',
    description:
      'Introducing new push notifications and Featured story feeds for publication followers'
  },
  {
    id: uuidv5(
      'the-day-i-got-a-ketamine-infusion-while-my-house-burned-down',
      NAMESPACE
    ),
    userId: users[1].id,
    createdAt: new Date(2025, 1, 13),
    title: 'The day I got a ketamine infusion while my house burned down.',
    description: ''
  },
  {
    id: uuidv5(
      '8-javaScript-performance-tips-i-discovered-after-years-of-coding',
      NAMESPACE
    ),
    userId: users[1].id,
    createdAt: new Date(2025, 1, 18),
    title: '8 JavaScript Performance Tips I Discovered After Years of Coding',
    description: ''
  }
];

async function addUsers() {
  users.forEach(async user => {
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
  articles.forEach(async article => {
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
  const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

  console.log('[+] Adding users to database!');
  await addUsers();
  await delay(5000);
  console.log('[+] Adding articles to database!');
  await addContent();
}

main();
