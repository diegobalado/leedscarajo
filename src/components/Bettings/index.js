import React, { useState, useEffect } from 'react';
import { func, string } from 'prop-types';
import { RangeInput, Box, Button, Layer } from 'grommet';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { getAtom } from '../../recoil/atoms';
import { useEndpoint } from '../../utils/hooks';
import { standingsSelector }  from '../../utils/selectors';

const setTeamResult = (team, goalsFor, goalsAgainst) => {
  const newTeam = { ...team };
  newTeam['playedGames'] = parseInt(newTeam.playedGames) + 1;
  newTeam['goalsFor'] = parseInt(newTeam.goalsFor) + parseInt(goalsFor);
  newTeam['goalsAgainst'] = parseInt(newTeam.goalsAgainst) + parseInt(goalsAgainst);
  newTeam['goalDifference'] = parseInt(newTeam.goalDifference) + parseInt(goalsFor) - parseInt(goalsAgainst);
  if (goalsFor > goalsAgainst) {
    newTeam['won'] = parseInt(newTeam.won) + 1;
    newTeam['points'] = parseInt(newTeam.points) + 3;
  }
  else if (goalsFor < goalsAgainst) {
    newTeam['lost'] = parseInt(newTeam.lost) + 1;
  }
  else {
    newTeam['draw'] = parseInt(newTeam.draw) + 1;
    newTeam['points'] = parseInt(newTeam.points) + 1;
  }
  return newTeam;
};

const setMatchResult = (homeTeam, homeGoals, awayTeam, awayGoals, table) => {
  const homeTeamData = table.filter(t => t.team.name === homeTeam)[0];
  const awayTeamData = table.filter(t => t.team.name === awayTeam)[0];
  const homeData = setTeamResult(homeTeamData, homeGoals, awayGoals);
  const awayData = setTeamResult(awayTeamData, awayGoals, homeGoals);
  const newTable = table.map(team => {
    if (team.team.name === homeTeam) return homeData;
    else if (team.team.name === awayTeam) return awayData;
    else return team;
  });
  return newTable;
};

const removeMatch = (homeTeam, awayTeam, fixture) => {
  const newFixture = fixture.filter(match => match.homeTeam.name !== homeTeam || match.awayTeam.name !== awayTeam);
  return newFixture;
};

const updateStandings = (homeTeam, homeValue, awayTeam, awayValue, positions, setPositions, fixture, setFixture) => {
  const table = positions;
  const newTable = setMatchResult(homeTeam, homeValue, awayTeam, awayValue, table);
  const newFixture = removeMatch(homeTeam, awayTeam, fixture);
  setPositions(newTable);
  setFixture(newFixture);
};

const Score = styled.div`
  max-width: 300px;
`;

const Bettings = ({ setShow, home, away }) => {
  const { data } = useEndpoint('STANDINGS', standingsSelector);
  const [positions, setPositions] = useRecoilState(getAtom('STANDINGS'));
  const [fixture, setFixture] = useRecoilState(getAtom('FIXTURE'));
  const [homeValue, setHomeValue] = useState(0);
  const [awayValue, setAwayValue] = useState(0);

  useEffect(() => {
    if (data) {
      setPositions(data);
    }
  }, [data]);

  return (
    <Layer
      onEsc={() => setShow(false)}
      onClickOutside={() => setShow(false)}
    >
      <Box pad='large'>
        <Box pad="medium">
          {`${home} - ${away}`}
        </Box>
        <Box width="medium">
          <Box>
            <Box direction="row" justify="between" pad="medium">
              <Box width="medium">
                {home}
              </Box>
              <Score>
                <RangeInput
                  value={homeValue}
                  onChange={event => setHomeValue(event.target.value)}
                  min={0}
                  max={5}
                />
              </Score>
            </Box>
            <Box direction="row" justify="between" pad="medium">
              <Box width="medium">
                {away}
              </Box>
              <Score>
                <RangeInput
                  value={awayValue}
                  onChange={event => setAwayValue(event.target.value)}
                  min={0}
                  max={5}
                />
              </Score>
            </Box>
          </Box>
          <Box pad='small'>
            {`${home} ${homeValue} - ${awayValue} ${away}`}
          </Box>
        </Box>
        <Box direction="row" justify="between" pad="medium">
          <Button label="Ok" size="medium" primary onClick={() => {
            updateStandings(home, homeValue, away, awayValue, positions, setPositions, fixture, setFixture);
            setShow(false);
          }} />
          <Button label="Cancel" size="medium" onClick={() => setShow(false)} />
        </Box>
      </Box>
    </Layer>
  );
};

Bettings.propTypes = {
  setShow: func,
  home: string,
  away: string,
};

export default Bettings;
