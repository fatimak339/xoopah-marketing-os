import { Client } from "@notionhq/client";

export const H2_SECTIONS = ["ICP", "Competitors", "Content", "Reporting"] as const;
export type H2Section = (typeof H2_SECTIONS)[number];

export type NotionDoc = {
  id: string;
  title: string;
  url: string;
  lastEdited: string;
};

/**
 * Pulls pages from the Notion "H2" database tagged with the given Section.
 * Requires NOTION_API_KEY and NOTION_H2_DATA_SOURCE_ID to be set (Vercel
 * env vars). Returns an empty array (never throws) if not configured or if
 * the Notion API call fails, so pages always render even if sync is down.
 */
export async function getH2Docs(section: H2Section): Promise<NotionDoc[]> {
  const apiKey = process.env.NOTION_API_KEY;
  const dataSourceId = process.env.NOTION_H2_DATA_SOURCE_ID;
  if (!apiKey || !dataSourceId) return [];

  try {
    const notion = new Client({ auth: apiKey });
    const res = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: "Section",
        select: { equals: section },
      },
      sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
    });

    return res.results
      .filter((page): page is typeof page & { properties: any } => "properties" in page)
      .map((page) => {
        const titleProp = page.properties["Doc name"];
        const title =
          titleProp?.type === "title"
            ? titleProp.title.map((t: any) => t.plain_text).join("")
            : "Untitled";
        return {
          id: page.id,
          title: title || "Untitled",
          url: "url" in page ? (page.url as string) : "#",
          lastEdited: "last_edited_time" in page ? (page.last_edited_time as string) : "",
        };
      });
  } catch (err) {
    console.error("Notion sync failed for section", section, err);
    return [];
  }
}
