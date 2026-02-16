import { memo, type FC } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickSetting,
    onClickUserManagement,
  } = props;

  const handleClick = (callback: () => void) => () => {
    onClose();
    callback();
  };

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%" onClick={handleClick(onClickHome)}>
            TOP
          </Button>
          <Button w="100%" onClick={handleClick(onClickUserManagement)}>
            ユーザー一覧
          </Button>
          <Button w="100%" onClick={handleClick(onClickSetting)}>
            設定
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
