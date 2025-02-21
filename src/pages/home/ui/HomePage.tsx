import { PlayerSearch } from '@/features/playerSearch';
import { Offer } from '@/widgets/offer';
import { Center, Stack } from '@chakra-ui/react';

export const HomePage = () => {
	return (
		<Stack gap="40px">
			<Offer />

			<Center>
				<PlayerSearch />
			</Center>
		</Stack>
	);
};
