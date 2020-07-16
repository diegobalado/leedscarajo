import { atom } from 'recoil';

export const standings = atom({ key: 'STANDINGS', default: null });
export const fixture = atom({ key: 'FIXTURE', default: null });
export const teams = atom({ key: 'TEAMS', default: null });
const FETCHING_STANDINGS = atom({ key: 'fetchingStandings', default: false });
const FETCHING_FIXTURE = atom({ key: 'fetchingFixture', default: false });
const FETCHING_TEAMS = atom({ key: 'fetchingTeams', default: false });

export const getAtom = atomKey => {
  const atoms = {
    STANDINGS: standings,
    FIXTURE: fixture,
    TEAMS: teams,
    FETCHING_STANDINGS,
    FETCHING_FIXTURE,
    FETCHING_TEAMS,
  };
  return atoms[atomKey];
};