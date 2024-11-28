// if (page) {
//   const offset = (page - 1) * limit;
//   queries.push({ method: "offset", value: [offset.toString()] });
// }

// if (category) {
//   queries.push({
//     method: "filter",
//     attribute: "category",
//     value: [category],
//   });
// }

// type FilterValue = string;

// type ApiFilter = {
//   method: "limit" | "offset" | "sort" | "filter";
//   attribute?: string;
//   value: FilterValue[];
// };

// if (limit)
//   queries.push(
//     `queries[0]={"method":"limit","values":[${limit.toString()}]}`
//   );

// if (page)
//   queries.push(
//     `queries[1]={"method":"offset","values":[${(page - 1) * limit}]}`
//   );

// if (category) {
//   queries.push(
//     `queries[2]={"method":"equal","attribute":"category","values":["${category}"]}`
//   );
// }
