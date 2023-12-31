const mapping: Record<string, string> = {
  academies: 'academy',
  players: 'player',
  'player-profiles': 'player_profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
