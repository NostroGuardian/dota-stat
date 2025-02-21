import { EmptyState } from '@chakra-ui/react';
import { LuSkull } from 'react-icons/lu';

export const NotFoundPage = () => {
	return (
		<EmptyState.Root size="lg">
			<EmptyState.Content>
				<EmptyState.Indicator>
					<LuSkull />
				</EmptyState.Indicator>
				<EmptyState.Title fontSize="3xl">Страница не найдена</EmptyState.Title>
				<EmptyState.Description>
					Вы можете вернуться назад или на главную страницу сайта.
				</EmptyState.Description>
			</EmptyState.Content>
		</EmptyState.Root>
	);
};
