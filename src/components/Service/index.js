import React from "react";
import { Container, Section, StyledButton } from "components/common/CommonStyle";
import { ServiceContainer, ServiceDescription, ServiceDetails, ServiceDetailsTitle, ServiceTitle } from "./ServiceStyle";
import ServiceChef from "assets/images/service-chef.png";

export default function Service() {
    return(
        <Section>
            <Container>
                <ServiceContainer>
                    <img src={ServiceChef} alt="serviceChef" />
                    <div>
                        <ServiceTitle>
                            We Are More Than Multiple Service
                        </ServiceTitle>
                        <ServiceDescription>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </ServiceDescription>
                        <ServiceDetails>
                            <ServiceDetailsTitle>Online Order</ServiceDetailsTitle>
                            <ServiceDetailsTitle>Pre-Reservation</ServiceDetailsTitle>
                            <ServiceDetailsTitle>24/7 Services</ServiceDetailsTitle>
                            <ServiceDetailsTitle>Oragnised Foodie Place</ServiceDetailsTitle>
                            <ServiceDetailsTitle>Clean Kitchen</ServiceDetailsTitle>
                            <ServiceDetailsTitle>Super Chefs</ServiceDetailsTitle>
                        </ServiceDetails>
                        <StyledButton> About Us</StyledButton>
                    </div>
                </ServiceContainer>
            </Container>
        </Section>
    )
}