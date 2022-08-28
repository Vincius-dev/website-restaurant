import { Container, Section } from "components/common/CommonStyle";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ReviewContainer, ReviewData, SectionTitle, ReviewCard, CostumerReview, CostumerName } from "./ReviewsStyle";

import UserOne from "assets/images/user-1.jpg";
import UserTwo from "assets/images/user-2.jpg";

export default function Reviews() {
    return(
        <Section>
            <Container>
                    <SectionTitle>What Our Costumers Says?</SectionTitle>
                    <ReviewData>
                        <Carousel
                            autoPlay={true}
                            showArrows={false}
                            showIndicators={false}
                            showThumbs={false}
                            infiniteLoop={true}
                        >
                            <ReviewContainer>
                                <ReviewCard>
                                    <CostumerReview>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </CostumerReview>
                                    <img src={UserOne} alt="user" />
                                    <CostumerName>Maria Scott</CostumerName>
                                </ReviewCard>
                            </ReviewContainer>
                            <ReviewContainer>
                                <ReviewCard>
                                    <CostumerReview>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </CostumerReview>
                                    <img src={UserTwo} alt="userTwo" />
                                    <CostumerName>Maria Nelson</CostumerName>
                                </ReviewCard>
                            </ReviewContainer>
                        </Carousel>
                    </ReviewData>
            </Container>
        </Section>
    )
}