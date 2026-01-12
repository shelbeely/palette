# Catppuccin Neurodiversity-Friendly (ND) Themes

This palette includes neurodiversity-friendly variants of all Catppuccin dark themes, specifically designed with Material Design 3 principles and accessibility in mind.

## Features

### 🎯 Neurodiversity-Friendly Design
- **Reduced Saturation**: Softer colors to minimize sensory overload and distraction
- **Higher Contrast**: Enhanced text contrast for better readability and focus
- **Warmer Tones**: Reduced eye strain during extended use
- **Material Design 3**: Following MD3 accessibility guidelines
- **WCAG Compliant**: Designed with accessibility standards in mind

### 🎨 Available ND Themes

1. **Frappé ND** 🧩 - Based on Frappé with calmer, desaturated tones
2. **Macchiato ND** 🎯 - Based on Macchiato with warmer, focus-friendly colors  
3. **Mocha ND** 🌟 - Based on Mocha optimized for concentration

## Usage with Ink (React TUI)

### Installation

```bash
npm install @catppuccin/palette
```

### Basic Usage

```tsx
import React from 'react';
import { Box, Text } from 'ink';
import { mochaND } from '@catppuccin/palette/ink';

const App = () => (
  <Box flexDirection="column">
    <Text color={mochaND.text.hex}>Welcome to my TUI!</Text>
    <Text color={mochaND.blue.hex}>This is blue text</Text>
    <Text color={mochaND.green.hex}>Success message</Text>
    <Text color={mochaND.red.hex}>Error message</Text>
    <Text color={mochaND.yellow.hex}>Warning message</Text>
  </Box>
);

export default App;
```

### Using the Theme Helper

```tsx
import { createThemedText, mochaND } from '@catppuccin/palette/ink';

const theme = createThemedText(mochaND);

const App = () => (
  <Box flexDirection="column">
    <Text color={theme.getColor('blue')}>Blue text</Text>
    <Text color={theme.getColor('text')}>Normal text</Text>
  </Box>
);
```

### Switching Between Themes

```tsx
import { ndThemes } from '@catppuccin/palette/ink';

// Choose your theme
const selectedTheme = ndThemes.mocha; // or frappe, macchiato

const App = () => (
  <Box flexDirection="column">
    <Text>{selectedTheme.emoji} {selectedTheme.name}</Text>
    <Text color={selectedTheme.colors.text.hex}>
      {selectedTheme.description}
    </Text>
    <Text color={selectedTheme.colors.blue.hex}>
      This uses the {selectedTheme.name} theme
    </Text>
  </Box>
);
```

### Complete Color Example

```tsx
import { Box, Text } from 'ink';
import { mochaND } from '@catppuccin/palette/ink';

const ColorDemo = () => (
  <Box flexDirection="column" padding={1}>
    <Text color={mochaND.text.hex}>Default Text</Text>
    <Text color={mochaND.subtext1.hex}>Subtext 1</Text>
    <Text color={mochaND.subtext0.hex}>Subtext 0</Text>
    
    <Box marginTop={1} />
    
    <Text color={mochaND.red.hex}>● Red - Errors</Text>
    <Text color={mochaND.yellow.hex}>● Yellow - Warnings</Text>
    <Text color={mochaND.green.hex}>● Green - Success</Text>
    <Text color={mochaND.blue.hex}>● Blue - Info</Text>
    
    <Box marginTop={1} />
    
    <Text color={mochaND.pink.hex}>● Pink</Text>
    <Text color={mochaND.mauve.hex}>● Mauve</Text>
    <Text color={mochaND.peach.hex}>● Peach</Text>
    <Text color={mochaND.teal.hex}>● Teal</Text>
    <Text color={mochaND.sky.hex}>● Sky</Text>
    <Text color={mochaND.sapphire.hex}>● Sapphire</Text>
    <Text color={mochaND.lavender.hex}>● Lavender</Text>
  </Box>
);
```

### Using with Chalk (for additional styling)

```tsx
import chalk from 'chalk';
import { mochaND } from '@catppuccin/palette/ink';

// Create chalk instances with your theme colors
const themed = {
  error: chalk.hex(mochaND.red.hex),
  warn: chalk.hex(mochaND.yellow.hex),
  info: chalk.hex(mochaND.blue.hex),
  success: chalk.hex(mochaND.green.hex),
  text: chalk.hex(mochaND.text.hex),
};

console.log(themed.error('Error message'));
console.log(themed.success('Success!'));
```

## Available Colors

Each ND theme includes all Catppuccin colors:

### Accent Colors
- `rosewater`, `flamingo`, `pink`, `mauve`
- `red`, `maroon`, `peach`, `yellow`
- `green`, `teal`, `sky`, `sapphire`
- `blue`, `lavender`

### Monochromatic Colors
- `text`, `subtext1`, `subtext0`
- `overlay2`, `overlay1`, `overlay0`
- `surface2`, `surface1`, `surface0`
- `base`, `mantle`, `crust`

## Design Rationale

The ND variants apply these modifications to the original Catppuccin themes:

1. **Saturation Reduction**: 10-15% less saturated to reduce visual noise
2. **Text Contrast**: Enhanced by 5-10% for better readability
3. **Warmer Base**: Slightly warmer background tones to reduce blue light
4. **Consistent Spacing**: Maintains the same color relationships as original themes

## Comparison with Original Themes

| Theme | Saturation | Contrast | Use Case |
|-------|-----------|----------|----------|
| Mocha | High | High | General use, vibrant colors |
| Mocha ND | Medium | Higher | Focus-intensive work, reduced eye strain |
| Macchiato | Mid | Mid | Balanced colors |
| Macchiato ND | Low-Mid | Higher | Long sessions, reduced distraction |
| Frappé | Low | Low | Subtle colors |
| Frappé ND | Very Low | Higher | Maximum calmness, minimal stimulation |

## License

MIT - Same as Catppuccin

## Contributing

To modify the ND themes, edit `scripts/gen_palette.ts` and run:

```bash
deno task generate
# or
node scripts/gen_palette_node.js
```
