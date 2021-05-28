export const getUniqueValues = (data: any, type: string) => {
  let unique = data.map((item: any) => item?.fields[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
