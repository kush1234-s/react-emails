import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const images = [
  [
    {
      src: "https://react.email/static/atmos-vacuum-canister.jpg",
      alt: "Stagg Electric Kettle",
      item: "Colored Champagne Coupe",
      type: "Estelle Colored Glass",
      price: "$75",
    },
    {
      src: "https://react.email/static/stagg-eletric-kettle.jpg",
      alt: "Stagg Electric Kettle",
      item: "Colored Champagne Coupe",
      type: "Estelle Colored Glass",
      price: "$75",
    },

    {
      src: "https://react.email/static/ode-grinder.jpg",
      alt: "Stagg Electric Kettle",
      item: "Colored Champagne Coupe",
      type: "Estelle Colored Glass",
      price: "$75",
    },
  ],
  [
    {
      src: "https://react.email/static/ode-grinder.jpg",
      alt: "Stagg Electric Kettle",
      item: "Colored Champagne Coupe",
      type: "Estelle Colored Glass",
      price: "$75",
    },
     {
      src: "https://react.email/static/clyde-electric-kettle.jpg",
      alt: "Stagg Electric Kettle",
      item: "Colored Champagne Coupe",
      type: "Estelle Colored Glass",
      price: "$75",
    },
    {
      src: "https://react.email/static/stagg-eletric-kettle.jpg",
      alt: "Stagg Electric Kettle",
      item: "Colored Champagne Coupe",
      type: "Estelle Colored Glass",
      price: "$75",
    },
  ],
];

export const StripeWelcomeEmail = () => (
  <Html style={{ backgroundColor: "#FBFBFB" }}>
    <Head>
      <Tailwind>
        <Section className="my-[16px]">
          <Container
            style={{
              margin: "0 auto",
            }}
          >
            <Img
              alt="Grinder Collection"
              className="w-[225px] h-[61px] mx-auto"
              src={`${baseUrl}/static/T&F.png`}
            />
          </Container>
          <hr
            className="mx-auto"
            style={{ borderTop: "2px solid rgba(30, 100, 116, 0.49)" }}
          />
          <Container className="max-w-[760px] mx-auto rounded-[11px] border-[2px] border-[rgba(30,100,116,0.18)] bg-[#1E6474] shadow-[0px_4px_4px_0px_rgba(34,100,115,0.03)] mt-5 py-5 ">
            <Row>
              <Text
                className="text-center text-3xl font-medium leading-normal text-[#FFF] "
                style={{ fontFamily: "Montserrat", fontWeight: 550 }}
              >
                New gift recommendations based on your feedback
              </Text>
              <Text
                className="text-center text-xl font-medium leading-normal text-[#FFF] px-8"
                style={{ fontFamily: "Bodoni Std !important", fontWeight: 400 }}
              >
                The more we know, the better the gifts will be! Check out these
                updated suggestions. We think they are perfect!
              </Text>
            </Row>
          </Container>

          <Container>
            <Section
              className="mt-[16px]"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "16px",
              }}
            >
              <Row className="mt-[16px]">
                {images.map((group, index) => (
                  <Row
                    key={index}
                    className="block"
                  >
                    {group.map((image, subIndex) => (
                      <Column className="bg-[#FBFBFB] p-[5px] " key={subIndex}>
                        <Section
                          className="rounded-[8px] border-[9px] bg-white p-5 w-fit"
                          style={{
                            border: "3px solid rgba(190, 146, 97, 0.05)",
                          }}
                        >
                          <Img
                            src={image.src}
                            alt={image.alt}
                            className="w-[215px] h-[209px] rounded-[10px]"
                          />
                          <Text
                            className="m-0 text-[#67718B] text-[15px] font-[550] mt-3"
                            style={{
                              fontFamily: "CircularXX",
                              lineHeight: "normal",
                            }}
                          >
                            {image.item}
                          </Text>
                          <Text
                            className="m-0 text-[#67718B] text-[12px] font-[500]"
                            style={{
                              fontFamily: "CircularXX",
                              lineHeight: "normal",
                            }}
                          >
                            {image.type}
                          </Text>
                          <Text
                            className="m-0 text-[#282C3F] text-[14px] font-[500]"
                            style={{
                              fontFamily: "CircularXX",
                              lineHeight: "normal",
                            }}
                          >
                            {image.price}
                          </Text>
                        </Section>
                      </Column>
                    ))}
                  </Row>
                ))}
              </Row>
            </Section>
          </Container>
          <Container className="p-[10px] text-center pt-[20px]">
            <Button
              className="box-border rounded-[16px] bg-[#1E6474] px-[82px] py-[12px] text-center font-semibold text-white"
              href="https://react.email"
            >
              SEE ALL RECOMMENDATIONS
            </Button>
          </Container>
          <Text
            className="text-center font-[CircularXX] text-[16px] italic"
            style={{ fontWeight: 400, color: "#23262F" }}
          >
            Need more help finding the perfect gift? Start a new session with
            <strong style={{ color: "#1E6474" }}> Charlotte</strong>
          </Text>
        </Section>
      </Tailwind>
    </Head>
  </Html>
);

export default StripeWelcomeEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
