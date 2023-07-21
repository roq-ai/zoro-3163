import { AnimeContentInterface } from 'interfaces/anime-content';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface UserInteractionInterface {
  id?: string;
  content_id?: string;
  user_id?: string;
  interaction_type: string;
  created_at?: any;
  updated_at?: any;

  anime_content?: AnimeContentInterface;
  user?: UserInterface;
  _count?: {};
}

export interface UserInteractionGetQueryInterface extends GetQueryInterface {
  id?: string;
  content_id?: string;
  user_id?: string;
  interaction_type?: string;
}
