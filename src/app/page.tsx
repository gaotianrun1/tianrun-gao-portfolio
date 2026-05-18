import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
  Tag,
} from "@once-ui-system/core";
import { home, about, person, baseURL, researchAreas, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="24" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.35} horizontal="center">
            <Row gap="12" wrap horizontal="center">
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  About Me
                </Row>
              </Button>
              <Button href={work.path} variant="primary" size="m" arrowIcon>
                Publications
              </Button>
              <Button href="/files/tianrun-gao-cv.pdf" variant="tertiary" size="m" prefixIcon="document">
                Download CV
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>
      <Column fillWidth gap="24" marginTop="16">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Row fillWidth gap="24" s={{ direction: "column" }}>
          <Column flex={1} paddingLeft="l" paddingTop="12" gap="12">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Research focus
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Scientific ML and engineering mechanics, with publications as the center of the site.
            </Text>
          </Column>
          <Row flex={3} paddingX="20" gap="8" wrap>
            {researchAreas.map((area) => (
              <Tag key={area} size="l">
                {area}
              </Tag>
            ))}
          </Row>
        </Row>
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>
    </Column>
  );
}
