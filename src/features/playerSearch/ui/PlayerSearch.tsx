import { InputGroup } from '@/app/chakraSnippets/input-group';
import { Box, Input, Kbd, List, Spinner, Stack } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';

import { usePlayerSearch } from '../model/usePlayerSearch';
import { PlayerListItem } from './PlayerListItem';

export const PlayerSearch = () => {
	const { searchQuery, isLoading, searchResults, handleInputChange } = usePlayerSearch();

	return (
		<Stack position="relative">
			<InputGroup
				flex="1"
				startElement={isLoading ? <Spinner size="xs" /> : <LuSearch />}
				endElement={<Kbd size="sm">Enter ⏎</Kbd>}
			>
				<Input
					placeholder="Введи свой ник"
					width="300px"
					size="lg"
					outline="none"
					_focus={{ border: '1px solid #34343a' }}
					value={searchQuery}
					onChange={handleInputChange}
				/>
			</InputGroup>

			{searchResults.length > 0 && (
				<Box
					position="absolute"
					top="100%"
					width="100%"
					borderRadius="md"
					zIndex="dropdown"
				>
					<List.Root gap="10px" p="10px">
						{searchResults.slice(0, 7).map((player) => (
							<PlayerListItem key={player.account_id} player={player} />
						))}
					</List.Root>
				</Box>
			)}
		</Stack>
	);
};
