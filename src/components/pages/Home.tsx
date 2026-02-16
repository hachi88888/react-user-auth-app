import { memo, type FC } from 'react';

import { useLoginUser } from '../../hooks/useLoginUser';
import { Stack, Text } from '@chakra-ui/react';
import { UserProfileCard } from '../organisms/user/UserProfileCard';

export const Home: FC = memo(() => {
  const { loginUser } = useLoginUser();

  if (!loginUser) return null;

  return (
    <Stack spacing={6} p={6}>
      <Text fontSize="lg">ようこそ、{loginUser.name}さん 👋</Text>
      <UserProfileCard user={loginUser} />
    </Stack>
  );
});
