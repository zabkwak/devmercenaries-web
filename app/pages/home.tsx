import * as React from 'react';
import * as WebFontLoader from 'webfontloader';

import { Page } from 'reacting-squirrel';
import { Button, Container, Form, Col } from 'react-bootstrap';

import CanvasBg, { PARAMS } from '../components/canvas-bg';
import Header from '../components/header';
import Footer from '../components/footer';
import SVGIcon, { SVGIconsDefinitions } from '../components/svg-sprite';

WebFontLoader.load({
    custom: {
        families: ['Montserrat:n7,n8', 'Muli:n2'],
        urls: [
            'https://fonts.googleapis.com/css?family=Montserrat:700,800&display=swap',
            'https://fonts.googleapis.com/css?family=Muli:200&display=swap',
        ],
    },
});

export default class HomePage extends Page {

    public render() {
        return (
            <>
                <CanvasBg params={PARAMS.HEADER} />
                <Header />
                <main className="dvmrcnrs-main" id="main">
                    <section className="dvmrcnrs-section" id="technologie">
                        <CanvasBg />
                        <Container>
                            <h2 className="dvmrcnrs-section__title">Technologie, které využíváme</h2>
                            <div className="dvmrcnrs-logos">
                                <div className="dvmrcnrs-logos__item">
                                    <SVGIcon name="nodejs" className="dvmrcnrs-logos__icon" />
                                </div>
                                <div className="dvmrcnrs-logos__item">
                                    <SVGIcon name="react" className="dvmrcnrs-logos__icon" />
                                </div>
                                <div className="dvmrcnrs-logos__item">
                                    <SVGIcon name="ngingx" className="dvmrcnrs-logos__icon" />
                                </div>
                                <div className="dvmrcnrs-logos__item">
                                    <SVGIcon name="mysql" className="dvmrcnrs-logos__icon" />
                                </div>
                                <div className="dvmrcnrs-logos__item">
                                    <SVGIcon name="elasticsearch" className="dvmrcnrs-logos__icon" />
                                </div>
                                <div className="dvmrcnrs-logos__item">
                                    <SVGIcon name="redis" className="dvmrcnrs-logos__icon" />
                                </div>
                            </div>
                            <p className="text-center">...Docker is overrated</p>
                        </Container>
                    </section>
                    <section className="dvmrcnrs-section" id="kontakt">
                        <CanvasBg />
                        <Container>
                            <h2 className="dvmrcnrs-section__title">Kontakt</h2>
                            <div className="dvmrcnrs-contact">
                                <div className="dvmrcnrs-contact__item">
                                    <SVGIcon name="email" className="dvmrcnrs-contact__icon" />
                                    <h3 className="dvmrcnrs-contact__title">E-mail</h3>
                                    <a href="mailto:lukas.macuda@gmail.com" className="dvmrcnrs-contact__link" target="_blank">lukas.macuda@gmail.com</a>
                                </div>
                                <div className="dvmrcnrs-contact__item">
                                    <SVGIcon name="phone" className="dvmrcnrs-contact__icon" />
                                    <h3 className="dvmrcnrs-contact__title">Telefon</h3>
                                    <a href="tel:+420728455634" className="dvmrcnrs-contact__link" target="_blank">+420 728 455 634</a>
                                </div>
                                <div className="dvmrcnrs-contact__item">
                                    <SVGIcon name="github" className="dvmrcnrs-contact__icon" />
                                    <h3 className="dvmrcnrs-contact__title">GitHub</h3>
                                    <a href="https:github.com/dev_mercenaries" className="dvmrcnrs-contact__link" target="_blank">/dev_mercenaries</a>
                                </div>
                            </div>
                        </Container>
                    </section>
                </main>
                <SVGIconsDefinitions />
                <Footer />
            </>
        )
    }
}
