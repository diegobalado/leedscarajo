import React, { useState } from 'react';
import { DataTable, Text } from 'grommet';
import { useEndpoint } from '../../utils/hooks';
import { standingsSelector }  from '../../utils/selectors';

const Positions = () => {
  const { data } = useEndpoint('STANDINGS', standingsSelector);
  const [sort, setSort] = useState({
    property: 'points',
    direction: 'desc'
  });
  return !data ? <div>Loading...</div> : (
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
          sortable: false
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
      data={data}
    />
  );
};

export default Positions;