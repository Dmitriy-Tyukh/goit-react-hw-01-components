import PropTypes from 'prop-types';
import { Box } from 'constans/Box';
import { CardTitle, Item, Label, LabelValue} from './Statistics.moduled';

export default function Statistics({ titleStat, stats }) {
    return (
      <Box as="section" width="20%" border={1} borderStyle="solid" borderColor="darkgrey" textAlign="center" boxShadow="0px 1px 8px 1px rgba(0, 0, 0, 0.5)">
        
        {titleStat && <CardTitle>{titleStat}</CardTitle>}

            <Box as="ul" display="flex" flexDirection="row" m={0} p={0}>
                
                {stats.map(({ id, name, value }) => (
                    <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
                        <Label>{name}</Label>
                        <LabelValue>{value}%</LabelValue>
                    </Item>
                ))}

            </Box>
      </Box>
    );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  titleStat: PropTypes.string
};

