import { Column, Heading, Line, Media, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, publicationGroups, work } from "@/resources";
import styles from "./work.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  const highlightAuthor = (authors: string) => {
    const parts = authors.split(/(Tianrun Gao|T\. R\. Gao)/g);

    return parts.map((part, index) =>
      part === "Tianrun Gao" || part === "T. R. Gao" ? (
        <strong key={`${part}-${index}`}>{part}</strong>
      ) : (
        part
      ),
    );
  };

  const publicationImages: Record<string, string> = {
    "RealBench: A Benchmark for Complex Physical Systems with Real-World Data":
      "/images/publications/realbench.svg",
    "GenCP: Towards Generative Modeling Paradigm of Coupled Physics with Application to Fluid-Structure Interaction":
      "/images/publications/gencp.svg",
    "BuildArena: A Physics-Aligned Interactive Benchmark of LLMs for Engineering Construction":
      "/images/publications/buildarena.svg",
    "EqCollide: Equivariant and Collision-Aware Deformable Objects Neural Simulator":
      "/images/publications/eqcollide.svg",
  };

  return (
    <Column maxWidth="m" paddingTop="24" gap="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading variant="display-strong-l" align="center">
        Publications
      </Heading>
      <Column gap="xl" marginBottom="40">
        {publicationGroups.map((group) => (
          <Column key={group.title} gap="m">
            <Column gap="4">
              <Heading as="h2" variant="heading-strong-l">
                {group.title}
              </Heading>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {group.note}
              </Text>
            </Column>
            <Column as="ol" gap="20">
              {group.items.map((item) => {
                const image = publicationImages[item.title];

                return (
                  <Row
                    as="li"
                    key={`${item.title}-${item.year}`}
                    fillWidth
                    gap="16"
                    vertical="start"
                    s={{ direction: "column" }}
                  >
                    {image && (
                      <Row
                        minWidth={10}
                        width={10}
                        height={6}
                        radius="m"
                        overflow="hidden"
                        border="neutral-alpha-weak"
                        s={{ width: 16, height: 9 }}
                      >
                        <Media
                          src={image}
                          alt={`${item.title} thumbnail`}
                          sizes="160px"
                          radius="m"
                        />
                      </Row>
                    )}
                    <Column gap="8" flex={1}>
                      <Text variant="heading-strong-m">{item.title}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {highlightAuthor(item.authors)}
                      </Text>
                      <Row gap="12" wrap vertical="center">
                        <Text variant="body-default-s" onBackground="brand-weak">
                          {item.venue}
                        </Text>
                        {item.link && (
                          <a
                            className={styles.paperLink}
                            href={item.link}
                          >
                            Link
                          </a>
                        )}
                      </Row>
                    </Column>
                  </Row>
                );
              })}
            </Column>
            <Line />
          </Column>
        ))}
      </Column>
    </Column>
  );
}
