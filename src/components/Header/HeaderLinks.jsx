/* eslint-disable */
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  let resume = "https://github.com/jovanhan2/jovanhan2.github.io/raw/react/src/assets/resources/cv.pdf"
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Tooltip
          id="Resume Download"
          title="Download my resume"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
          href={resume}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Resume
        </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Follow me on Github"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            href="https://github.com/jovanhan2"
            target="_blank"
            color="transparent"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="LinkedIn"
          title="Have a look at my LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color="transparent"
            href="https://www.linkedin.com/in/louiskueh/"
            target="_blank"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
