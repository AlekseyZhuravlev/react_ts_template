import React from "react";
import { Profiler } from "react";
import { Suspense } from "react";
import {Container, Row, Col} from "react-bootstrap";
// @ts-ignore
import {Switch, Route} from "react-router-dom";

const Counter = React.lazy(() => import("../Counter/CounterHOC"));
const Table = React.lazy(() => import("../Table/TableHOC"));

import "./mainPage.scss";
import ErrorBoundary from "../ErrorBoundary";

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
                    <Suspense fallback={"...loading"}>
                        <Switch>
                            <ErrorBoundary>
                                <Profiler id={"counter"} onRender={(...settings) => {console.log(settings)}}>
                                        <Route exac path={"/counter"} component={Counter}/>
                                        <Route exac path={"/table"} component={Table} />
                                </Profiler>
                            </ErrorBoundary>
                        </Switch>
                    </Suspense>
                </Row>
            </Container>
        );
    }
}