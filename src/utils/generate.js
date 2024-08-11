// utils/wordDocumentUtils.js
import { Document, Packer, Paragraph, Table, TableCell, TableRow } from "docx";
import { saveAs } from "file-saver";

export const generateWordDocument = (title, rows, columns, fileName) => {
  // Create table rows for the Word document
  const tableRows = rows.map(
    (row) =>
      new TableRow({
        children: columns.map(
          (col) =>
            new TableCell({
              children: [new Paragraph(row[col.key]?.toString() || "")],
            })
        ),
      })
  );

  // Create a new document
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            text: title,
            heading: "Title",
            alignment: "center",
          }),
          new Table({
            rows: [
              new TableRow({
                children: columns.map(
                  (col) =>
                    new TableCell({
                      children: [new Paragraph(col.label)],
                    })
                ),
              }),
              ...tableRows,
            ],
          }),
        ],
      },
    ],
  });

  // Generate and save the Word document
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${fileName}.docx`);
  });
};
