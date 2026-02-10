const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../../products.json");
const jsonData = fs.readFileSync(dataPath, "utf-8");
const products = JSON.parse(jsonData).products;

const categories = [...new Set(products.map((p) => p.category))];
const brands = [...new Set(products.map((p) => p.brand).filter(Boolean))];

const formatForConfig = (items) => {
  return items.map(item => `{ id: "${item.toLowerCase().replace(/\s+/g, '-')}", label: "${item}" }`).join(",\n    ");
};

const formatForMap = (items) => {
    return items.map(item => `'${item.toLowerCase().replace(/\s+/g, '-')}': "${item}"`).join(",\n    ");
}

let output = "";

output += "export const categoryOptionsMap = {\n";
output += "    " + formatForMap(categories) + "\n";
output += "}\n\n";

output += "export const brandOptionsMap = {\n";
output += "    " + formatForMap(brands) + "\n";
output += "}\n\n";

output += "export const filterOptions = {\n";
output += "  category: [\n    " + formatForConfig(categories) + "\n  ],\n";
output += "  brand: [\n    " + formatForConfig(brands) + "\n  ],\n";
output += "};\n";

fs.writeFileSync(path.join(__dirname, "config-output.txt"), output);
console.log("Config output written to server/seed/config-output.txt");

