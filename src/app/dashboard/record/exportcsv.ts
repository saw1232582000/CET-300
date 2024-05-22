import { mkConfig, generateCsv, download, ConfigOptions } from "export-to-csv";

export async function exportRecord(records: any) {
  const exportData = records?.map((record: any) => {
    return {
      License: record?.license || "",
      Class: record?.class || "",
      Gate_Id: record?.gateid || "",
      From: record?.dirFrom || "",
      To: record?.dirTo || "",
      Charge: record?.charge || "",
      TimeDate: new Date(record?.timedate).toString() || "",
      Lane_Id: record?.laneid || "",
    };
  });
  const options: ConfigOptions = {
    fieldSeparator: ",",
    quoteStrings: true,
    decimalSeparator: ".",
    // title: "Toll Gate Records",
    showTitle: false,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };
  const csvConfig = mkConfig(options);
  const csv = generateCsv(csvConfig)(exportData);

  if (exportData != null) download(csvConfig)(csv);
}
