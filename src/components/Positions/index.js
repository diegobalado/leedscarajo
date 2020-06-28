import React, { useState, useEffect } from 'react';
import { DataTable, Text } from 'grommet';
import data from '../../datasources/points.json';
import teams from '../../datasources/teams.json';

const parseData = data => {
  data.sort((teamA, teamB) => teamA.points < teamB.points);
  return data.map((teamData, index) => ({ ...teamData, 'position': index + 1 }));
};

const Positions = () => {
  const [sort, setSort] = useState({
    property: "points",
    direction: "desc"
  });
  const [leagueData, setLeagueData] = useState([]);

  useEffect(() => {
    setLeagueData(parseData(data));
  }, []);
  
  return (
  <DataTable
    primaryKey='index'
    sort={sort}
    onSort={setSort}
    columns={[
      {
        property: 'position',
        header: <Text>Position</Text>
      },
      {
        property: 'name',
        header: <Text>Team</Text>,
        render: ({ id }) => teams[id]
      },
      {
        property: 'games',
        header: <Text>G</Text>,
      },
      {
        property: 'wins',
        header: <Text>W</Text>,
      },
      {
        property: 'draws',
        header: <Text>D</Text>,
      },
      {
        property: 'loses',
        header: <Text>L</Text>,
      },
      {
        property: 'goal_diff',
        header: <Text>GD</Text>,
      },
      {
        property: 'points',
        header: <Text>P</Text>,
      },
    ]}
    data={leagueData}
  />
  )
};

export default Positions;