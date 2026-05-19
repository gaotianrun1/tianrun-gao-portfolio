import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { homedir } from "node:os";

export const runtime = "nodejs";

export async function GET() {
  const filePath = join(process.cwd(), "public/files/CV of Tianrun Gao.pdf");
  const file = await readFile(filePath);

  if (process.env.NODE_ENV !== "production") {
    const downloadsPath = join(homedir(), "Downloads");
    await mkdir(downloadsPath, { recursive: true });
    await writeFile(join(downloadsPath, "CV of Tianrun Gao.pdf"), file);
  }

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="CV of Tianrun Gao.pdf"',
      "Cache-Control": "public, max-age=3600, immutable",
    },
  });
}
