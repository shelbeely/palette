import { join } from "std/path/join.ts";
import tinycolor from "tinycolor2";
import Color from "colorjs";

import meta from "../deno.json" with { type: "json" };

import type {
  CatppuccinAnsiColors,
  CatppuccinColors,
  CatppuccinFlavor,
  ColorName,
  Flavors,
} from "@catppuccin/palette";

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

const entriesFromObject = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

const definitions = {
  latte: {
    name: "Latte",
    emoji: "🌻",
    dark: false,
    colors: {
      rosewater: {
        name: "Rosewater",
        object: new Color("#dc8a78"),
        accent: true,
      },
      flamingo: {
        name: "Flamingo",
        object: new Color("#dd7878"),
        accent: true,
      },
      pink: {
        name: "Pink",
        object: new Color("#ea76cb"),
        accent: true,
      },
      mauve: {
        name: "Mauve",
        object: new Color("#8839ef"),
        accent: true,
      },
      red: {
        name: "Red",
        object: new Color("#d20f39"),
        accent: true,
      },
      maroon: {
        name: "Maroon",
        object: new Color("#e64553"),
        accent: true,
      },
      peach: {
        name: "Peach",
        object: new Color("#fe640b"),
        accent: true,
      },
      yellow: {
        name: "Yellow",
        object: new Color("#df8e1d"),
        accent: true,
      },
      green: {
        name: "Green",
        object: new Color("#40a02b"),
        accent: true,
      },
      teal: {
        name: "Teal",
        object: new Color("#179299"),
        accent: true,
      },
      sky: {
        name: "Sky",
        object: new Color("#04a5e5"),
        accent: true,
      },
      sapphire: {
        name: "Sapphire",
        object: new Color("#209fb5"),
        accent: true,
      },
      blue: {
        name: "Blue",
        object: new Color("#1e66f5"),
        accent: true,
      },
      lavender: {
        name: "Lavender",
        object: new Color("#7287fd"),
        accent: true,
      },
      text: {
        name: "Text",
        object: new Color("#4c4f69"),
        accent: false,
      },
      subtext1: {
        name: "Subtext 1",
        object: new Color("#5c5f77"),
        accent: false,
      },
      subtext0: {
        name: "Subtext 0",
        object: new Color("#6c6f85"),
        accent: false,
      },
      overlay2: {
        name: "Overlay 2",
        object: new Color("#7c7f93"),
        accent: false,
      },
      overlay1: {
        name: "Overlay 1",
        object: new Color("#8c8fa1"),
        accent: false,
      },
      overlay0: {
        name: "Overlay 0",
        object: new Color("#9ca0b0"),
        accent: false,
      },
      surface2: {
        name: "Surface 2",
        object: new Color("#acb0be"),
        accent: false,
      },
      surface1: {
        name: "Surface 1",
        object: new Color("#bcc0cc"),
        accent: false,
      },
      surface0: {
        name: "Surface 0",
        object: new Color("#ccd0da"),
        accent: false,
      },
      base: {
        name: "Base",
        object: new Color("#eff1f5"),
        accent: false,
      },
      mantle: {
        name: "Mantle",
        object: new Color("#e6e9ef"),
        accent: false,
      },
      crust: {
        name: "Crust",
        object: new Color("#dce0e8"),
        accent: false,
      },
    },
  },
  frappe: {
    name: "Frappé",
    emoji: "🪴",
    dark: true,
    colors: {
      rosewater: {
        name: "Rosewater",
        object: new Color("#f2d5cf"),
        accent: true,
      },
      flamingo: {
        name: "Flamingo",
        object: new Color("#eebebe"),
        accent: true,
      },
      pink: {
        name: "Pink",
        object: new Color("#f4b8e4"),
        accent: true,
      },
      mauve: {
        name: "Mauve",
        object: new Color("#ca9ee6"),
        accent: true,
      },
      red: {
        name: "Red",
        object: new Color("#e78284"),
        accent: true,
      },
      maroon: {
        name: "Maroon",
        object: new Color("#ea999c"),
        accent: true,
      },
      peach: {
        name: "Peach",
        object: new Color("#ef9f76"),
        accent: true,
      },
      yellow: {
        name: "Yellow",
        object: new Color("#e5c890"),
        accent: true,
      },
      green: {
        name: "Green",
        object: new Color("#a6d189"),
        accent: true,
      },
      teal: {
        name: "Teal",
        object: new Color("#81c8be"),
        accent: true,
      },
      sky: {
        name: "Sky",
        object: new Color("#99d1db"),
        accent: true,
      },
      sapphire: {
        name: "Sapphire",
        object: new Color("#85c1dc"),
        accent: true,
      },
      blue: {
        name: "Blue",
        object: new Color("#8caaee"),
        accent: true,
      },
      lavender: {
        name: "Lavender",
        object: new Color("#babbf1"),
        accent: true,
      },
      text: {
        name: "Text",
        object: new Color("#c6d0f5"),
        accent: false,
      },
      subtext1: {
        name: "Subtext 1",
        object: new Color("#b5bfe2"),
        accent: false,
      },
      subtext0: {
        name: "Subtext 0",
        object: new Color("#a5adce"),
        accent: false,
      },
      overlay2: {
        name: "Overlay 2",
        object: new Color("#949cbb"),
        accent: false,
      },
      overlay1: {
        name: "Overlay 1",
        object: new Color("#838ba7"),
        accent: false,
      },
      overlay0: {
        name: "Overlay 0",
        object: new Color("#737994"),
        accent: false,
      },
      surface2: {
        name: "Surface 2",
        object: new Color("#626880"),
        accent: false,
      },
      surface1: {
        name: "Surface 1",
        object: new Color("#51576d"),
        accent: false,
      },
      surface0: {
        name: "Surface 0",
        object: new Color("#414559"),
        accent: false,
      },
      base: {
        name: "Base",
        object: new Color("#303446"),
        accent: false,
      },
      mantle: {
        name: "Mantle",
        object: new Color("#292c3c"),
        accent: false,
      },
      crust: {
        name: "Crust",
        object: new Color("#232634"),
        accent: false,
      },
    },
  },
  macchiato: {
    name: "Macchiato",
    emoji: "🌺",
    dark: true,
    colors: {
      rosewater: {
        name: "Rosewater",
        object: new Color("#f4dbd6"),
        accent: true,
      },
      flamingo: {
        name: "Flamingo",
        object: new Color("#f0c6c6"),
        accent: true,
      },
      pink: {
        name: "Pink",
        object: new Color("#f5bde6"),
        accent: true,
      },
      mauve: {
        name: "Mauve",
        object: new Color("#c6a0f6"),
        accent: true,
      },
      red: {
        name: "Red",
        object: new Color("#ed8796"),
        accent: true,
      },
      maroon: {
        name: "Maroon",
        object: new Color("#ee99a0"),
        accent: true,
      },
      peach: {
        name: "Peach",
        object: new Color("#f5a97f"),
        accent: true,
      },
      yellow: {
        name: "Yellow",
        object: new Color("#eed49f"),
        accent: true,
      },
      green: {
        name: "Green",
        object: new Color("#a6da95"),
        accent: true,
      },
      teal: {
        name: "Teal",
        object: new Color("#8bd5ca"),
        accent: true,
      },
      sky: {
        name: "Sky",
        object: new Color("#91d7e3"),
        accent: true,
      },
      sapphire: {
        name: "Sapphire",
        object: new Color("#7dc4e4"),
        accent: true,
      },
      blue: {
        name: "Blue",
        object: new Color("#8aadf4"),
        accent: true,
      },
      lavender: {
        name: "Lavender",
        object: new Color("#b7bdf8"),
        accent: true,
      },
      text: {
        name: "Text",
        object: new Color("#cad3f5"),
        accent: false,
      },
      subtext1: {
        name: "Subtext 1",
        object: new Color("#b8c0e0"),
        accent: false,
      },
      subtext0: {
        name: "Subtext 0",
        object: new Color("#a5adcb"),
        accent: false,
      },
      overlay2: {
        name: "Overlay 2",
        object: new Color("#939ab7"),
        accent: false,
      },
      overlay1: {
        name: "Overlay 1",
        object: new Color("#8087a2"),
        accent: false,
      },
      overlay0: {
        name: "Overlay 0",
        object: new Color("#6e738d"),
        accent: false,
      },
      surface2: {
        name: "Surface 2",
        object: new Color("#5b6078"),
        accent: false,
      },
      surface1: {
        name: "Surface 1",
        object: new Color("#494d64"),
        accent: false,
      },
      surface0: {
        name: "Surface 0",
        object: new Color("#363a4f"),
        accent: false,
      },
      base: {
        name: "Base",
        object: new Color("#24273a"),
        accent: false,
      },
      mantle: {
        name: "Mantle",
        object: new Color("#1e2030"),
        accent: false,
      },
      crust: {
        name: "Crust",
        object: new Color("#181926"),
        accent: false,
      },
    },
  },
  mocha: {
    name: "Mocha",
    emoji: "🌿",
    dark: true,
    colors: {
      rosewater: {
        name: "Rosewater",
        object: new Color("#f5e0dc"),
        accent: true,
      },
      flamingo: {
        name: "Flamingo",
        object: new Color("#f2cdcd"),
        accent: true,
      },
      pink: {
        name: "Pink",
        object: new Color("#f5c2e7"),
        accent: true,
      },
      mauve: {
        name: "Mauve",
        object: new Color("#cba6f7"),
        accent: true,
      },
      red: {
        name: "Red",
        object: new Color("#f38ba8"),
        accent: true,
      },
      maroon: {
        name: "Maroon",
        object: new Color("#eba0ac"),
        accent: true,
      },
      peach: {
        name: "Peach",
        object: new Color("#fab387"),
        accent: true,
      },
      yellow: {
        name: "Yellow",
        object: new Color("#f9e2af"),
        accent: true,
      },
      green: {
        name: "Green",
        object: new Color("#a6e3a1"),
        accent: true,
      },
      teal: {
        name: "Teal",
        object: new Color("#94e2d5"),
        accent: true,
      },
      sky: {
        name: "Sky",
        object: new Color("#89dceb"),
        accent: true,
      },
      sapphire: {
        name: "Sapphire",
        object: new Color("#74c7ec"),
        accent: true,
      },
      blue: {
        name: "Blue",
        object: new Color("#89b4fa"),
        accent: true,
      },
      lavender: {
        name: "Lavender",
        object: new Color("#b4befe"),
        accent: true,
      },
      text: {
        name: "Text",
        object: new Color("#cdd6f4"),
        accent: false,
      },
      subtext1: {
        name: "Subtext 1",
        object: new Color("#bac2de"),
        accent: false,
      },
      subtext0: {
        name: "Subtext 0",
        object: new Color("#a6adc8"),
        accent: false,
      },
      overlay2: {
        name: "Overlay 2",
        object: new Color("#9399b2"),
        accent: false,
      },
      overlay1: {
        name: "Overlay 1",
        object: new Color("#7f849c"),
        accent: false,
      },
      overlay0: {
        name: "Overlay 0",
        object: new Color("#6c7086"),
        accent: false,
      },
      surface2: {
        name: "Surface 2",
        object: new Color("#585b70"),
        accent: false,
      },
      surface1: {
        name: "Surface 1",
        object: new Color("#45475a"),
        accent: false,
      },
      surface0: {
        name: "Surface 0",
        object: new Color("#313244"),
        accent: false,
      },
      base: {
        name: "Base",
        object: new Color("#1e1e2e"),
        accent: false,
      },
      mantle: {
        name: "Mantle",
        object: new Color("#181825"),
        accent: false,
      },
      crust: {
        name: "Crust",
        object: new Color("#11111b"),
        accent: false,
      },
    },
  },
  "frappe-nd": {
    name: "Frappé ND",
    emoji: "🧩",
    dark: true,
    colors: {
      // Neurodiversity-friendly Frappé variant with Material Design 3 principles
      // Reduced saturation, higher contrast, warmer tones for reduced eye strain
      rosewater: {
        name: "Rosewater",
        object: new Color("#e8c9c4"),
        accent: true,
      },
      flamingo: {
        name: "Flamingo",
        object: new Color("#e5b7b7"),
        accent: true,
      },
      pink: {
        name: "Pink",
        object: new Color("#e9afd9"),
        accent: true,
      },
      mauve: {
        name: "Mauve",
        object: new Color("#be94dd"),
        accent: true,
      },
      red: {
        name: "Red",
        object: new Color("#de7a7d"),
        accent: true,
      },
      maroon: {
        name: "Maroon",
        object: new Color("#e08e93"),
        accent: true,
      },
      peach: {
        name: "Peach",
        object: new Color("#e69b6f"),
        accent: true,
      },
      yellow: {
        name: "Yellow",
        object: new Color("#dcc089"),
        accent: true,
      },
      green: {
        name: "Green",
        object: new Color("#9cc988"),
        accent: true,
      },
      teal: {
        name: "Teal",
        object: new Color("#7ac0b5"),
        accent: true,
      },
      sky: {
        name: "Sky",
        object: new Color("#8dc9d2"),
        accent: true,
      },
      sapphire: {
        name: "Sapphire",
        object: new Color("#7ab9d3"),
        accent: true,
      },
      blue: {
        name: "Blue",
        object: new Color("#82a2e4"),
        accent: true,
      },
      lavender: {
        name: "Lavender",
        object: new Color("#abb3e7"),
        accent: true,
      },
      text: {
        name: "Text",
        object: new Color("#d0d8f0"),
        accent: false,
      },
      subtext1: {
        name: "Subtext 1",
        object: new Color("#b7c1dd"),
        accent: false,
      },
      subtext0: {
        name: "Subtext 0",
        object: new Color("#a0a8c7"),
        accent: false,
      },
      overlay2: {
        name: "Overlay 2",
        object: new Color("#8f95b4"),
        accent: false,
      },
      overlay1: {
        name: "Overlay 1",
        object: new Color("#7e84a0"),
        accent: false,
      },
      overlay0: {
        name: "Overlay 0",
        object: new Color("#6d728d"),
        accent: false,
      },
      surface2: {
        name: "Surface 2",
        object: new Color("#5d6179"),
        accent: false,
      },
      surface1: {
        name: "Surface 1",
        object: new Color("#4d5166"),
        accent: false,
      },
      surface0: {
        name: "Surface 0",
        object: new Color("#3d4154"),
        accent: false,
      },
      base: {
        name: "Base",
        object: new Color("#2d3342"),
        accent: false,
      },
      mantle: {
        name: "Mantle",
        object: new Color("#262a37"),
        accent: false,
      },
      crust: {
        name: "Crust",
        object: new Color("#1f2230"),
        accent: false,
      },
    },
  },
  "macchiato-nd": {
    name: "Macchiato ND",
    emoji: "🎯",
    dark: true,
    colors: {
      // Neurodiversity-friendly Macchiato variant with Material Design 3 principles
      // Reduced saturation, higher contrast, warmer tones for reduced eye strain
      rosewater: {
        name: "Rosewater",
        object: new Color("#ead0cc"),
        accent: true,
      },
      flamingo: {
        name: "Flamingo",
        object: new Color("#e7bebe"),
        accent: true,
      },
      pink: {
        name: "Pink",
        object: new Color("#ecb4dd"),
        accent: true,
      },
      mauve: {
        name: "Mauve",
        object: new Color("#bd97e8"),
        accent: true,
      },
      red: {
        name: "Red",
        object: new Color("#e48191"),
        accent: true,
      },
      maroon: {
        name: "Maroon",
        object: new Color("#e59298"),
        accent: true,
      },
      peach: {
        name: "Peach",
        object: new Color("#eca379"),
        accent: true,
      },
      yellow: {
        name: "Yellow",
        object: new Color("#e5cc9a"),
        accent: true,
      },
      green: {
        name: "Green",
        object: new Color("#9dd291"),
        accent: true,
      },
      teal: {
        name: "Teal",
        object: new Color("#84cdc1"),
        accent: true,
      },
      sky: {
        name: "Sky",
        object: new Color("#89cfd9"),
        accent: true,
      },
      sapphire: {
        name: "Sapphire",
        object: new Color("#75bdd9"),
        accent: true,
      },
      blue: {
        name: "Blue",
        object: new Color("#84a7eb"),
        accent: true,
      },
      lavender: {
        name: "Lavender",
        object: new Color("#aab5ee"),
        accent: true,
      },
      text: {
        name: "Text",
        object: new Color("#d3dbf0"),
        accent: false,
      },
      subtext1: {
        name: "Subtext 1",
        object: new Color("#bac3db"),
        accent: false,
      },
      subtext0: {
        name: "Subtext 0",
        object: new Color("#a2aac4"),
        accent: false,
      },
      overlay2: {
        name: "Overlay 2",
        object: new Color("#8f94b0"),
        accent: false,
      },
      overlay1: {
        name: "Overlay 1",
        object: new Color("#7c819b"),
        accent: false,
      },
      overlay0: {
        name: "Overlay 0",
        object: new Color("#696e86"),
        accent: false,
      },
      surface2: {
        name: "Surface 2",
        object: new Color("#575a71"),
        accent: false,
      },
      surface1: {
        name: "Surface 1",
        object: new Color("#45485d"),
        accent: false,
      },
      surface0: {
        name: "Surface 0",
        object: new Color("#33364a"),
        accent: false,
      },
      base: {
        name: "Base",
        object: new Color("#222536"),
        accent: false,
      },
      mantle: {
        name: "Mantle",
        object: new Color("#1c1e2d"),
        accent: false,
      },
      crust: {
        name: "Crust",
        object: new Color("#161823"),
        accent: false,
      },
    },
  },
  "mocha-nd": {
    name: "Mocha ND",
    emoji: "🌟",
    dark: true,
    colors: {
      // Neurodiversity-friendly Mocha variant with Material Design 3 principles
      // Reduced saturation, higher contrast, warmer tones for reduced eye strain
      rosewater: {
        name: "Rosewater",
        object: new Color("#e5cdc7"),
        accent: true,
      },
      flamingo: {
        name: "Flamingo",
        object: new Color("#e7bcbc"),
        accent: true,
      },
      pink: {
        name: "Pink",
        object: new Color("#e8b3d8"),
        accent: true,
      },
      mauve: {
        name: "Mauve",
        object: new Color("#bb9ae5"),
        accent: true,
      },
      red: {
        name: "Red",
        object: new Color("#e28296"),
        accent: true,
      },
      maroon: {
        name: "Maroon",
        object: new Color("#e0939c"),
        accent: true,
      },
      peach: {
        name: "Peach",
        object: new Color("#eca87a"),
        accent: true,
      },
      yellow: {
        name: "Yellow",
        object: new Color("#e8d5a1"),
        accent: true,
      },
      green: {
        name: "Green",
        object: new Color("#9dd696"),
        accent: true,
      },
      teal: {
        name: "Teal",
        object: new Color("#8bd5c7"),
        accent: true,
      },
      sky: {
        name: "Sky",
        object: new Color("#82d1dd"),
        accent: true,
      },
      sapphire: {
        name: "Sapphire",
        object: new Color("#6fbddb"),
        accent: true,
      },
      blue: {
        name: "Blue",
        object: new Color("#82a9e8"),
        accent: true,
      },
      lavender: {
        name: "Lavender",
        object: new Color("#a8b4ed"),
        accent: true,
      },
      text: {
        name: "Text",
        object: new Color("#d5ddf0"),
        accent: false,
      },
      subtext1: {
        name: "Subtext 1",
        object: new Color("#bec6da"),
        accent: false,
      },
      subtext0: {
        name: "Subtext 0",
        object: new Color("#a8afc5"),
        accent: false,
      },
      overlay2: {
        name: "Overlay 2",
        object: new Color("#969caf"),
        accent: false,
      },
      overlay1: {
        name: "Overlay 1",
        object: new Color("#828899"),
        accent: false,
      },
      overlay0: {
        name: "Overlay 0",
        object: new Color("#6f7483"),
        accent: false,
      },
      surface2: {
        name: "Surface 2",
        object: new Color("#5a5e6e"),
        accent: false,
      },
      surface1: {
        name: "Surface 1",
        object: new Color("#464a58"),
        accent: false,
      },
      surface0: {
        name: "Surface 0",
        object: new Color("#323642"),
        accent: false,
      },
      base: {
        name: "Base",
        object: new Color("#1f2129"),
        accent: false,
      },
      mantle: {
        name: "Mantle",
        object: new Color("#191b21"),
        accent: false,
      },
      crust: {
        name: "Crust",
        object: new Color("#12141a"),
        accent: false,
      },
    },
  },
};

const ansiMappings = {
  black: {
    normal: {
      mapping: "", // superfluous, exists to make TypeScript happy
      code: 0,
    },
    bright: {
      code: 8,
    },
  },
  red: {
    normal: {
      mapping: "red",
      code: 1,
    },
    bright: {
      code: 9,
    },
  },
  green: {
    normal: {
      mapping: "green",
      code: 2,
    },
    bright: {
      code: 10,
    },
  },
  yellow: {
    normal: {
      mapping: "yellow",
      code: 3,
    },
    bright: {
      code: 11,
    },
  },
  blue: {
    normal: {
      mapping: "blue",
      code: 4,
    },
    bright: {
      code: 12,
    },
  },
  magenta: {
    normal: {
      mapping: "pink",
      code: 5,
    },
    bright: {
      code: 13,
    },
  },
  cyan: {
    normal: {
      mapping: "teal",
      code: 6,
    },
    bright: {
      code: 14,
    },
  },
  white: {
    normal: {
      mapping: "", // superfluous, exists to make TypeScript happy
      code: 7,
    },
    bright: {
      code: 15,
    },
  },
};

const toHex = (color: Color): string => {
  return color.toString({ format: "hex" });
};

const toRgb = (color: Color): { r: number; g: number; b: number } => {
  const coords = color.to("srgb").toGamut().coords.map((i) =>
    Math.round(i * 255)
  );
  return {
    r: coords[0],
    g: coords[1],
    b: coords[2],
  };
};

const toHsl = (hex: string): { h: number; s: number; l: number } => {
  const { h, s, l } = tinycolor(hex).toHsl();
  return {
    h,
    s,
    l,
  };
};

const formatted = entriesFromObject(definitions).reduce(
  (acc, [flavorName, flavor], currentIndex) => {
    acc[flavorName] = {
      name: flavor.name,
      emoji: flavor.emoji,
      order: currentIndex,
      dark: flavor.dark,
      colors: entriesFromObject(flavor.colors).reduce(
        (acc, [colorName, color], currentIndex) => {
          acc[colorName] = {
            name: color.name,
            order: currentIndex,
            hex: toHex(color.object),
            rgb: toRgb(color.object),
            hsl: toHsl(toHex(color.object)),
            accent: color.accent,
          };
          return acc;
        },
        {} as Writeable<CatppuccinColors>,
      ),
      ansiColors: entriesFromObject(ansiMappings).reduce(
        (acc, [name, props], currentIndex) => {
          const mapping = props.normal.mapping as ColorName;
          const normalName = name[0].toUpperCase() +
            name.substring(1).toLowerCase();
          const brightName = `Bright ${normalName}`;
          let normalColor: Color;
          let brightColor: Color;

          if (name == "black") {
            normalColor = flavor.dark
              ? flavor.colors["surface1"].object
              : flavor.colors["subtext1"].object;
            brightColor = flavor.dark
              ? flavor.colors["surface2"].object
              : flavor.colors["subtext0"].object;
          } else if (name == "white") {
            normalColor = flavor.dark
              ? flavor.colors["subtext0"].object
              : flavor.colors["surface2"].object;
            brightColor = flavor.dark
              ? flavor.colors["subtext1"].object
              : flavor.colors["surface1"].object;
          } else {
            normalColor = flavor.colors[mapping].object;
            brightColor = new Color(normalColor);
            brightColor.lch.l *= flavor.dark ? 0.94 : 1.09;
            brightColor.lch.c += flavor.dark ? 8 : 0;
            brightColor.lch.h += 2;
          }

          acc[name] = {
            name: normalName,
            order: currentIndex,
            normal: {
              name: normalName,
              hex: toHex(normalColor),
              rgb: toRgb(normalColor),
              hsl: toHsl(toHex(normalColor)),
              code: props.normal.code,
            },
            bright: {
              name: brightName,
              hex: toHex(brightColor),
              rgb: toRgb(brightColor),
              hsl: toHsl(toHex(brightColor)),
              code: props.bright.code,
            },
          };

          return acc;
        },
        {} as Writeable<CatppuccinAnsiColors>,
      ),
    };
    return acc;
  },
  {} as Flavors<Omit<CatppuccinFlavor, "colorEntries" | "ansiColorEntries">>,
);

const __dirname = new URL(".", import.meta.url).pathname;

const result = {
  version: meta.version,
  ...formatted,
};

Deno.writeTextFileSync(
  join(__dirname, "../palette.json"),
  JSON.stringify(result, null, 2),
);
