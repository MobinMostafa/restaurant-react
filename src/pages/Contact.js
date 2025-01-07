import React, { Component } from 'react'
import Layout from '../compenents/Layout'
import { Col, Form, FormGroup, Input, Label,Button } from 'reactstrap'

export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Phone: '',
            Message: '',
            agree: false,
            contactType: 'By Phone'
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    handelSubmit = (event) => {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

  render() {
    document.title = "Contact"
    return (
    <>
      <Layout>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pt-5">
                    <h1 className="text-center pb-3">Contact Us</h1>
                    <p className="text-center">We'd love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>
                </div>
                <div className="col-md-8 offset-md-2 py-5">
                    <Form onSubmit={this.handelSubmit} >
                        <FormGroup row>
                           <Label for="FirstName" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" name="FirstName" placeholder="First Name" valid={this.state.FirstName} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                           <Label for="LastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" name="LastName" placeholder="Last Name" valid={this.state.LastName} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                           <Label for="Email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" name="Email" placeholder="Email" valid={this.state.Email} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                           <Label for="Phone" md={2}>Phone</Label>
                            <Col md={10}>
                                <Input type="text" name="Phone" placeholder="Phone" valid={this.state.Phone} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 6, offset: 2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} />
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                                <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange} >
                                    <option>By Phone</option>
                                    <option>By Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Message" md={2}>Your Message</Label>
                            <Col md={10}>
                                <Input type="textarea" name="Message" rows="12" valid={this.state.Message} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
      </Layout>
    </>
    )
  }
}
