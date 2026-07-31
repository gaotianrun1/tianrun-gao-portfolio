import { baseURL, person } from "@/resources";
import { CvDownloadButton } from "@/components/CvDownloadButton";
import styles from "../cv.module.scss";
import { generateSiteMetadata } from "@/utils/siteMetadata";

const pages = [1, 2, 3];
const cvFilename = "CV of Tianrun Gao.pdf";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const cvDownloadPath =
  process.env.DEPLOY_TARGET === "github-pages"
    ? `${basePath}/files/${encodeURIComponent(cvFilename)}`
    : `${basePath}/cv/download`;

export async function generateMetadata() {
  return generateSiteMetadata({
    title: `CV Preview - ${person.name}`,
    description: `PDF preview of the curriculum vitae of ${person.name}`,
    baseURL,
    path: "/cv/pdf",
  });
}

export default function CVPreviewPage() {
  return (
    <main className={styles.previewPage}>
      <section className={styles.previewHeader}>
        <h1>CV Preview</h1>
        <p>CV of Tianrun Gao</p>
        <div className={styles.previewActions}>
          <CvDownloadButton className={styles.downloadLink} href={cvDownloadPath} filename={cvFilename} />
          <a className={styles.secondaryLink} href="/cv">
            Back to CV
          </a>
        </div>
      </section>
      <section className={styles.previewPages}>
        {pages.map((page) => (
          <div key={page} className={styles.pageFrame}>
            <img
              className={styles.pageImage}
              src={`/images/cv/page-${page}.png`}
              alt={`CV of Tianrun Gao page ${page}`}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
