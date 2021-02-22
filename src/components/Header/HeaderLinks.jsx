/* eslint-disable */
import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";

// @material-ui/icons
import {  CloudDownload } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  let resume = "https://goo.gl/spLhEs"
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Tooltip
          id="Blog"
          title="Blog"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
          href="https://blog.louiskueh.com"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
             <i className={classes.socialIcons + " fas fa-pen-square"} /> &nbsp; Blog
        </Button>
        </Tooltip>
      </ListItem>
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
          <CloudDownload className={classes.icons} />&nbsp;  Resume
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
            href="https://github.com/louiskueh"
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
      <ListItem className={classes.listItem}>
        <Tooltip
          id="Youtube"
          title="Checkout my Youtube"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color="transparent"
            href="https://yt.vu/+louiskueh"
            target="_blank"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + " fab fa-youtube"} />
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
