import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  AlignmentType,
} from "docx";
import { saveAs } from "file-saver";

export const generateMultipleWordDocument = (tables, fileName) => {
  const docSections = tables.map((table) => {
    if (!table || !table.rows || !table.columns) {
      console.error("Invalid table data", table);
      return {
        properties: {},
        children: [],
      };
    }

    const tableRows = table.rows.map(
      (row) =>
        new TableRow({
          children: table.columns.map(
            (col) =>
              new TableCell({
                children: [new Paragraph(row[col.key]?.toString() || "")],
              })
          ),
        })
    );

    return {
      properties: {},
      children: [
        new Paragraph({
          text: table.title,
          heading: "Heading1",
          alignment: AlignmentType.CENTER,
        }),
        new Table({
          rows: [
            new TableRow({
              children: table.columns.map(
                (col) =>
                  new TableCell({
                    children: [new Paragraph(col.label)],
                  })
              ),
            }),
            ...tableRows,
          ],
        }),
        new Paragraph({
          text: "",
          spacing: { before: 240 }, // Space after each table
        }),
      ],
    };
  });

  const doc = new Document({
    sections: docSections.filter((section) => section.children.length > 0),
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${fileName}.docx`);
  });
};
