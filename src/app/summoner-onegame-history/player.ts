import { Players } from './players';
import { Team } from './team';
import { Detail } from './detail';
export interface Player{
	gameMode: string;
	gameId: number;
	participantIdentities: Array<Players>;
	teams: Array<Team>;
	participants: Array<Detail>;
	gameDuration: number;
	gameCreation: number;
}