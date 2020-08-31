import React from "react";
import {Container, Row, Col} from "react-bootstrap/esm";
// @ts-ignore
import {Switch, Route} from "react-router-dom";

import {counterHOC as Counter} from "../Counter/CounterHOC";

import "./mainPage.scss";

export class MainPage extends React.Component<any, any> {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Row>
                        <Col>Menu</Col>
                        <Col>login|Register</Col>
                        <Col>Social links...</Col>
                    </Row>
                    <Row>progress line...</Row>
                    <Row>Breadcrumbs...</Row>
                </Row>
                <Row>
                    <Switch>
                        {/*<Route exac path={"/table"} component={Table} />*/}
                        <Route exac path={"/counter"} component={Counter}/>
                    </Switch>
                </Row>
            </Container>
        );
    }
}