# Quick Start: Using ND Themes with Ink

Get started with Catppuccin Neurodiversity-Friendly themes in your Ink TUI app in 5 minutes!

## Installation

```bash
npm install @catppuccin/palette ink react
```

## Basic Example

Create `app.js`:

```javascript
const React = require('react');
const { render, Box, Text } = require('ink');
const palette = require('@catppuccin/palette/palette.json');

// Use the Mocha ND theme
const theme = palette['mocha-nd'].colors;

const App = () => (
  <Box flexDirection="column" padding={1}>
    <Text bold color={theme.blue.hex}>
      🌟 My Awesome TUI App
    </Text>
    <Text color={theme.subtext0.hex}>
      Using Catppuccin Mocha ND theme
    </Text>
    
    <Box marginTop={1}>
      <Text color={theme.green.hex}>✓ Success message</Text>
    </Box>
    <Box>
      <Text color={theme.yellow.hex}>⚠ Warning message</Text>
    </Box>
    <Box>
      <Text color={theme.red.hex}>✗ Error message</Text>
    </Box>
  </Box>
);

render(React.createElement(App));
```

Run it:

```bash
node app.js
```

## Choose Your Theme

```javascript
// Frappé ND - Calmest, lowest saturation
const theme = palette['frappe-nd'].colors;

// Macchiato ND - Warmer, medium saturation
const theme = palette['macchiato-nd'].colors;

// Mocha ND - Warmest, best for focus
const theme = palette['mocha-nd'].colors;
```

## Full Color Palette

All ND themes include these colors:

**Accent Colors:**
- `red`, `maroon`, `peach`, `yellow`
- `green`, `teal`, `sky`, `sapphire`
- `blue`, `lavender`, `pink`, `mauve`
- `rosewater`, `flamingo`

**Text Colors:**
- `text` - Primary text
- `subtext1` - Secondary text  
- `subtext0` - Tertiary text

**Surface Colors:**
- `base` - Main background
- `mantle` - Slightly darker
- `crust` - Darkest background
- `surface0`, `surface1`, `surface2` - Elevated surfaces
- `overlay0`, `overlay1`, `overlay2` - Overlays

## Usage Patterns

### Status Messages

```javascript
<Text color={theme.green.hex}>✓ Operation successful</Text>
<Text color={theme.yellow.hex}>⚠ Warning: Check config</Text>
<Text color={theme.red.hex}>✗ Error: Connection failed</Text>
<Text color={theme.blue.hex}>ℹ Info: Loading...</Text>
```

### Hierarchical Text

```javascript
<Text bold color={theme.text.hex}>Primary Heading</Text>
<Text color={theme.subtext1.hex}>Secondary information</Text>
<Text color={theme.subtext0.hex}>Tertiary details</Text>
```

### Panels and Boxes

```javascript
<Box backgroundColor={theme.surface0.hex} padding={1}>
  <Text color={theme.text.hex}>Content in a panel</Text>
</Box>

<Box backgroundColor={theme.mantle.hex} padding={1}>
  <Text color={theme.subtext1.hex}>Darker background area</Text>
</Box>
```

### Interactive Elements

```javascript
// Highlighted/selected item
<Text color={theme.blue.hex} bold>Selected Item</Text>

// Normal items
<Text color={theme.text.hex}>Normal Item</Text>

// Disabled items
<Text color={theme.overlay0.hex}>Disabled Item</Text>
```

## TypeScript Support

```typescript
import { Box, Text } from 'ink';
import palette from '@catppuccin/palette/palette.json';

type ThemeName = 'mocha-nd' | 'macchiato-nd' | 'frappe-nd';

const theme = palette['mocha-nd' as ThemeName].colors;

const App = () => (
  <Box>
    <Text color={theme.blue.hex}>Typed theme!</Text>
  </Box>
);
```

## Try the Demo

Run the included example:

```bash
cd node_modules/@catppuccin/palette
npm install ink react
node examples/ink-demo.js
```

## Next Steps

- Read the [full ND themes documentation](nd-themes.md)
- Check out [color comparison guide](nd-color-comparison.md)
- Explore the [palette.json](../palette.json) structure
- Browse [Ink documentation](https://github.com/vadimdemedes/ink) for more TUI features

## Tips

1. **Start with Mocha ND** - It's the most versatile
2. **Use semantic colors** - `red` for errors, `green` for success, etc.
3. **Respect contrast** - Always use `text` or `subtext1` on `base` for readability
4. **Test in different terminals** - Colors may vary slightly between terminal emulators

## Need Help?

- [Open an issue](https://github.com/catppuccin/palette/issues)
- [Join the Catppuccin Discord](https://discord.gg/catppuccin)
- Check existing [Catppuccin ports](https://github.com/catppuccin/catppuccin#-ports-and-more)

---

**Enjoy your neurodiversity-friendly TUI! 🌟**
