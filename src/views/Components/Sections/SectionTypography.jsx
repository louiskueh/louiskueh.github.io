import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";


class SectionTypography extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h1>Experience</h1>
            </div>
            <GridContainer>
              <div className={classes.typo}>
                <div className={classes.note}><b>Deutsche Bank </b>| Software developer Intern <br /> June 2017 - August 2017</div>
                <div className={classes.text}>
                  <h5>Buisness Case </h5>
                  <p>Worked with another intern to build a (Java) web application to automate SQL queries which were manually changed every day in the back-end, after which the results were copied and pasted into a SharePoint document - taking up to 2 hours
                  of work time every day. With the application, the process was 12 times faster - taking up to 10 minutes for the same task. </p>
                  <h5>The application</h5>

                  <ul>
                    <li>Able to switch seamlessly between different database types, for example Oracle and MySQL, by implementing JDBC DAO connectors for each of the database </li>
                    <li> Able to input parameters on the web page, which would replace certain variables in the SQL query </li>
                    <li>Results were displayed in website itself, with pagination and export to CSV as a functionality </li>
                  </ul>
                  <h5>Technologies Used</h5>
                  <ul>
                    <li>Spring Model View Controller + Maven for back-end development and dependencies </li>
                    <li>Thymeleaf, HTML, Bootstrap, Javascript, JQuery &amp; CSS for front-end development of the website </li>
                    <li> JUnit tests for unit testing of the application's functionality</li>
                    <li> SonarQube for evaluating code coverage and code quality </li>


                  </ul>
                  <h5>Overall Impression</h5>
                  <p>
                    As someone who had limited Java experience before undertaking the project, I thoroughly enjoyed the experience of not only learning new frameworks and technologies but also analysing the problem and learning how to deliver a solution in a work place settings,
                    with real deadlines. I was particularly impressed with SonarQube, which is an industry standard tool for checking your code. It makes sure your code is clean, for example, making sure there are no unhandled exceptions, as well as giving
                  a hard statistical number on your code coverage from testing. I have learnt a lot from this internship and will definitely be using my knowledge gained in my future work.</p>

                </div>

              </div>
              {/* <div className={classes.typo}>
                <div className={classes.note}>Header 2</div>
                <h2>The Life of Material Kit</h2>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 3</div>
                <h3>The Life of Material Kit</h3>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 4</div>
                <h4>The Life of Material Kit</h4>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 5</div>
                <h5>The Life of Material Kit</h5>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 6</div>
                <h6>The Life of Material Kit</h6>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 1</div>
                <h1 className={classes.title}>The Life of Material Kit</h1>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 2</div>
                <h2 className={classes.title}>The Life of Material Kit</h2>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 3</div>
                <h3 className={classes.title}>The Life of Material Kit</h3>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 4</div>
                <h4 className={classes.title}>The Life of Material Kit</h4>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Paragraph</div>
                <p>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers. I understand
                  culture. I am the nucleus. I think that’s a responsibility
                  that I have, to push possibilities, to show people, this is
                  the level that things could be at.
                </p>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Quote</div>
                <Quote
                  text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                  author=" Kanye West, Musician"
                />
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Muted Text</div>
                <Muted>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Muted>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Primary Text</div>
                <Primary>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Primary>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Info Text</div>
                <Info>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Info>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Success Text</div>
                <Success>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Success>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Warning Text</div>
                <Warning>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Warning>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Danger Text</div>
                <Danger>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Danger>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Small Tag</div>
                <h2>
                  Header with small subtitle<br />
                  <Small>Use "Small" tag for the headers</Small>
                </h2>
              </div> */}
            </GridContainer>
          </div>
          {/* <div className={classes.space50} />
          <div id="images">
            <div className={classes.title}>
              <h2>Images</h2>
            </div>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <h4>Rounded Image</h4>
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>Circle Image</h4>
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>Rounded Raised</h4>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>Circle Raised</h4>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
            </GridContainer>
            <GridContainer />
          </div>
          <div className={classes.space50} /> */}
        </div>
      </div>
    );
  }
}

export default withStyles(typographyStyle)(SectionTypography);
