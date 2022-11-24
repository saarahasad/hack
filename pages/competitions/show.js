import React, { Component } from "react";
import { Card, Grid, Button, Table } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Competition from "../../ethereum/competition";
import web3 from "../../ethereum/web3";
import ContributeDataForm from "../../components/ContributeDataForm";
import ContributeModelForm from "../../components/ContributeModelForm";
import { Link } from "../../routes";
import { CodeBlock } from "react-code-blocks";
import RequestRow from "../../components/RequestRow";
import { saveAs } from "file-saver";

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
        <h1 style={{color: "#D43790"}}>{nameProblem}</h1>
        <p>{description}</p>
        <br />
        <Grid>
          <Grid.Row>
            <Grid.Column width={20} style={{margin: 'auto'}}>{this.renderCards()}</Grid.Column>
          </Grid.Row>

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

          <Grid.Row>
            <Grid.Column width={6}>
              <h1 style={{color: "#D43790"}}>Submit Data Sample</h1>
              <br />
              <ContributeDataForm address={this.props.address} />
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={6}>
              <h1 style={{color: "#D43790"}}>Submit Model</h1>

              <br />
              <ContributeModelForm />
            </Grid.Column>
          </Grid.Row>

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
      </Layout>
    );
  }
}

export default CompetitionShow;
