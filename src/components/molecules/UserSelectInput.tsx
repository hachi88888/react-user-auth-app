import { ChangeEvent, type FC } from 'react';
import { Select } from '@chakra-ui/react';
import { User } from '../../types/api/user';

type Props = {
  userId: string;
  onSelect: (id: string) => void;
  users: User[];
};

export const UserSelectInput: FC<Props> = ({ userId, onSelect, users }) => {
  const onChangeUser = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <Select placeholder="ユーザーを選択" value={userId} onChange={onChangeUser}>
      {users.map((user) => (
        <option key={user.id} value={user.id.toString()}>
          {user.name}
        </option>
      ))}
    </Select>
  );
};
