import { Text } from 'react-native';

type Props = {
  text: string
}

export function Card({ text }: Props) {
  return (
    <Text>{text}</Text>
  );
}
