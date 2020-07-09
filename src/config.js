import dateFnsFormat from 'date-fns/format';

const LEAGUE_CODE = '2016';
const END_LEAGUE = '2020-07-22';
const TODAY = dateFnsFormat(new Date(), 'yyyy-mm-dd');

export const ENDPOINTS = {
  STANDINGS: `competitions/${LEAGUE_CODE}/standings`,
  FIXTURE: `competitions/${LEAGUE_CODE}/matches?dateFrom=${TODAY}&dateTo=${END_LEAGUE}`,
  TEAMS: `competitions/${LEAGUE_CODE}/teams`
};
export const FETCH_OPTIONS = {
  'method': 'GET',
  'headers': {
    'x-auth-token': process.env.REACT_APP_API_FOOTBALL_TOKEN
  }
};