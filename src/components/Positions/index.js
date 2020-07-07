import React, { useState } from 'react';
import { DataTable, Text } from 'grommet';
import { useRecoilValue } from 'recoil';
import { positions } from '../../recoil/atoms';

const Positions = () => {
  const positionsData = useRecoilValue(positions);
  const [sort, setSort] = useState({
    property: "points",
    direction: "desc"
  });
  return !positionsData ? <div>Loading...</div> : (
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
        property: 'team.name',
        header: <Text>Team</Text>,
      },
      {
        property: 'playedGames',
        header: <Text>G</Text>,
      },
      {
        property: 'won',
        header: <Text>W</Text>,
      },
      {
        property: 'draw',
        header: <Text>D</Text>,
      },
      {
        property: 'lost',
        header: <Text>L</Text>,
      },
      {
        property: 'goalDifference',
        header: <Text>GD</Text>,
      },
      {
        property: 'points',
        header: <Text>P</Text>,
      },
    ]}
    data={positionsData.standings[0].table}
  />
  )
};

export default Positions;