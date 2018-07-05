import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import activityStyle from "assets/jss/material-kit-react/views/componentsSections/activityStyle.jsx";
import GridItem from "../../../components/Grid/GridItem";

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
              <GridItem>

                <div className={classes.typo}>
                  <a href="https://www.db.com/unitedkingdom/" target="_blank" rel="noopener noreferrer" title="Github">
                    <img
                      src={""}
                      alt="Imperial College"
                      style={{ height: "20px", width: "22px", position: "relative", bottom: "3px", paddingRight: "5px" }}
                      className="slick-image"
                    />
                  </a>
                  <div className={classes.note}><b>Undergraduate Teaching Assistant </b>
                    | Imperial College | Spring 2018</div>
                  <div className={classes.text}>
                    <hr />
                    <h4>Taught EE1-07 Software Engineering 1: Introduction to Computing. </h4>

                    <ul>
                      <li>Responsible for introducing programming to new undergraduate students.</li>
                      <li>Developed steadfast presence and revised many deep programming concepts during teaching.</li>
                      <li>Built communication collaboration
                    skills through working directly with the professor and other teaching assistants</li>
                    </ul>


                  </div>
                </div>
              </GridItem>
              <GridItem>
                <div className={classes.typo}>
                  <div className={classes.note}><b>Hackathon</b> | Spring 2017</div>
                  <div className={classes.text}>
                  <hr />
                    <h4>Developed a 2d side scrolling game for individuals with cystic fibrosis </h4>
                    <ul>
                      <li>Participants controlled the game using a breathalyzer</li>
                      <li>Playing the game would encourage deep and controlled breathing, helping participants combat their condition</li>
                    </ul>


                  </div>
                </div>
              </GridItem>
              <GridItem>
              </GridItem>
              <GridItem>
                <div className={classes.typo}>
                  <div className={classes.note}><b>President</b> | Imperial College Table Tennis Club | Sept 2017 - June 2018</div>
                  <div className={classes.text}>
                  <hr />
                    <h4>Responsible for overall wellbeing of the club</h4>
                    <ul>
                      <li> Built Node JS app to check if someone is a member of the table tennis club (HTTP request)</li>
                      <li>Ensured inter-university matches (BUCS) are played to an appropriate standard</li>
                      <li>Increased awareness of table tennis by building the website for the club and advertising flyers</li>
                    </ul>

                  </div>
                </div>
              </GridItem>
              <GridItem>

                <div className={classes.typo}>
                  <div className={classes.note}><b>Insight Scheme </b>| Teach First | Spring 2017</div>
                  <div className={classes.text}>
                  <hr />
                    <h4>Winner of Best Short-term Insight Scheme - 2017 National Undergraduate Employability Awards   </h4>
                    <ul>
                      <li>Developed leadership, communication &amp; planning skills essential to the classroom at Resource for London</li>
                      <li>Taught Design Technology at The Bemrose School, Derby. </li>
                      <li>An eye-opener to the impact of the socio-economic background of students - 33% of pupils on Free School Meals achieved 5 A*-Cs at GCSE compared to 60.5% of all other pupils. (United Kingdom)</li>
                    </ul>

                    <p>Developed strong presentation, communication &amp; leadership qualities - nothing else is quite as hard as grabbing the attention of a room full of 30 kids</p>
                  </div>


                </div>
              </GridItem>
            </GridContainer>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(activityStyle)(SectionActivity);
