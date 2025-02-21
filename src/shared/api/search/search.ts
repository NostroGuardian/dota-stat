import { httpClient } from '../httpClient/client';
import { IPlayer } from './models';

const UNIT = 'search';

export const searchPlayers = async (query: string): Promise<IPlayer[]> => {
	return httpClient.get<IPlayer[]>(UNIT, { params: { q: query } }).then((res) => res.data);
};
