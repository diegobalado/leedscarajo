import React from 'react';
import { DataTable, Text } from 'grommet';
import data from '../../datasources/fixtures.json';
import teams from '../../datasources/teams.json';

const Fixture = () => 
  <DataTable
    primaryKey='index'
    columns={[
      {
        property: 'home',
        header: <Text>Home</Text>,
        render: ({ home }) => teams[home]
      },
      {
        property: 'away',
        header: <Text>Away</Text>,
        render: ({ away }) => teams[away]
      },
      {
        property: 'date',
        header: <Text>Date</Text>,
        render: ({ date }) => (
          <Text>{date}</Text>
        ),
      },
    ]}
    data={data}
  />

export default Fixture;