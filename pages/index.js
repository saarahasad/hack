import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button, Segment } from "semantic-ui-react";
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
      <Layout>
        <div>
          <Segment raised>
            {" "}
            <h2>Objectives</h2>{" "}
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
            </p>
          </Segment>
          <br/><br></br>
          <p> <Link route="/competitions/new">
            <a>
              <Button
                floated="right"
                content="Create Project"
                icon="add circle"
                primary
              />
            </a>
          </Link></p>
          <div class=""></div>
          <h3>Open Projects</h3>
     
         
          <br />
          {this.renderCompetitions()}
        </div>
      </Layout>
    );
  }
}

export default CompetitionIndex;
