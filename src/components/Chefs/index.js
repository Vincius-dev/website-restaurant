import { Container, Section } from "components/common/CommonStyle";
import React from "react";
import { ChefsContainer, SectionTitle, ChefData, ChefName } from "./ChefsStyle";
import { ChefsData } from "./ChefsData";

export default function Chefs() {
    return(
        <Section>
            <Container>
                <SectionTitle>
                    Meet Our Chefs
                </SectionTitle>
                <ChefsContainer>
                    {ChefsData.map((data) => {
                        return (
                            <ChefData key={data.id}>
                                <img src={data.image} alt="chef" />
                                <ChefName>{data.name}</ChefName>
                            </ChefData>
                        )
                    })}
                </ChefsContainer>
            </Container>
        </Section>
    )
}