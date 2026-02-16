import { memo, type FC } from 'react';
import { Box, Stack, Text, Button } from '@chakra-ui/react';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useAuth } from '../../hooks/useAuth';

export const Setting: FC = memo(() => {
  const { loginUser } = useLoginUser();
  const { logout } = useAuth();

  if (!loginUser) return null;

  return (
    <Box w="100%" minH="100vh" bg="gray.100" p={6}>
      <Stack
        spacing={6}
        maxW="500px"
        mx="auto"
        bg="white"
        p={6}
        borderRadius="md"
        shadow="md"
      >
        <Stack spacing={1} textAlign="center">
          <Text fontWeight="bold" fontSize="3xl" color="black">
            {loginUser.name}
          </Text>
          <Text fontSize="md" color="gray.500">
            {loginUser.email}
          </Text>
        </Stack>

        <Button onClick={logout} colorScheme="red">
          ログアウト
        </Button>
      </Stack>
    </Box>
  );
});
