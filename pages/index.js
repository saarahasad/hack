import React, { Component } from "react";
import factory from "../ethereum/factory";
import {
Card,
Button,
Segment,
Divider,
Grid,
Image,
Container,
Header,
} from "semantic-ui-react";
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
description: (
<div>
<Card style={{ width: "100%" }}>
<Card.Content style={{width:"100%"}}>
<Image
floated="right"
size="medium"
src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
/>
<Card.Header>Steve Sanders</Card.Header>
<Card.Meta style={{ fontSize: "10px" }} >{address}</Card.Meta>
<Card.Description>
Steve wants to add you to the group{" "}
<strong>best friends</strong>
</Card.Description>
</Card.Content>
<Card.Content extra>
<div className="ui two buttons">
<Button basic color="green">
<br />
<Link route={`/competitions/${address}`}>
<a>View Service</a>
</Link>{" "}
</Button>
</div>
</Card.Content>
</Card>
</div>
),
fluid: true,
};
});
return <Card.Group items={items} />;
}

render() {
return (
<Layout style={{ margin: "20px", padding: "25px" , width:"80"}}>
<Segment style={{ margin: "20", background: "black", padding: "50px" }}>
<Grid columns={2} style={{ padding: "0" }}>
<Grid.Column style={{ background: "#481a58" }} align="center">
<Image
src="https://i.ibb.co/zfxd19D/landing-Page2.jpg"
size="large"
align="center"
/>
</Grid.Column>
<Grid.Column style={{ background: "#481a58", color: "white" }}>
<Header
as="h1"
style={{
color: "white",
paddingLeft: "13px",
fontFamily: "Rockwell",
}}
>
Overview
</Header>
<Segment
style={{
background: "#481a58",
color: "white",
textAlign: "justify",
}}
>
Artificial Intelligence (AI) and blockchain are two disruptive
technologies proving to be a powerful combination, improving
virtually every industry. Research in Artificial Intelligence
has come a long way, with many corporations, organizations and
individuals greatly benefiting from Machine Learning services.
However, corporations, organizations and individuals with
problems AI can solve are hesitant to solicit services from
third-party agents by sharing their private data to obtain those
valuable predictions. Further, research on improving Machine
Learning models suggests utilizing larger datasets to obtain
better working models. However, handling the labelling of a
sufficient amount of data with limited in-house resources is a
time-consuming and costly operation. Consequently, businesses
prefer crowdsourcing options when labelling data to train
Machine Learning models. Also, protecting the business's data is
as imperative as protecting the customer's data. It is not in
favour of businesses to share their Machine Learning models with
those they offer services to, as these models may be
proprietary. This proposal focuses on creating a community of
machine learning practitioners who can contribute to AI
businesses by building models and datasets in a blockchain
environment in exchange for a reward. It also permits agents and
organizations with problems that could be solved with AI to
solicit solutions without sharing their data.
</Segment>
</Grid.Column>
</Grid>

</Segment>



<br />

<Container style={{ width: "100%", background: "#EFF5F5" }}>
<Grid>
<Grid.Column
floated="left"
width={5}
style={{
margin: "20px",
fontSize: "25px",
fontFamily: "Rockwell",
}}
>
Services

</Grid.Column>
<Grid.Column
floated="right"
width={5}
style={{ marginRight: "20px" }}
>
<Link route="/competitions/new">
<a>
<Button
floated="right"
content="Create Service"
icon="add circle"
color="purple"
/>
</a>
</Link>
</Grid.Column>
</Grid>
</Container>

<br />

    {this.renderCompetitions()} 

      

</Layout>
);
}
}

export default CompetitionIndex;

