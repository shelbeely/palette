const fs = require('fs');
const path = require('path');
const tinycolor = require('tinycolor2');

// Helper to convert hex to RGB
const toRgb = (hex) => {
  const { r, g, b } = tinycolor(hex).toRgb();
  return { r, g, b };
};

// Helper to convert hex to HSL
const toHsl = (hex) => {
  const { h, s, l } = tinycolor(hex).toHsl();
  return { h, s, l };
};

// Helper to brighten/darken for ANSI colors
const adjustForBright = (hex, dark) => {
  const color = tinycolor(hex);
  const hsl = color.toHsl();
  if (dark) {
    hsl.l = Math.max(0, hsl.l * 0.94);
    hsl.s = Math.min(1, hsl.s + 0.08);
  } else {
    hsl.l = Math.min(1, hsl.l * 1.09);
  }
  return tinycolor(hsl).toHexString();
};

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../deno.json'), 'utf8'));

const definitions = {
  latte: {
    name: "Latte",
    emoji: "🌻",
    dark: false,
    colors: {
      rosewater: "#dc8a78",
      flamingo: "#dd7878",
      pink: "#ea76cb",
      mauve: "#8839ef",
      red: "#d20f39",
      maroon: "#e64553",
      peach: "#fe640b",
      yellow: "#df8e1d",
      green: "#40a02b",
      teal: "#179299",
      sky: "#04a5e5",
      sapphire: "#209fb5",
      blue: "#1e66f5",
      lavender: "#7287fd",
      text: "#4c4f69",
      subtext1: "#5c5f77",
      subtext0: "#6c6f85",
      overlay2: "#7c7f93",
      overlay1: "#8c8fa1",
      overlay0: "#9ca0b0",
      surface2: "#acb0be",
      surface1: "#bcc0cc",
      surface0: "#ccd0da",
      base: "#eff1f5",
      mantle: "#e6e9ef",
      crust: "#dce0e8",
    },
  },
  frappe: {
    name: "Frappé",
    emoji: "🪴",
    dark: true,
    colors: {
      rosewater: "#f2d5cf",
      flamingo: "#eebebe",
      pink: "#f4b8e4",
      mauve: "#ca9ee6",
      red: "#e78284",
      maroon: "#ea999c",
      peach: "#ef9f76",
      yellow: "#e5c890",
      green: "#a6d189",
      teal: "#81c8be",
      sky: "#99d1db",
      sapphire: "#85c1dc",
      blue: "#8caaee",
      lavender: "#babbf1",
      text: "#c6d0f5",
      subtext1: "#b5bfe2",
      subtext0: "#a5adce",
      overlay2: "#949cbb",
      overlay1: "#838ba7",
      overlay0: "#737994",
      surface2: "#626880",
      surface1: "#51576d",
      surface0: "#414559",
      base: "#303446",
      mantle: "#292c3c",
      crust: "#232634",
    },
  },
  macchiato: {
    name: "Macchiato",
    emoji: "🌺",
    dark: true,
    colors: {
      rosewater: "#f4dbd6",
      flamingo: "#f0c6c6",
      pink: "#f5bde6",
      mauve: "#c6a0f6",
      red: "#ed8796",
      maroon: "#ee99a0",
      peach: "#f5a97f",
      yellow: "#eed49f",
      green: "#a6da95",
      teal: "#8bd5ca",
      sky: "#91d7e3",
      sapphire: "#7dc4e4",
      blue: "#8aadf4",
      lavender: "#b7bdf8",
      text: "#cad3f5",
      subtext1: "#b8c0e0",
      subtext0: "#a5adcb",
      overlay2: "#939ab7",
      overlay1: "#8087a2",
      overlay0: "#6e738d",
      surface2: "#5b6078",
      surface1: "#494d64",
      surface0: "#363a4f",
      base: "#24273a",
      mantle: "#1e2030",
      crust: "#181926",
    },
  },
  mocha: {
    name: "Mocha",
    emoji: "🌿",
    dark: true,
    colors: {
      rosewater: "#f5e0dc",
      flamingo: "#f2cdcd",
      pink: "#f5c2e7",
      mauve: "#cba6f7",
      red: "#f38ba8",
      maroon: "#eba0ac",
      peach: "#fab387",
      yellow: "#f9e2af",
      green: "#a6e3a1",
      teal: "#94e2d5",
      sky: "#89dceb",
      sapphire: "#74c7ec",
      blue: "#89b4fa",
      lavender: "#b4befe",
      text: "#cdd6f4",
      subtext1: "#bac2de",
      subtext0: "#a6adc8",
      overlay2: "#9399b2",
      overlay1: "#7f849c",
      overlay0: "#6c7086",
      surface2: "#585b70",
      surface1: "#45475a",
      surface0: "#313244",
      base: "#1e1e2e",
      mantle: "#181825",
      crust: "#11111b",
    },
  },
  "frappe-nd": {
    name: "Frappé ND",
    emoji: "🧩",
    dark: true,
    colors: {
      rosewater: "#e8c9c4",
      flamingo: "#e5b7b7",
      pink: "#e9afd9",
      mauve: "#be94dd",
      red: "#de7a7d",
      maroon: "#e08e93",
      peach: "#e69b6f",
      yellow: "#dcc089",
      green: "#9cc988",
      teal: "#7ac0b5",
      sky: "#8dc9d2",
      sapphire: "#7ab9d3",
      blue: "#82a2e4",
      lavender: "#abb3e7",
      text: "#d0d8f0",
      subtext1: "#b7c1dd",
      subtext0: "#a0a8c7",
      overlay2: "#8f95b4",
      overlay1: "#7e84a0",
      overlay0: "#6d728d",
      surface2: "#5d6179",
      surface1: "#4d5166",
      surface0: "#3d4154",
      base: "#2d3342",
      mantle: "#262a37",
      crust: "#1f2230",
    },
  },
  "macchiato-nd": {
    name: "Macchiato ND",
    emoji: "🎯",
    dark: true,
    colors: {
      rosewater: "#ead0cc",
      flamingo: "#e7bebe",
      pink: "#ecb4dd",
      mauve: "#bd97e8",
      red: "#e48191",
      maroon: "#e59298",
      peach: "#eca379",
      yellow: "#e5cc9a",
      green: "#9dd291",
      teal: "#84cdc1",
      sky: "#89cfd9",
      sapphire: "#75bdd9",
      blue: "#84a7eb",
      lavender: "#aab5ee",
      text: "#d3dbf0",
      subtext1: "#bac3db",
      subtext0: "#a2aac4",
      overlay2: "#8f94b0",
      overlay1: "#7c819b",
      overlay0: "#696e86",
      surface2: "#575a71",
      surface1: "#45485d",
      surface0: "#33364a",
      base: "#222536",
      mantle: "#1c1e2d",
      crust: "#161823",
    },
  },
  "mocha-nd": {
    name: "Mocha ND",
    emoji: "🌟",
    dark: true,
    colors: {
      rosewater: "#e5cdc7",
      flamingo: "#e7bcbc",
      pink: "#e8b3d8",
      mauve: "#bb9ae5",
      red: "#e28296",
      maroon: "#e0939c",
      peach: "#eca87a",
      yellow: "#e8d5a1",
      green: "#9dd696",
      teal: "#8bd5c7",
      sky: "#82d1dd",
      sapphire: "#6fbddb",
      blue: "#82a9e8",
      lavender: "#a8b4ed",
      text: "#d5ddf0",
      subtext1: "#bec6da",
      subtext0: "#a8afc5",
      overlay2: "#969caf",
      overlay1: "#828899",
      overlay0: "#6f7483",
      surface2: "#5a5e6e",
      surface1: "#464a58",
      surface0: "#323642",
      base: "#1f2129",
      mantle: "#191b21",
      crust: "#12141a",
    },
  },
};

// Color name order
const colorNames = [
  "rosewater", "flamingo", "pink", "mauve", "red", "maroon", "peach", "yellow",
  "green", "teal", "sky", "sapphire", "blue", "lavender",
  "text", "subtext1", "subtext0", "overlay2", "overlay1", "overlay0",
  "surface2", "surface1", "surface0", "base", "mantle", "crust"
];

const ansiMappings = {
  black: { normal: { code: 0 }, bright: { code: 8 } },
  red: { normal: { mapping: "red", code: 1 }, bright: { code: 9 } },
  green: { normal: { mapping: "green", code: 2 }, bright: { code: 10 } },
  yellow: { normal: { mapping: "yellow", code: 3 }, bright: { code: 11 } },
  blue: { normal: { mapping: "blue", code: 4 }, bright: { code: 12 } },
  magenta: { normal: { mapping: "pink", code: 5 }, bright: { code: 13 } },
  cyan: { normal: { mapping: "teal", code: 6 }, bright: { code: 14 } },
  white: { normal: { code: 7 }, bright: { code: 15 } },
};

const formatted = {};
let flavorIndex = 0;

for (const [flavorName, flavor] of Object.entries(definitions)) {
  formatted[flavorName] = {
    name: flavor.name,
    emoji: flavor.emoji,
    order: flavorIndex++,
    dark: flavor.dark,
    colors: {},
    ansiColors: {},
  };

  // Process colors
  colorNames.forEach((colorName, index) => {
    const hex = flavor.colors[colorName];
    const accent = index < 14; // First 14 are accent colors
    formatted[flavorName].colors[colorName] = {
      name: colorName.charAt(0).toUpperCase() + colorName.slice(1).replace(/(\d)/, ' $1'),
      order: index,
      hex,
      rgb: toRgb(hex),
      hsl: toHsl(hex),
      accent,
    };
  });

  // Process ANSI colors
  let ansiIndex = 0;
  for (const [name, props] of Object.entries(ansiMappings)) {
    const normalName = name.charAt(0).toUpperCase() + name.slice(1);
    const brightName = `Bright ${normalName}`;
    let normalHex, brightHex;

    if (name === "black") {
      normalHex = flavor.dark ? flavor.colors.surface1 : flavor.colors.subtext1;
      brightHex = flavor.dark ? flavor.colors.surface2 : flavor.colors.subtext0;
    } else if (name === "white") {
      normalHex = flavor.dark ? flavor.colors.subtext0 : flavor.colors.surface2;
      brightHex = flavor.dark ? flavor.colors.subtext1 : flavor.colors.surface1;
    } else {
      normalHex = flavor.colors[props.normal.mapping];
      brightHex = adjustForBright(normalHex, flavor.dark);
    }

    formatted[flavorName].ansiColors[name] = {
      name: normalName,
      order: ansiIndex++,
      normal: {
        name: normalName,
        hex: normalHex,
        rgb: toRgb(normalHex),
        hsl: toHsl(normalHex),
        code: props.normal.code,
      },
      bright: {
        name: brightName,
        hex: brightHex,
        rgb: toRgb(brightHex),
        hsl: toHsl(brightHex),
        code: props.bright.code,
      },
    };
  }
}

const result = {
  version: packageJson.version,
  ...formatted,
};

fs.writeFileSync(
  path.join(__dirname, '../palette.json'),
  JSON.stringify(result, null, 2)
);

console.log('✅ palette.json generated successfully with ND variants!');
