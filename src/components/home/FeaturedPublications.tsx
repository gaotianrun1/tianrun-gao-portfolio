import { featuredPublications, work } from "@/resources";
import { Card, Column, Grid, Heading, Media, Row, SmartLink, Text } from "@once-ui-system/core";

export function FeaturedPublications() {
  return (
    <Column fillWidth gap="24" marginTop="16">
      <Row fillWidth horizontal="between" vertical="end" gap="16" s={{ direction: "column" }}>
        <Column gap="8">
          <Text variant="label-strong-s" onBackground="brand-weak">
            Selected work
          </Text>
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Featured publications
          </Heading>
        </Column>
        <SmartLink href={work.path} suffixIcon="arrowRight">
          View all publications
        </SmartLink>
      </Row>
      <Grid columns="3" s={{ columns: 1 }} fillWidth gap="16">
        {featuredPublications.map((publication) => (
          <Card
            key={publication.title}
            href={publication.link}
            aria-label={`Open ${publication.title}`}
            fillWidth
            direction="column"
            gap="0"
            padding="4"
            border="neutral-alpha-medium"
            background="surface"
            radius="l"
            transition="micro-medium"
          >
            <Media
              src={publication.image}
              alt={`${publication.title} research preview`}
              sizes="(max-width: 768px) 100vw, 320px"
              aspectRatio="16 / 9"
              radius="l"
            />
            <Column fillWidth gap="12" padding="16">
              <Row fillWidth horizontal="between" gap="12" wrap>
                <Text variant="label-strong-s" onBackground="brand-weak">
                  {publication.venue}
                </Text>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {publication.featured.label}
                </Text>
              </Row>
              <Heading as="h3" variant="heading-strong-m" wrap="balance">
                {publication.title}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {publication.featured.summary}
              </Text>
            </Column>
          </Card>
        ))}
      </Grid>
    </Column>
  );
}
