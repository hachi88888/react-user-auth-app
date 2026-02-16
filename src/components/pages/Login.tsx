import { memo, useEffect, useState, type FC } from 'react';
import { Box, Divider, Flex, Heading, Stack } from '@chakra-ui/react';

import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';
import { UserSelectInput } from '../molecules/UserSelectInput';
import { useAllUsers } from '../../hooks/useAllUsers';

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState('');
  const { users, getUsers } = useAllUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <UserSelectInput userId={userId} onSelect={setUserId} users={users} />
          <PrimaryButton
            loading={loading}
            disabled={userId === ''}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
