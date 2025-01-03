import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const VercelInviteUserEmail = ({
  username,
  userImage,
  invitedByUsername,
  invitedByEmail,
  teamName,
  teamImage,
  inviteLink,
  inviteFromIp,
  inviteFromLocation,
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html style={{ backgroundColor: "#FBFBFB" }}>
      <Head />
      <Tailwind>
        <Section className="my-[16px] ">
          <Container
           className="mx-auto"
          >
            <Img
              alt="Grinder Collection"
              className="w-[225px] h-[61px] mx-auto"
              src={`${baseUrl}/static/T&F.png`}
            />
          </Container>
          <Hr className="border-t-2 border-gray-300" />
          <Container className=" w-00 rounded-[11px] border-[2px] border-[rgba(30,100,116,0.18)] bg-[#1E6474] shadow-[0px_4px_4px_0px_rgba(34,100,115,0.03)] mt-5 py-5 ">
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
        </Section>
        <Section
          className="mt-[29px] "
          style={{
            display: "flex",
            width:'100%',
            justifyContent: "center",
          }}
        >
          <Row className="mt-[5px] ">
            <Column style={{ backgroundColor: "#FBFBFB", padding: "5px" }}>
              <Section
                className="rounded-[8px] border-[9px] bg-white p-5 w-fit"
                style={{
                  border: "3px solid rgba(190, 146, 97, 0.05)",
                }}
              >
                <Img
                  src={`${baseUrl}/static/Glass.png`}
                  className="w-[215px] h-[209px] rounded-[10px]"
                />
                <Text
                  className="m-0 text-[#67718B] text-[15px] font-[550] mt-3"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Colored Champagne Coupe
                </Text>
                <Text
                  className="m-0 text-[#67718B] text-[12px] font-[500]"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Estelle Colored Glass
                </Text>
                <Text
                  className="m-0 text-[#282C3F] text-[14px] font-[500]"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  $75
                </Text>
              </Section>
            </Column>
            <Column style={{ backgroundColor: "#FBFBFB", padding: "5px" }}>
              <Section
                className="rounded-[8px] border-[9px] bg-white p-5 w-fit"
                style={{ border: "3px solid rgba(190, 146, 97, 0.05)" }}
              >
                <Img
                  src={`${baseUrl}/static/Bowl.png`}
                  className="w-[215px] h-[209px] rounded-[10px]"
                />
                <Text
                  className="m-0 text-[#67718B] text-[15px] font-[550] mt-3"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Colored Champagne Coupe
                </Text>
                <Text
                  className="m-0 text-[#67718B] text-[12px] font-[500]"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Estelle Colored Glass
                </Text>
                <Text
                  className="m-0 text-[#282C3F] text-[14px] font-[500]"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  $75
                </Text>
              </Section>
            </Column>
            <Column style={{ backgroundColor: "#FBFBFB", padding: "5px" }}>
              <Section
                className="rounded-[8px] border-[9px] bg-white p-5 w-fit"
                style={{ border: "3px solid rgba(190, 146, 97, 0.05)" }}
              >
                <Img
                  src={`${baseUrl}/static/LadiesBag.png`}
                  className="w-[215px] h-[209px] rounded-[10px]"
                />
                <Text
                  className="m-0 text-[#67718B] text-[15px] font-[550] mt-3"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Colored Champagne Coupe
                </Text>
                <Text
                  className="m-0 text-[#67718B] text-[12px] font-[500]"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Estelle Colored Glass
                </Text>
                <Text
                  className="m-0 text-[#282C3F] text-[14px] font-[500]"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  $75
                </Text>
              </Section>
            </Column>
          </Row>
          <Row className="mt-[10px] ">
            <Column style={{ backgroundColor: "#FBFBFB", padding: "5px" }}>
              <Section
                className="rounded-[8px] border-[9px] bg-white p-5 w-fit"
                style={{
                  border: "3px solid rgba(190, 146, 97, 0.05)",
                }}
              >
                <Img
                  src={`${baseUrl}/static/Glass.png`}
                  className="w-[215px] h-[209px] rounded-[10px]"
                />
                <Text
                  className="m-0 text-[#67718B] text-[15px] font-[550] mt-3"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Colored Champagne Coupe
                </Text>
                <Text
                  className="m-0 text-[#67718B] text-[12px] font-[500]"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Estelle Colored Glass
                </Text>
                <Text
                  className="m-0 text-[#282C3F] text-[14px] font-[500]"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  $75
                </Text>
              </Section>
            </Column>
            <Column style={{ backgroundColor: "#FBFBFB", padding: "5px" }}>
              <Section
                className="rounded-[8px] border-[9px] bg-white p-5 w-fit"
                style={{ border: "3px solid rgba(190, 146, 97, 0.05)" }}
              >
                <Img
                  src={`${baseUrl}/static/Bowl.png`}
                  className="w-[215px] h-[209px] rounded-[10px]"
                />
                <Text
                  className="m-0 text-[#67718B] text-[15px] font-[550] mt-3"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Colored Champagne Coupe
                </Text>
                <Text
                  className="m-0 text-[#67718B] text-[12px] font-[500]"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Estelle Colored Glass
                </Text>
                <Text
                  className="m-0 text-[#282C3F] text-[14px] font-[500]"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  $75
                </Text>
              </Section>
            </Column>
            <Column style={{ backgroundColor: "#FBFBFB", padding: "5px" }}>
              <Section
                className="rounded-[8px] border-[9px] bg-white p-5 w-fit"
                style={{ border: "3px solid rgba(190, 146, 97, 0.05)" }}
              >
                <Img
                  src={`${baseUrl}/static/LadiesBag.png`}
                  className="w-[215px] h-[209px] rounded-[10px]"
                />
                <Text
                  className="m-0 text-[#67718B] text-[15px] font-[550] "
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Colored Champagne Coupe
                </Text>
                <Text
                  className="m-0 text-[#67718B] text-[12px] font-[500] mt-3"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  Estelle Colored Glass
                </Text>
                <Text
                  className="m-0 text-[#282C3F] text-[14px] font-[500]"
                  style={{
                    fontFamily: "CircularXX",
                    lineHeight: "normal",
                  }}
                >
                  $75
                </Text>
              </Section>
            </Column>
          </Row>
        </Section>
        <Section
          style={{ padding: "10px", textAlign: "center", paddingTop: "20px" }}
        >
          <Button
            className="box-border rounded-[16px] bg-[#1E6474] px-[82px] py-[12px] text-center font-semibold text-white"
            href="https://react.email"
          >
            SEE ALL RECOMMENDATIONS
          </Button>
        </Section>
        <Text
          className="text-center font-[CircularXX] text-[16px] italic"
          style={{ fontWeight: 400, color: "#23262F" }}
        >
          Need more help finding the perfect gift? Start a new session with
          <strong style={{ color: "#1E6474" }}> Charlotte</strong> 
        </Text>
      </Tailwind>
    </Html>
  );
};

VercelInviteUserEmail.PreviewProps = {
  username: "alanturing",
  userImage: `${baseUrl}/static/vercel-user.png`,
  invitedByUsername: "Alan",
  invitedByEmail: "alan.turing@example.com",
  teamName: "Enigma",
  teamImage: `${baseUrl}/static/vercel-team.png`,
  inviteLink: "https://vercel.com/teams/invite/foo",
  inviteFromIp: "204.13.186.218",
  inviteFromLocation: "São Paulo, Brazil",
} as VercelInviteUserEmailProps;

export default VercelInviteUserEmail;
