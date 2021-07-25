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
  // console.log(ms)
  const cur = {ans : {}, ms: ms, part: {}, done:false}
  const [val, setVal] = useState(cur);
  var done = false;
  const grade = (ans) => {
    const temp = {...cur};
    temp.ans = ans.ans
    temp.done = true;
    // done = true;
    // console.log(temp.ans)
    setVal(temp)
    // console.log(val.ans)
    //gra = <GradingPanel ans = {state.ans} ms = {state.ms} part = {1} />
  }
  // useEffect(() => {
  //   gra = <GradingPanel ans = {state.ans} ms = {state.ms} part = {1} />
  // })
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
        <MarkingScheme q = {props.ques}></MarkingScheme>
      </TabPanel>
    </div>
  );
}
