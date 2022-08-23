import './App.css'
import {Card, CardContent, Container, Paper, Typography} from "@mui/material"
import styled from "@emotion/styled"

function App() {
  return (
    <div className="App">
      <Container fixed>
          <Paper elevation={3} sx={{padding: "20px"}}>
              <HeaderSection>
                  <Typography variant={"h2"} fontWeight={"bold"}>Hello.</Typography>
                  <Typography variant={"h2"} fontWeight={"bold"}>I'm <Highlight>Forest Yox</Highlight>.</Typography>
                  <Typography variant={"h6"}>I am an experienced frontend developer looking for a collaborative team to grow with!</Typography>
              </HeaderSection>
              <BodyContainer>
                  <LeftCol>
                      <div>
                          <Typography variant={"h5"} fontWeight={"bolder"}>Skills</Typography>
                          <Breaker/>
                          <StyledList>
                              <li>React</li>
                              <li>Typescript</li>
                              <li>Storybook</li>
                              <li>Javascript</li>
                              <li>Amplify/Aws</li>
                              <li>GCP</li>
                              <li>Redux</li>
                              <li>A.I. training interface design</li>
                              <li>NodeJS</li>
                          </StyledList>
                      </div>
                      <div>
                          <Typography variant={"h5"} fontWeight={"bolder"}>Education</Typography>
                          <Breaker/>
                          <Typography variant={"h6"} fontWeight={"bold"}>2016 | B.A.</Typography>
                          <Typography variant={"h6"} fontWeight={"bold"}><Highlight>COMPUTER SCIENCE</Highlight></Typography>
                          <Typography variant={"h6"}>SUNY PolyTechnic</Typography>
                      </div>
                      <div>
                          <Typography variant={"h5"} fontWeight={"bolder"}>Hobbies</Typography>
                          <Breaker/>
                          <StyledList>
                              <li>Most likely to be found
                                  riding a mountain bike
                                  deep in the mountains
                                  distantly pursued by my
                                  dogs, Solo & Ron</li>
                              <li>Avid Lego enthusiast</li>
                              <li>Endlessly pursuing
                                  vehicular perfection
                                  through extensive car
                                  modification</li>
                          </StyledList>
                      </div>
                  </LeftCol>
                  <RightCol>
                      <Typography variant={"h5"} fontWeight={"bolder"}>Experience</Typography>
                      <Breaker />
                      <Card sx={{marginTop: "20px"}}>
                          <CardContent sx={{textAlign: "left"}}>
                              <Typography variant={"h6"} fontWeight={"bold"}>MARCH 2022 – PRESENT</Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}><Highlight>SR. SOFTWARE ENGINEER</Highlight></Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}>Multimedia llc | Lake Forest, CA (Remote)</Typography>
                              <StyledList>
                                  <li>Built new app utilizing legacy systems from existing company project</li>
                                  <li>Provided support for company platform which averages 600 million monthly users</li>
                                  <li>Built prototype components in story book for rapid desing iteration</li>
                              </StyledList>
                          </CardContent>
                      </Card>
                      <Card sx={{marginTop: "20px"}}>
                          <CardContent sx={{textAlign: "left"}}>
                              <Typography variant={"h6"} fontWeight={"bold"}>MAY 2021 – MARCH 2022</Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}><Highlight>SR. SOFTWARE ENGINEER</Highlight></Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}>SOUL MACHINES | AUCKLAND, NZ (REMOTE)</Typography>
                              <StyledList>
                                  <li>Provided custom React web apps for the deployment of Digital Personas</li>
                                  <li>Managed deployments via AWS and GCP</li>
                                  <li>Lead development of integration solutions for complex client systems</li>
                              </StyledList>
                          </CardContent>
                      </Card>
                      <Card sx={{marginTop: "20px"}}>
                          <CardContent sx={{textAlign: "left"}}>
                              <Typography variant={"h6"} fontWeight={"bold"}>JUNE 2020 - MAY 2021</Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}><Highlight>SOFTWARE ENGINEER</Highlight></Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}>BRYTER CX | AURORA, CO (REMOTE)</Typography>
                              <StyledList>
                                  <li>Worked closely with designers in a fast paced startup environment</li>
                                  <li>Leveraged Angular and open source frameworks to build complex data displays</li>
                                  <li> Participated in connections team to promote team building in a remote environment</li>
                              </StyledList>
                          </CardContent>
                      </Card>
                      <Card sx={{marginTop: "20px"}}>
                          <CardContent sx={{textAlign: "left"}}>
                              <Typography variant={"h6"} fontWeight={"bold"}>MAY 2019 – JUNE 2020</Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}><Highlight>SOFTWARE ENGINEER II</Highlight></Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}>DISH NETWORK | DENVER, CO</Typography>
                              <StyledList>
                                  <li>Developed replacement for legacy customer support system using React, Redux, and Jest frameworks</li>
                                  <li>Provided design feedback and revision to a variety of internal clients</li>
                                  <li>Worked with yarn, gradle, and cypress to develop and maintain scalable and testable code</li>
                              </StyledList>
                          </CardContent>
                      </Card>
                      <Card sx={{marginTop: "20px"}}>
                          <CardContent sx={{textAlign: "left"}}>
                              <Typography variant={"h6"} fontWeight={"bold"}>AUGUST 2017 – MAY 2019</Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}><Highlight>SOFTWARE ENGINEER I</Highlight></Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}>TECHNERGETICS LLC. | UTICA, NY</Typography>
                              <StyledList>
                                  <li>Used NodeJS to author open source packages for image annotation tools</li>
                                  <li>Created rapid prototypes for proof of concept proposals</li>
                                  <li>Developed universally deployable code using Atom</li>
                              </StyledList>
                          </CardContent>
                      </Card>
                      <Card sx={{marginTop: "20px"}}>
                          <CardContent sx={{textAlign: "left"}}>
                              <Typography variant={"h6"} fontWeight={"bold"}>JUNE 2015 – AUGUST 2017</Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}><Highlight>WEB DEVELOPER</Highlight></Typography>
                              <Typography variant={"h6"} fontWeight={"bold"}>NORTHERN SAFETY CO. INC. | FRANKFORT, NY</Typography>
                              <StyledList>
                                  <li>Created responsive refactors of legacy code using Typescript, ASP.NET MVC, and AngularJS</li>
                              </StyledList>
                          </CardContent>
                      </Card>
                  </RightCol>
              </BodyContainer>
          </Paper>
      </Container>
    </div>
  );
}

// JUNE 2015 – AUGUST 2017
// WEB DEVELOPER
// NORTHERN SAFETY CO. INC. | FRANKFORT, NY
// • Created responsive refactors of legacy code using Typescript, ASP.NET
// MVC, and AngularJS

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline-start: 13px;
`

const Breaker = styled.div`
  height: 5px;
  width: 30px;
  background: black;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: flex-start;
`
const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: flex-start;
`

const BodyContainer = styled.div`
  display: flex;
`

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`

const Highlight = styled.span`
  color: darkorange;
`

export default App;
