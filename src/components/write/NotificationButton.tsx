import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { NotificationsIcon } from '@/atoms/icons';

const NotificationButton = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none text-stone-600 hover:text-stone-900">
        <NotificationsIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="w-[360px] rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade py-5 px-5 z-20"
        sideOffset={5}
      >
        <DropdownMenu.Item className="outline-none w-full flex items-center justify-center py-10">
          <p className="text-sm text-center text-stone-500">
            No notifications yet.
          </p>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default NotificationButton;
