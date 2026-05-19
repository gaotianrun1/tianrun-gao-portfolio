import { Column, Heading, Meta, Row, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { CvDownloadButton } from "@/components/CvDownloadButton";
import styles from "./cv.module.scss";

const pages = [1, 2, 3];
const cvFilename = "CV of Tianrun Gao.pdf";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const cvDownloadPath =
  process.env.DEPLOY_TARGET === "github-pages"
    ? `${basePath}/files/${encodeURIComponent(cvFilename)}`
    : `${basePath}/cv/download`;

export async function generateMetadata() {
  return Meta.generate({
    title: `CV - ${person.name}`,
    description: `Curriculum vitae of ${person.name}`,
    baseURL,
    path: "/cv",
  });
}

export default function CVPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/cv"
        title={`CV - ${person.name}`}
        description={`Curriculum vitae of ${person.name}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column gap="m" horizontal="center">
        <Heading variant="display-strong-l" align="center">
          CV
        </Heading>
        <CvDownloadButton className={styles.downloadLink} href={cvDownloadPath} filename={cvFilename} />
      </Column>
      <Column gap="l" fillWidth horizontal="center" marginBottom="40">
        {pages.map((page) => (
          <Row key={page} className={styles.pageFrame}>
            <img
              className={styles.pageImage}
              src={`/images/cv/page-${page}.png`}
              alt={`CV of Tianrun Gao page ${page}`}
            />
          </Row>
        ))}
      </Column>
    </Column>
  );
}
