import React, { useState, useEffect } from 'react';
import { DataTable, Text, Select } from 'grommet';
import dateFnsFormat from 'date-fns/format';
import { useEndpoint } from '../../utils/hooks';
import { matchesSelector, teamsSelector } from '../../utils/selectors';

const parseMatches = data => {
  return data && data.map(match => {
    const matchDate = dateFnsFormat(new Date(match.utcDate), 'EEEE, d MMMM - H:mm');
    return ({
      home: match.homeTeam.name,
      away: match.awayTeam.name,
      date: matchDate,
    });
  });
};

const parseTeams = data => data.map(team => team.name).sort();

const filter = (data, value) => data.filter(({ home, away }) => home === value || away === value);

const Fixture = () => {
  const [value, setValue] = useState('');
  const [matchesData, setMatchesData] = useState(parseMatches(null));
  const [filterTerms, setFilterTerms] = useState(null);
  const { data: matches, loading: loadingMatches } = useEndpoint('FIXTURE', matchesSelector);
  const { data: teams, loading: loadingTeams } = useEndpoint('TEAMS', teamsSelector);

  useEffect(() => {
    !loadingMatches && matches && setMatchesData(parseMatches(matches));
  }, [loadingMatches, matches]);
  
  useEffect(() => {
    matchesData && value && setMatchesData(filter(parseMatches(matches), value));
  }, [value]);

  useEffect(() => {
    teams && setFilterTerms(parseTeams(teams));
  }, [teams]);

  return loadingMatches || !matchesData || loadingTeams || !teams || !filterTerms ? <div>Loading...</div> : 
    <>
      <Select
        options={filterTerms}
        value={value}
        onChange={({ option }) => setValue(option)}
        onSearch={text => {
          const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
          const exp = new RegExp(escapedText, 'i');
          setFilterTerms(parseTeams(teams.teams).filter(o => exp.test(o)));
        }}
      />
      <DataTable
        primaryKey='index'
        columns={[
          {
            property: 'home',
            header: <Text>Home</Text>,
            search: true,
          },
          {
            property: 'away',
            header: <Text>Away</Text>,
            search: true,
          },
          {
            property: 'date',
            header: <Text>Date</Text>,
          },
        ]}
        data={matchesData}
      />
    </>;
};

export default Fixture;