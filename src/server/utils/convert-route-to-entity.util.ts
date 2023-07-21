const mapping: Record<string, string> = {
  'anime-contents': 'anime_content',
  clients: 'client',
  users: 'user',
  'user-interactions': 'user_interaction',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
