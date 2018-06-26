import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import activityStyle from "assets/jss/material-kit-react/views/componentsSections/activityStyle.jsx";

class SectionActivity extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h1>Activities</h1>
            </div>
            <GridContainer>
              <div className={classes.typo}>
                <div className={classes.note}><b>Undergraduate Teaching Assistant</b> <br />Imperial College<br /> Spring 2018</div>
                <div className={classes.text}>
                  <p>Taught EE1-07 Software Engineering 1: Introduction to Computing. 
                     
                    <ul>
                      <li>Responsible for introducing programming to new undergraduate students.</li>
                      <li>Developed steadfast presence and revised many deep programming concepts during teaching.</li>
                      <li>Built communication collaboration
                    skills through working directly with the professor and other teaching assistants</li>
                    </ul>
                  
                  </p>
                </div>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}><b>President</b> <br />Imperial College Table Tennis Club <br /> Sept 2017 - June 2018</div>
                <div className={classes.text}>
                <ul>
                      <li>Responsible for introducing programming to new undergraduate students.</li>
                      <li>Developed steadfast presence and revised many deep programming concepts during teaching.</li>
                      <li>Built communication collaboration
                    skills through working directly with the professor and other teaching assistants</li>
                    </ul>
                  
                </div>
              </div>

              <div className={classes.typo}>
                <div className={classes.note}><b>Insight Scheme </b>| Teach First <br /> Spring 2017</div>
                <div className={classes.text}>
                  <p>Winner of Best Short-term Insight Scheme - 2017 National Undergraduate Employability Awards
                  <ul>
                      <li>Developed leadership, communication &amp; planning skills essential to the classroom at Resource for London</li>
                      <li>Taught Design Technology at The Bemrose School, Derby. </li>
                      <li>An eye-opener to the impact of the socio-economic background of students - 33% of pupils on Free School Meals achieved 5 A*-Cs at GCSE compared to 60.5% of all other pupils. (United Kingdom)</li>
                    </ul>
                  </p>
                  <p>Developed strong presentation, communication &amp; leadership qualities - nothing else is quite as hard as grabbing the attention of a room full of 30 kids</p>
                </div>


              </div>

            </GridContainer>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(activityStyle)(SectionActivity);
