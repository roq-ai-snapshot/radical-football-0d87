import { PlayerProfileInterface } from 'interfaces/player-profile';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  coach_id?: string;
  parent_id?: string;
  created_at?: any;
  updated_at?: any;
  player_profile?: PlayerProfileInterface[];
  user_player_user_idTouser?: UserInterface;
  user_player_coach_idTouser?: UserInterface;
  user_player_parent_idTouser?: UserInterface;
  _count?: {
    player_profile?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  coach_id?: string;
  parent_id?: string;
}
