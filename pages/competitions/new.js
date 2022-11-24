import React, { Component } from "react";
import { Form, Button, Input, Message, Dropdown } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

import { create } from 'ipfs-http-client'
const projectId = '2G821LGudGM2c8B36WGrJUcmFwB';
const projectSecret = '21ca10b8ce3bcb0b556832bebb150eee';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});
class CompetitionNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
    loading: false,
    label: "",
    name: "",
    description: "",
    fileSampleData: null,
    fileEvalFunction: null,
    urlArrSampleData:"",
    urlArrEvalFunction:"",
  };

 
  
  onSubmit = async (event) => {
    
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {

      let urlImage = ''
      let result =await client.add(this.state.fileSampleData)
  .then(result => {
    console.log("w"+result.path);
    urlImage= 'https://ml.infura-ipfs.io/ipfs/'+ result.path;
    this.setState({ urlArrSampleData:urlImage});
    console.log(urlImage)

  });
console.log(result)

  let urlFunc = ''
  let result2 = await client.add(this.state.fileEvalFunction)
  .then(result => {
    console.log(result.path);
    urlFunc= 'https://ml.infura-ipfs.io/ipfs/'+ result.path;
    this.setState({ urlArrEvalFunction:urlFunc});
  });




  console.log("Ss"+urlImage,urlFunc)

      try {
        const accounts = await web3.eth.getAccounts();
        console.log("loggg it"+ this.state.urlArrSampleData+this.state.urlArrEvalFunction)

        await factory.methods
          .createCompetition(this.state.minimumContribution, this.state.name, this.state.description, this.state.urlArrSampleData ,this.state.urlArrEvalFunction)
          .send({
            value: "100",
            from: accounts[0],
          });
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }
      
    } catch (error) {
      console.log(error.message);
    }
    this.setState({ loading: false });
  };

  retrieveFileSampleData = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      console.log("Buffer data: ", Buffer(reader.result));
      this.setState({ fileSampleData: Buffer(reader.result)})
    }
    e.preventDefault();  
  }

  retrieveFileEvalFunction = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);


    reader.onloadend = () => {
      console.log("Buffer data: ", Buffer(reader.result));
      this.setState({ fileEvalFunction: Buffer(reader.result)})
    }

    e.preventDefault();  
  }

  
  render() {
    return (
      <Layout>
        <h3>Create Project </h3>
        <p>
        A project is a collaborative environment where AI businesses can offer encrypted Machine Learning services, and crowdsource data and models.
        </p>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <br />
          <Form.Field>
            <label>Name</label>
            <Input
              labelPosition="right"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <Input
              labelPosition="right"
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Reward Funds</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>
          <br /> <br />
          <Form.Field>
            <label>Upload Example Data</label>
            <Input
              label="data"
              labelPosition="right"
              type="file"
              onChange={this.retrieveFileSampleData}
            />
          </Form.Field>
          
          <br /> <br />
          <Form.Field>
            <label>Upload Inference Function</label>
            <p>
            </p>
            <Input label="model" labelPosition="right" type="file"  onChange={this.retrieveFileEvalFunction} />
          </Form.Field>
          <br />
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
          <br /> <br /> <br />
        </Form>
      </Layout>
    );
  }
}

export default CompetitionNew;
