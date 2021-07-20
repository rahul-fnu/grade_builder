import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import QuestionC from './question';
import MarkingScheme from './mark_scheme';
// import ExpertSolution from './expert_solution';
import GradingPanel from './grading_panel'
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
  var ms = props.ques.marking_scheme
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filterMarkingScheme = () => {
    const filtered_ans = {};
    var i = 0;
    function mark(data) {
        var list = {};
        for (let item of data) {
            if (item['answer'].length) {
                list[item['part']] = item['answer']
            } else {
                list[item['part']] = item.subparts;
            }
        }
        var keys  = Object.keys(list);
        for (let i of keys) {
            if (list[i] && (typeof list[i][0] == 'string')) {
                list[i] = list[i]
            } else {
                list[i] = mark(list[i]);
            }
        }
        return list;
    }
    var abc = mark(ms)
    ms = abc;
    // this.setState({filteredMS : mark(this.state.marking_scheme)});
    return abc;
  }
  filterMarkingScheme()
  console.log(ms)
  const state = {ans : {'a': {'i' : "dedewd", "ii": "dewdwed"}, 'b': {"i": "<p>vdfvdfvdfvdvdffvd</p>" , "iV": "<p>dfvfvdfvddfvvdf</p>", "ii": "<p>fvdfvdvdfvdfvdf</p>",
        "iii": {"1": "<p>dfvvdffvdfvdvdfdfv<br></p>", "2": "<p>dfvvdfvdfvdfvfvdf</p>"}}}, ms: ms, part: {}}
  const grade = (ans) => {
    state.ans = ans.ans;
    console.log(state);
    gra = <GradingPanel ans = {state.ans} ms = {state.ms} part = {1} />
  }
  let gra = <GradingPanel ans = {state.ans} ms = {state.ms} part = {1} />
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
          <Tab label="Grade Here" {...index(1)} />
          <Tab label="Marking Scheme"{...index(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <QuestionC q = {props.ques} parentCallback = {grade}></QuestionC>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {gra}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MarkingScheme q = {props.ques}></MarkingScheme>
      </TabPanel>
    </div>
  );
}
