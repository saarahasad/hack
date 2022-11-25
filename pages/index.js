import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button, Segment, Divider, Grid, Image,Container,Header} from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CompetitionIndex extends Component {
  static async getInitialProps() {
    const competitions = await factory.methods.getDeployedCompetitions().call();
    return { competitions };
  }

  renderCompetitions() {
    const items = this.props.competitions.map((address) => {
      return {
        header: address,
        description: (
          <p>
            {" "}
            <br />
            <Link route={`/competitions/${address}`}>
              <a>View Project</a>
            </Link>
          </p>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout style={{margin:'0',padding:'0'}}>
          <Segment style={{margin:'0',background:"black",padding:'5'}} >
            <Grid columns={2} style={{padding:'0'}}>
              <Grid.Column style={{background:"#481a58"}} align="center">
                  <Image src='https://i.ibb.co/zfxd19D/landing-Page2.jpg' size='large' align="center"  />
              </Grid.Column>
              <Grid.Column style={{background:"#481a58",color:"white"}}>
                <Header as="h1" style={{color:"white",paddingLeft:"13px"}}>
                  Overview
                </Header>
                <Segment style={{background:"#481a58",color:"white",textAlign:"justify"}}>
                  Artificial Intelligence (AI) and blockchain are two disruptive technologies proving to be a powerful combination, improving
virtually every industry. Research in Artificial Intelligence has come a long way, with many corporations, organizations and
individuals greatly benefiting from Machine Learning services. However, corporations, organizations and individuals with
problems AI can solve are hesitant to solicit services from third-party agents by sharing their private data to obtain those
valuable predictions. Further, research on improving Machine Learning models suggests utilizing larger datasets to obtain
better working models. However, handling the labelling of a sufficient amount of data with limited in-house resources is a
time-consuming and costly operation. Consequently, businesses prefer crowdsourcing options when labelling data to train
Machine Learning models. Also, protecting the business's data is as imperative as protecting the customer's data. It is not
in favour of businesses to share their Machine Learning models with those they offer services to, as these models may be
proprietary. This proposal focuses on creating a community of machine learning practitioners who can contribute to AI
businesses by building models and datasets in a blockchain environment in exchange for a reward. It also permits agents
and organizations with problems that could be solved with AI to solicit solutions without sharing their data.
              </Segment>
              </Grid.Column>
            </Grid>

            {/* <Divider vertical>And</Divider> */}
          </Segment>

        {/* 
        export default DividerExampleVertical */}
                    {/* <h2>Objectives</h2>{" "}
                    <p>
                      This research focuses on creating a community of machine learning
                      practitioners who can contribute to AI businesses by building
                      models and datasets in a blockchain environment in exchange for a
                      reward. 
                      
                    </p>
                    <p>
                    It also permits organizations and agents with problems
                      that could be solved with AI to solicit solutions without sharing
                      their data.
                    </p>
                    <p>
                    This research utilizes the benefits of multi-party
                      computation (MPC) to build Machine Learning models that provide
                      predictions on encrypted data. In many cases, it is not in favour
                      of businesses to share their Machine Learning models with those
                      they offer services to, as these models may be proprietary. Using
                      MPC, organizations that solicit services are not required to send
                      their data to AI businesses; encrypted models are sent to the
                      machines with the data. Therefore, this research focuses on
                      providing encrypted models to offer predictions on encrypted data.
                    </p>
                
                    <p>
                    Blockchain offers many benefits, such as decentralization, persistence, transparency, and trust, which could complement Artificial Intelligence to create a secure and reliable framework. The main objectives include:

                      <ul>
                        <li>Develop a blockchain based based protocol for crowdsourcing data and models from contributors with a promising reward scheme.</li>
                        <li>Build a platform for businesses to provide Machine Learning services while maintaining the privacy of their models and client data.</li>
                        <li>Build Machine Learning Models using multi-party computation (MPC), to develop encrypted models that offer predictions on encrypted data. </li>
                      </ul>
                    </p> */}
                  <br/>
                  {/* <Segment style={{justifyContent:"center"}}>
                    <a>
                    <Button
                    floated="right"
                    content="Create Project"
                    icon="add circle"
                    primary
                    />
                    </a>
                    <Container floated="left" style={{paddingLeft:"5px",margin:"0 0"}}>
                    Open Projects
                    </Container>
                  </Segment> */}
                   <Grid style={{border:"1px solid gray"}}>
                      <Grid.Column floated='left' width={5} style={{marginLeft:"10px",fontSize:"25px",FontFace:"Roboto"}}>
                        Open Projects
                      </Grid.Column>
                      <Grid.Column floated='right' width={5} style={{marginRight:"10px"}}>
                        <Link route="/competitions/new">
                         <a>
                        <Button
                          floated="right"
                          content="Create Project"
                          icon="add circle"
                          primary
                          />
                          </a>
                        </Link>
                      </Grid.Column>
                    </Grid>
            
                
                  <br />
  <Card.Group style={{justifyContent:"space-around"}}>
    <Card style={{width:"25%"}}>
      <Card.Content>
        <Image
          floated='right'
          size='large'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card style={{width:"25%"}}>
      <Card.Content>
        <Image
          floated='right'
          size='large'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card style={{width:"25%"}}>
      <Card.Content>
        <Image
          floated='right'
          size='large'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>


                  {/* {this.renderCompetitions()} */}
      </Layout>
    );
  }
}

export default CompetitionIndex;
