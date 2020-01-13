import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Text } from 'reacting-squirrel';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import './styles.scss';

interface IComponentProps {
    activeNavKey?: string,
}

interface IComponentState {
    collapsed: boolean,
}

const BASE_CLASSNAME = 'dvmrcnrs-header';
const NAVBAR_BASE_CLASSNAME = 'dvmrcnrs-navbar';
const NAV_BASE_CLASSNAME = 'dvmrcnrs-navbar-nav';

const NAV_DATA: Array<{ key: string, url: string, color?: string }> = [
    {
        key: 'nav_technologie',
        url: '#technologie',
    },
    {
        key: 'nav_kontakt',
        url: '#kontakt',
    },
]

export default class Header extends React.Component<IComponentProps, IComponentState> {

    static propsTypes = {
        activeNavKey: PropTypes.string,
    }

    static defaultProps: IComponentProps = {
        activeNavKey: null,
    }

    constructor(props: any) {
        super(props);

        this.state = {
            collapsed: true,
        };

        this.onToggleClick = this.onToggleClick.bind(this);
    }

    onToggleClick() {
        const { collapsed } = this.state;

        this.setState({
            collapsed: !collapsed,
        })
    }

    renderNavLinks() {
        return NAV_DATA.map(({ key, url }, index) => {
            const { activeNavKey } = this.props;
            return (
                <Nav.Link
                    bsPrefix={`${NAV_BASE_CLASSNAME}__link`}
                    key={key}
                    href={url}
                    active={key === activeNavKey}
                >
                    <Text dictionaryKey={key} />
                </Nav.Link>
            );
        })
    }

    render() {
        return (
            <>
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Helmet>
                <header className={BASE_CLASSNAME}>
                    <Container className={`${BASE_CLASSNAME}__container`}>
                        <Navbar bsPrefix={NAVBAR_BASE_CLASSNAME} expand="lg" expanded>
                            <Navbar.Brand bsPrefix={`${NAVBAR_BASE_CLASSNAME}__brand`} href="/">
                                <span className={`${BASE_CLASSNAME}__logo`}>
                                    <img src="./img/logo.png" className={`${BASE_CLASSNAME}__logoImg`} alt="Logo" />
                                </span>
                            </Navbar.Brand>
                            <span className={`${BASE_CLASSNAME}__hiredFlag`}>Hired</span>
                            {/* <Navbar.Toggle bsPrefix={`${NAVBAR_BASE_CLASSNAME}__toggler`} label="Menu" aria-controls="main-navbar-nav">
                                Menu
                                <span className={`${NAVBAR_BASE_CLASSNAME}__toggler-icon`} />
                            </Navbar.Toggle> */}
                            <Navbar.Collapse bsPrefix={`${NAVBAR_BASE_CLASSNAME}__collapse`} id="main-navbar-nav">
                                <Nav bsPrefix={NAV_BASE_CLASSNAME}>
                                    {this.renderNavLinks()}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className={`${BASE_CLASSNAME}__content`}>
                            <h1 className={`${BASE_CLASSNAME}__title`}>We develop apps<br/>for money</h1>
                        </div>
                        <Button href="#main" variant="link" className={`${BASE_CLASSNAME}__scrollBtn`}><span>Scroll down</span></Button>
                    </Container>
                </header>
            </>
        )
    }
}
