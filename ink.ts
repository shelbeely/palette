/**
 * Ink (React TUI) theme utilities for Catppuccin palettes
 * 
 * Usage in your ink app:
 * ```tsx
 * import { Box, Text } from 'ink';
 * import { mochaND, colorize } from '@catppuccin/palette/ink';
 * 
 * const App = () => (
 *   <Box>
 *     <Text color={mochaND.blue.hex}>Blue text</Text>
 *     <Text color={mochaND.text.hex}>Normal text</Text>
 *   </Box>
 * );
 * ```
 */

import { flavors, type CatppuccinColors } from "./mod.ts";

// Export easy-to-use color palettes for ink
export const latte = flavors.latte.colors;
export const frappe = flavors.frappe.colors;
export const macchiato = flavors.macchiato.colors;
export const mocha = flavors.mocha.colors;

// Neurodiversity-friendly variants
export const frappeND = flavors["frappe-nd"].colors;
export const macchiatoND = flavors["macchiato-nd"].colors;
export const mochaND = flavors["mocha-nd"].colors;

/**
 * Helper function to create ink-compatible style objects
 */
export const colorize = (color: { hex: string; rgb: { r: number; g: number; b: number } }) => {
  return {
    color: color.hex,
    // For chalk/ink compatibility, also provide RGB
    rgb: [color.rgb.r, color.rgb.g, color.rgb.b] as [number, number, number],
  };
};

/**
 * Create a themed text component helper
 * @example
 * const ThemedText = createThemedText(mochaND);
 * <ThemedText color="blue">Hello</ThemedText>
 */
export const createThemedText = (palette: CatppuccinColors) => {
  return {
    colors: palette,
    getColor: (colorName: keyof CatppuccinColors) => palette[colorName].hex,
  };
};

/**
 * Ink-optimized theme object for neurodiversity-friendly themes
 * Recommended for TUI applications focused on accessibility
 */
export const ndThemes = {
  frappe: {
    name: "Frappé ND",
    emoji: "🧩",
    colors: frappeND,
    isDark: true,
    description: "Neurodiversity-friendly Frappé with reduced saturation",
  },
  macchiato: {
    name: "Macchiato ND",
    emoji: "🎯", 
    colors: macchiatoND,
    isDark: true,
    description: "Neurodiversity-friendly Macchiato with warmer tones",
  },
  mocha: {
    name: "Mocha ND",
    emoji: "🌟",
    colors: mochaND,
    isDark: true,
    description: "Neurodiversity-friendly Mocha optimized for focus",
  },
} as const;

/**
 * Get ANSI color codes for terminal styling
 * Useful for non-React terminal applications
 */
export const getAnsiColors = (flavorName: keyof typeof flavors) => {
  return flavors[flavorName].ansiColors;
};

export default {
  latte,
  frappe,
  macchiato,
  mocha,
  frappeND,
  macchiatoND,
  mochaND,
  ndThemes,
  colorize,
  createThemedText,
  getAnsiColors,
};
