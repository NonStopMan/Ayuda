import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Container, Row } from 'reactstrap';

export default class SeachForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: '',
            year: '',
            isOrganic: '',
            hasLabels: '',
            FilterBeers: false
        }
    }
    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleStatusChange(event) {
        this.setState({ status: event.target.value });
    }
    handleYearChange(event) {
        this.setState({ year: event.target.value });
    }
    handleIsOrganicChanged(event) {
        if (event.target.checked) {
            this.setState({ isOrganic: 'Y' }); return;
        }
        this.setState({ isOrganic: 'N' });
    }
    handleHasLabelsChanged(event) {
        if (event.target.checked) {
            this.setState({ hasLabels: 'Y' }); return;
        }
        this.setState({ isOrganic: 'N' });
    }
    Search() {
        this.setState({FilterBeers: true})
        this.props.updateSearchModel(this.state);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 12, offset: 2 }}>
                        <p></p>
                    </Col>
                </Row>
                <Form >
                    <FormGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Input type="text" placeholder="Enter Name" value={this.state.name} onChange={(event) => this.handleNameChange(event)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="year" sm={2}>Year</Label>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Input type="text" name="Year" id="Year" placeholder="Enter Year" value={this.state.Year} onChange={(event) => this.handleYearChange(event)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="statusDropDown" sm={2}>Status</Label>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Input type="select" name="select" id="statusSelect" onChange={(event) => this.handleStatusChange(event)}>
                                <option value="verified">Verified</option>
                                <option value="new_unverified">New, Unverified</option>
                                <option value="update_pending">Update, Pending</option>
                                <option value="delete_pending">Delete, Pending</option>
                                <option value="deleted">Deleted</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="isOrganic" sm={2}>Is Organic</Label>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="IsOrganic" checked={this.state.isOrganic} onChange={(event) => this.handleIsOrganicChanged(event)} />
                                    Is Organic
                            </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="hasLabels" sm={2}>Has Labels</Label>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="HasLabels" checked={this.state.hasLabels} onChange={(event) => this.handleHasLabelsChanged(event)} />
                                    Has Labels
                            </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm="12" md={{ size: 8, offset: 11 }}>
                            <Button color="success" onClick={() => this.Search()}>Search</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}