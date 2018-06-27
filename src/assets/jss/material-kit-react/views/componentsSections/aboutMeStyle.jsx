import { container,title } from "assets/jss/material-kit-react.jsx";

const aboutmeStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  title: {
    ...title,
    textAlign: 'center',
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  aboutMeText:{
    fontWeight: "200",
    fontSize: "24px",
    textAlign: "justify",
    lineHeight: 1.5,
  },
  carouselText:{
    fontSize: "20px",
    position: "relative",
    right:"250px",
    bottom: "30px"
  },
   carouselText2:{
    fontSize: "20px",
    position: "relative",
    right:"-50px",

  },
  carosoulImage:{
    maxwidth: "720px",
    maxheight: "660px"
  }
};

export default aboutmeStyle;
