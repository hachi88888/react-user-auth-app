import { memo, type FC } from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { User } from '../../../types/api/user';

type Props = {
  user: User;
};

export const UserProfileCard: FC<Props> = memo((props) => {
  const { user } = props;
  return (
    <Box
      bg="white"
      p={8}
      borderRadius="lg"
      shadow="lg"
      textAlign="center"
      maxW="400px"
      w="100%"
      mx="auto"
    >
      <Stack spacing={4} align="center">
        <Image
          borderRadius="full"
          boxSize="140px"
          src="https://images.unsplash.com/photo-1764957079470-afaf381331b6?q=80&w=687"
          alt={user.username}
        />

        <Text fontSize="xl" fontWeight="bold">
          {user.username}
        </Text>
        <Text color="gray.500">{user.name}</Text>
      </Stack>
    </Box>
  );
});
