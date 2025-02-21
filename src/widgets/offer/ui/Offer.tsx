import { Center, Heading, Stack, Text } from '@chakra-ui/react';

export const Offer = () => {
	return (
		<Center>
			<Stack textAlign="center">
				<Heading textTransform="uppercase" size="5xl" fontWeight="bold">
					Dota Stats
				</Heading>
				<Text width="600px" fontSize="lg" color="fg.muted">
					Полный анализ твоих игр, статистика героев, графики прогресса и многое
					другое. Узнай свои сильные стороны, выяви слабые места и стань настоящим
					профессионалом в любимой игре.
				</Text>
			</Stack>
		</Center>
	);
};
