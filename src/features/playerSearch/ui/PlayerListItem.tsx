import { IPlayer } from '@/shared/api/search/models';
import { Avatar, Box, List, Text } from '@chakra-ui/react';

export const PlayerListItem = ({ player }: { player: IPlayer }) => {
	return (
		<List.Item
			key={player.account_id}
			p="10px"
			gap="10px"
			display="flex"
			alignItems="center"
			borderRadius="md"
			_hover={{ bg: 'gray.900', cursor: 'pointer' }}
		>
			<Avatar.Root background="transparent">
				<Avatar.Fallback name={player.personaname} />
				<Avatar.Image src={player.avatarfull} />
			</Avatar.Root>
			<Box>
				<Text fontWeight="medium">{player.personaname}</Text>
				<Text fontSize="sm" color="fg.subtle">
					{'Последняя игра: ' +
						new Date(player.last_match_time).toLocaleDateString()}
				</Text>
			</Box>
		</List.Item>
	);
};
