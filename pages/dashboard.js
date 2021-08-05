import React from 'react';
import {Component} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import NavigationBar from '../Components/navigation_bar.js';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.math = this.props.q.filter(e => e.subject === 'maths');
        this.chem = this.props.q.filter(e => e.subject === 'chemistry');
        this.phy = this.props.q.filter(e => e.subject === 'physics');
        this.econ = this.props.q.filter(e => e.subject === 'economics');

    }
    
    render(){
      return (
        <div>
            <NavigationBar></NavigationBar>
            {(this.math.length > 0) ?
            <div>
                <PieChart
                    position="center"
                    title="math"
                    animation
                    animationDuration={500}
                    animationEasing="ease-in"
                    //center={[50, 50]}
                    data={[
                        {
                        color: "#E38627",
                        title: this.props.q.length, 
                        value: this.props.q.length
                        },
                        {
                        color: "#C13C37",
                        title: this.math.length, 
                        value: this.math.length,
                        }
                    ]}
                    lengthAngle={360}
                    lineWidth={15}
                    radius={20}
                    rounded
                />
            </div>
            : null
            }
            

            <section>
            <PieChart
                title="chem"
                animation
                animationDuration={500}
                animationEasing="ease-out"
                center={[50, 50]}
                data={[
                    {
                    color: "#D38147",
                    title: this.props.q.length, 
                    value: this.props.q.length
                    },
                    {
                    color: "#B13117",
                    title: this.chem.length, 
                    value: this.chem.length,
                    }
                ]}
                labelPosition={50}
                lengthAngle={360}
                lineWidth={15}
                paddingAngle={0}
                radius={20}
                rounded
                startAngle={0}
                viewBoxSize={[100, 100]}
            />
            </section>

            <PieChart
                title="phy"
                animation
                animationDuration={500}
                animationEasing="ease-out"
                center={[50, 50]}
                data={[
                    {
                    color: "#A38147",
                    title: this.props.q.length, 
                    value: this.props.q.length
                    },
                    {
                    color: "#B13117",
                    title: this.phy.length, 
                    value: this.phy.length,
                    }
                ]}
                labelPosition={50}
                lengthAngle={360}
                lineWidth={15}
                paddingAngle={0}
                radius={20}
                rounded
                startAngle={0}
                viewBoxSize={[100, 100]}
            />

        </div>
      );
    }
}

export default function Home({data}){
    return <HomePage q={data.questions} u= {data.users}></HomePage>
}

Home.getInitialProps = async (context) => {
    const res1 = await fetch('http://localhost:3000/api/questions');
    const res2 = await fetch('http://localhost:3000/api/users');
    const questions = (await res1.json()).data
    const users = (await res2.json()).data
    return {
        data: {questions: questions, users: users} 
    }
}