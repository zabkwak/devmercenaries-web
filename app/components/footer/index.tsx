import * as React from 'react';

import { Container } from 'react-bootstrap';

import './styles.scss';

interface IComponentProps {}

interface IComponentState {}

const BASE_CLASSNAME = 'dvmrcnrs-footer';

export default class Footer extends React.Component<IComponentProps, IComponentState> {

    render() {
        return (
            <footer className={BASE_CLASSNAME}>
                <Container>
                    <p>&copy; 2020 DEV MERCENARIES. Všechna práva vyhrazena</p>
                </Container>
            </footer>
        )
    }
}
