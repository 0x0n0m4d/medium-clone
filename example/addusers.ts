import { v5 as uuidv5 } from 'uuid';
import prisma from '../src/lib/prismadb';
import { NAMESPACE } from '../src/lib/utils';

const users = [
  {
    id: uuidv5('@Medium', NAMESPACE),
    email: 'goat@medium.com',
    name: 'Medium',
    username: '@Medium',
    photoUrl: 'http://localhost:3000/assets/users/@Medium/avatar.png',
    bio: 'Everyone’s stories and ideas',
    isMember: false,
    isFriend: false
  },
  {
    id: uuidv5('@MediumStaff', NAMESPACE),
    email: 'staff@medium.com',
    name: 'Medium Staff',
    username: '@MediumStaff',
    photoUrl: 'http://localhost:3000/assets/users/@MediumStaff/avatar.png',
    bio: 'Official account for news and updates from Medium.',
    isMember: true,
    imFriend: false
  },
  {
    id: uuidv5('@dailynewsletter', NAMESPACE),
    email: 'newsletter@medium.com',
    name: 'The Medium Newsletter',
    username: '@dailynewsletter',
    photoUrl: 'http://localhost:3000/assets/users/@dailynewsletter/avatar.png',
    bio: '',
    isMember: false,
    isFriend: true
  }
];

async function creatingUsers() {
  users.map(async user => {
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
    console.log(user.id);
  });
}

async function main() {
  console.log('[+] Adding users to database!');
  await creatingUsers();
}

main();
