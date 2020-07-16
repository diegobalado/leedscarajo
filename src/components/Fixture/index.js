import React, { useState, useEffect } from 'react';
import { DataTable, Text, Select } from 'grommet';
import dateFnsFormat from 'date-fns/format';
import { useEndpoint } from '../../utils/hooks';
import { matchesSelector, teamsSelector } from '../../utils/selectors';
import Bettings from '../Bettings';

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
  const [value, setValue] = useState(null);
  const [home, setHome] = useState(null);
  const [away, setAway] = useState(null);
  const [matchesData, setMatchesData] = useState(parseMatches(null));
  const [filterTerms, setFilterTerms] = useState(null);
  const [show, setShow] = useState(false);

  const { data: matches } = useEndpoint('FIXTURE', matchesSelector);
  const { data: teams } = useEndpoint('TEAMS', teamsSelector);

  useEffect(() => {
    matches && setMatchesData(parseMatches(matches));
  }, [matches]);
  
  useEffect(() => {
    matchesData && value && setMatchesData(filter(parseMatches(matches), value));
  }, [value]);

  useEffect(() => {
    teams && setFilterTerms(parseTeams(teams));
  }, [teams]);

  return !matchesData|| !teams || !filterTerms ? <div>Loading...</div> : 
    <>
      <Select
        options={filterTerms}
        value={value}
        onChange={({ option }) => setValue(option)}
        onSearch={text => {
          const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
          const exp = new RegExp(escapedText, 'i');
          setFilterTerms(parseTeams(teams).filter(o => exp.test(o)));
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
        onClickRow={({ datum }) => {
          setHome(datum.home);
          setAway(datum.away);
          setShow(true);
        }}
      />
      {show && <Bettings setShow={setShow} home={home} away={away} />}
    </>;
};

export default Fixture;