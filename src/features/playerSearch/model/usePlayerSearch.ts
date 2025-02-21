import { searchPlayers } from '@/shared/api';
import { IPlayer } from '@/shared/api/search/models';
import { ChangeEvent, useEffect, useState } from 'react';

export const usePlayerSearch = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [searchResults, setSearchResults] = useState<IPlayer[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchSuggestions = async () => {
			if (searchQuery.length < 2) {
				setSearchResults([]);
				return;
			}

			try {
				setIsLoading(true);
				const data = await searchPlayers(searchQuery);
				setSearchResults(data);
			} catch (e) {
				console.log(e);
				setSearchResults([]);
			} finally {
				setIsLoading(false);
			}
		};

		const debounceTimer = setTimeout(fetchSuggestions, 300);
		return () => clearTimeout(debounceTimer);
	}, [searchQuery]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchQuery(e.target.value);

	return {
		searchQuery,
		isLoading,
		searchResults,
		handleInputChange,
	};
};
