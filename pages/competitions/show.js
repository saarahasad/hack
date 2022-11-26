import React, { Component } from "react";
import { Card, Grid, Button, Table,Image, Segment,Header, Container,Icon,Divider,Tab ,Label,Input} from "semantic-ui-react";
import Layout from "../../components/Layout";
import Competition from "../../ethereum/competition";
import web3 from "../../ethereum/web3";
import ContributeDataForm from "../../components/ContributeDataForm";
import ContributeModelForm from "../../components/ContributeModelForm";
import { Link } from "../../routes";
import { CodeBlock } from "react-code-blocks";
import RequestRow from "../../components/RequestRow";
import { saveAs } from "file-saver";
import Example from "../semanticHelp/exampleHelp";

class CompetitionShow extends Component {
  
  static async getInitialProps(props) {
    console.log("PAGE ", props.query.address);
    const competition = Competition(props.query.address);

    const summary = await competition.methods.getSummary().call();
    console.log(summary);

    const submissionCount = await competition.methods.submissionCount().call();

    const requests = await Promise.all(
      Array(parseInt(submissionCount))
        .fill()
        .map((element, index) => {
          return competition.methods.dataParticpants(index).call();
        })
    );


    return {
      address: props.query.address,
      minimumPayment: summary[0],
      balance: summary[1],
      submissionCount: summary[2],
      organizer: summary[3],
      nameProblem: summary[4],
      description: summary[5],
      sampleData: summary[6],
      evalFunc: summary[7],
      submissionCount: submissionCount,
      requests: requests
    };
  }
  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          submissionCount={this.props.submissionCount}
        />
      );
    });
  }

  renderCards() {
    const {
      balance,
      organizer,
      minimumPayment,
      submissionCount,
      nameProblem,
      description,
      sampleData,
      evalFunc,
    } = this.props;

    const items = [
      {
        header: organizer,
        meta: "Address of Organizer",
        description:
          " The Organizer provides encrypted ML as a service and creates a competition where participats can submit data samples and improved models.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumPayment,
        meta: "Fee to submit data samples (wei)",
        description:
          "Minimum payment participant must make to submit data. This amount will be refunded to the participant with incentives.",
      },
      {
        header: submissionCount,
        meta: "Number of Participants",
        description: "",
      },

     
    ];

    return <Card.Group items={items} />;
  }
  
  
   
  render() {
    
    const { nameProblem, description, sampleData, evalFunc } = this.props;
    const { Header, Row, HeaderCell, Body } = Table;
    

    console.log(sampleData, "eva;",evalFunc);
    const saveFile = () => {
      
      saveAs(
        evalFunc,
        "Inference"
      );
    };
    
    
    
    return (
      
      <Layout>
        <Segment>
        <Grid>
          <Grid.Column width={4}>
            <Image src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          </Grid.Column>
          <Grid.Column width={12}>
            {/* <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
            <Segment>
              <Header
                as='h2'
                content='Name of the Service'
                attach to="top"
              />
              <Container>Team Keanu</Container>
            </Segment>
               <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>Overview</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                </Card>
                 <Card>
                  <Card.Content>
                    <Card.Header>Project Details</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                </Card>
                </Card.Group>
          </Grid.Column>
        </Grid>
        </Segment>
          
        <Segment>
        <h1 style={{color: "#D43790"}}>{nameProblem}</h1>
        <p>{description}</p>
        <br />
        <Grid>
          <Grid.Row>
            <Grid.Column width={20} style={{margin: 'auto'}}>{this.renderCards()}</Grid.Column>
          </Grid.Row>
          
        <Container style={{width:"100%"}}>
          {/* <Segment>
          <Segment style={{alignItems:"center"}}>
          <Grid.Row>
            <Grid.Column width={20}>
              {" "}
              <h1 style={{color: "#D43790"}}>Examples of Data</h1>
              <br />
              <figure>
                <img src={sampleData} alt="images" width="800" />
              </figure>
            </Grid.Column>
          </Grid.Row>
          </Segment> */}
          <Segment>
           <Divider horizontal>
      <Header as='h2'>
        <Icon name='bar chart' />
        <font color="purple">contributions</font>
      </Header>
    </Divider>
            <br/>
    <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column >
        <Segment text style={{textAlign:"center",fontSize:"20px"}}>AI Models</Segment>
        <Card.Group itemsPerRow="2" centered>
              <Card>
                <Label attached='top'>AI Model</Label>
    <Card.Content header='Name:' />
    {/* <Card.Content header='Description:' /> */}
    <Card.Content description={description} />

    <Card.Content header="Price" >Price<Button basic color="green" style={{maxWidth:"20",float:"right"}}>$45</Button></Card.Content>
 
      <Button
      color= 'teal'
      icon='cart'
      content= 'Checkout'
      iconPosition='center'
     style={{align:"center"}}/>
    

    <Card.Content extra>
      <Icon name='user' />25 contributors
    </Card.Content>
  </Card>
         <Card>
           <Label attached='top'>AI Model</Label>
    <Card.Content header='Name:' />
    {/* <Card.Content header='Description:' /> */}
   <Card.Content description={description} />

    <Card.Content header="Price" >Price<Button basic color="green" style={{maxWidth:"20",float:"right"}}>$45</Button></Card.Content>
 
      <Button
      color= 'teal'
      icon='cart'
      content= 'Checkout'
      iconPosition='center'
     style={{align:"center"}}/>
    <Card.Content extra>
      <Icon name='user' />25 contributors
    </Card.Content>
  </Card>
    <Card>
       <Label attached='top'>AI Model</Label>
    <Card.Content header='Name:' />
    {/* <Card.Content header='Description:' /> */}
    <Card.Content description={description} />

    <Card.Content header="Price" >Price<Button basic color="green" style={{maxWidth:"20",float:"right"}}>$45</Button></Card.Content>
 
      <Button
      color= 'teal'
      icon='cart'
      content= 'Checkout'
      iconPosition='center'
     style={{align:"center"}}/>
    <Card.Content extra>
      <Icon name='user' />25 contributors
    </Card.Content>
  </Card>
  <Card>
     <Label attached='top'>AI Model</Label>
    <Card.Content header='Name:' />
    {/* <Card.Content header='Description:' /> */}
 <Card.Content description={description} />

    <Card.Content header="Price" >Price<Button basic color="green" style={{maxWidth:"20",float:"right"}}>$45</Button></Card.Content>
 
      <Button
      color= 'teal'
      icon='cart'
      content= 'Checkout'
      iconPosition='center'
     style={{align:"center"}}/>
    <Card.Content extra>
      <Icon name='user' />25 contributors
    </Card.Content>
  </Card>
  <Card>
     <Label attached='top'>AI Model</Label>
    <Card.Content header='Name:'/>
    {/* <Card.Content header='Description:' /> */}
 <Card.Content description={description} />

    <Card.Content header="Price" >Price<Button basic color="green" style={{maxWidth:"20",float:"right"}}>$45</Button></Card.Content>
 
      <Button
      color= 'teal'
      icon='cart'
      content= 'Checkout'
      iconPosition='center'
     style={{align:"center"}}/>
    <Card.Content extra>
      <Icon name='user' />25 contributors
    </Card.Content>
      </Card>
      </Card.Group>
      </Grid.Column>
      <Grid.Column>
          <Segment text style={{textAlign:"center",fontSize:"20px"}}>Data Sets</Segment>
         <Card.Group itemsPerRow="2" centered>
              <Card>
                 <Label attached='top'>Data Set</Label>
    <Card.Content header='Name:' />
    {/* <Card.Content header='Description:' /> */}
     <Card.Content description={description} />

    <Card.Content header="Price" >Price<Button basic color="green" style={{maxWidth:"20",float:"right"}}>$45</Button></Card.Content>
 
      <Button
      color= 'teal'
      icon='cart'
      content= 'Checkout'
      iconPosition='center'
     style={{align:"center"}}/>
    <Card.Content extra>
      <Icon name='user' />25 contributors
    </Card.Content>
  </Card>
         <Card>
                 <Label attached='top'>Data Set</Label>
    <Card.Content header='Name:' /> 
    <Card.Content description={description} />
    <Card.Content header="Price" >Price<Button basic color="green" style={{maxWidth:"20",float:"right"}}>$45</Button></Card.Content>
 
      <Button
      color= 'teal'
      icon='cart'
      content= 'Checkout'
      iconPosition='center'
     style={{align:"center"}}/>
    <Card.Content extra>
      <Icon name='user' />25 contributors
    </Card.Content>
  </Card>
    <Card>
           <Label attached='top'>Data Set</Label>
    <Card.Content header='Name:' /> 
    <Card.Content description={description} />

    <Card.Content header="Price" >Price<Button basic color="green" style={{maxWidth:"20",float:"right"}}>$45</Button></Card.Content>
 
      <Button
      color= 'teal'
      icon='cart'
      content= 'Checkout'
      iconPosition='center'
     style={{align:"center"}}/>
    <Card.Content extra>
      <Icon name='user' />25 contributors
    </Card.Content>
  </Card>
  <Card>
                 <Label attached='top'>Data Set</Label>
    <Card.Content header='Name:' />
    <Card.Content description={description} />

    <Card.Content header="Price" >Price<Button basic color="green" style={{maxWidth:"20",float:"right"}}>$45</Button></Card.Content>
 
      <Button
      color= 'teal'
      icon='cart'
      content= 'Checkout'
      iconPosition='center'
     style={{align:"center"}}/>
    <Card.Content extra>
      <Icon name='user' />25 contributors
    </Card.Content>
  </Card>
  <Card>
                 <Label attached='top'>Data Set</Label>
    <Card.Content header='Name:' />
 <Card.Content description={description} />

    <Card.Content header="Price" >Price<Button basic color="green" style={{maxWidth:"20",float:"right"}}>$45</Button></Card.Content>
 
      <Button
      color= 'teal'
      icon='cart'
      content= 'Checkout'
      iconPosition='center'
     style={{align:"center"}}/>
    <Card.Content extra>
      <Icon name='user' />25 contributors
    </Card.Content>
      </Card>
      </Card.Group>
      </Grid.Column>
    </Grid.Row>
    </Grid>
   
      </Segment>       
      </Container>
      
      <Example/>
        {/* <div><div class="ui attached tabular menu"><a class="active item">Tab 1</a><a class="item">Tab 2</a><a class="item">Tab 3</a></div><div class="ui bottom attached segment active tab">Tab 1 Content</div></div> */}
          <Grid.Row>
            <Segment>
            <Grid.Column width={6}>
              <h1 style={{color: "#D43790"}}>Submit Data Sample</h1>
              <br />
              <ContributeDataForm address={this.props.address} />
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
            <Grid.Column width={6}>
              <h1 style={{color: "#D43790"}}>Submit Model</h1>
              <br />
              <ContributeModelForm />
            </Grid.Column>
            </Segment>
          </Grid.Row>
        {/* </Segment> */}
        {/* </Container> */}


          <h1 style={{color: "#D43790"}}>Data Submissions</h1>
        <Link route={`/competitions/${this.props.address}/requests/new`}>
          <a></a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Participant Address</HeaderCell>
              <HeaderCell>Data Sample</HeaderCell>
              <HeaderCell>Prediction</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Status</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
          <Grid.Row>
            <Grid.Column width={16}>
              <br />
              <h1 style={{color: "#D43790"}}>Encrypted Inference</h1>
              <p>
              Encrypted inference can be served via smart contracts which contains the code of the inference function. It is utilised by the users in exchange for a payment to the AI Service Publisher. MPC represents the secure multi-party computation (SMPC) technique used for encrypted Machine Learning services.
              {" "}
              </p>
              <button  onClick={saveFile}>
                Download script to request private predictions
              </button>
              <br /> <br />
            
            </Grid.Column>
          </Grid.Row>
        <br/>   <br/>   <br/>

          <Grid.Row>
            <Grid.Column>
            <br/>   <br/>
              <Link route={`/competitions/${this.props.address}/requests`}>
                <a>
                </a>
              </Link>
              <br/>   <br/>   <br/><br/>   <br/>   <br/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Segment>
      </Layout>
    );
  }
}

export default CompetitionShow;
