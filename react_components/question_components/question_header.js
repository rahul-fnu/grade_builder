import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import QuestionC from './question';
import MarkingScheme from './mark_scheme';
import ExpertSolution from './expert_solution';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function index(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}



export default function NavTabs(props) {
  //const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab label="Question"{...index(0)} />
          <Tab label="Expert Solution" {...index(1)} />
          <Tab label="Marking Scheme"{...index(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <QuestionC q = {props.ques}></QuestionC>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExpertSolution q = {props.ques}></ExpertSolution>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MarkingScheme q = {props.ques}></MarkingScheme>
      </TabPanel>
    </div>
  );
}
