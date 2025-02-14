import { useContext } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import AuthContext from '@/contexts/AuthContext';
import Menu from './Menu';
import UserMenu from './UserMenu';

const AvatarButton = () => {
  const { user } = useContext(AuthContext);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none relative border border-solid border-gray-200 rounded-full">
        <div className="w-full h-full rounded-full absolute hover:bg-black/10" />
        <Image
          src="/assets/default-avatar.png"
          alt="Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        {user ? (
          <UserMenu username={user.username} email={user.email} />
        ) : (
          <Menu />
        )}
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default AvatarButton;
