import { Container, CtaBtn, Section } from "components/common/CommonStyle";
import React from "react";
import { MenuData } from "./MenuData";
import { MenuCard, MenuContainer, MenuCta, MenuDescription, MenuName, MenuPrice, MenuTitle } from "./MenuStyle";

import {AiTwotoneStar} from "react-icons/ai"

export default function Menu() {
    return(
        <Section>
            <Container>
                <MenuTitle>Popular Dishes</MenuTitle>
                <MenuContainer>
                    {MenuData.map((data) => {
                        return(
                            <MenuCard key={data.id}>
                                <img src={data.image} alt="dish"/>
                                <MenuName>{data.title}</MenuName>
                                <div>
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                </div>
                                <MenuDescription>{data.description}</MenuDescription>
                                <MenuCta>
                                    <MenuPrice>{data.price}</MenuPrice>
                                    <CtaBtn>Add to Cart</CtaBtn>
                                </MenuCta>

                            </MenuCard>
                        )
                    })}
                </MenuContainer>
            </Container>
        </Section>
    )
}