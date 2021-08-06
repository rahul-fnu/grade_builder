import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import QuestionC from './question';
import MarkingScheme from './mark_scheme';
// import ExpertSolution from './expert_solution';
import GradingPage from './grading_page';
import styles from '../../styles/Question.module.css';


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
  var ms = props.ques.marking_scheme[0].subpart;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filter = () => {
    function filtered(data) {
      // console.log(data)
      const list = {}
      for (let item of data) {
        if (item.subpart) {
          list[item.part] = filtered(item.subpart);
        } else if (item.answer) {
          list[item.part] = item.answer;
        } else {
          list[item.part] = [];
        }
      }
      return list
    }
    var abc = filtered(ms)
    ms = abc;
    // this.setState({filteredMS : mark(this.state.marking_scheme)});

    return abc;
  }
  filter()
  // console.log(ms)
  const cur = {ans : {}, ms: ms, part: {}, done:false}
  const [val, setVal] = useState(cur);
  var done = false;
  const grade = (ans) => {
    const temp = {...cur};
    temp.ans = ans.ans
    temp.done = true;
    setVal(temp)
  }

  let gra = val.done ? <GradingPage ans = {val.ans} ms = {val.ms}/> : <p>Please submit your answers first</p>
  return (
    <div>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          //className={styles.tab}
        >
          <Tab style={{border: "1.5px solid black"} } label="Question"{...index(0)} />
          <Tab style={{border: "1.5px solid black"} } label="Grade Here" {...index(1)} />
          <Tab style={{border: "1.5px solid black"} } label="Marking Scheme"{...index(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <QuestionC q = {props.ques} parentCallback = {grade}></QuestionC>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {gra}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MarkingScheme q = {ms}></MarkingScheme>
      </TabPanel>
    </div>
  );
}
