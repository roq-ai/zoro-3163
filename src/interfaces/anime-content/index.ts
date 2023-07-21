import { UserInteractionInterface } from 'interfaces/user-interaction';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AnimeContentInterface {
  id?: string;
  title: string;
  description?: string;
  image?: string;
  content_creator_id?: string;
  created_at?: any;
  updated_at?: any;
  user_interaction?: UserInteractionInterface[];
  user?: UserInterface;
  _count?: {
    user_interaction?: number;
  };
}

export interface AnimeContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  content_creator_id?: string;
}
