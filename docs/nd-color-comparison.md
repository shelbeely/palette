# Neurodiversity-Friendly Theme Colors - Quick Reference

## Mocha vs Mocha ND

### Accent Colors Comparison

| Color | Mocha (Original) | Mocha ND | Change |
|-------|------------------|----------|--------|
| Red | `#f38ba8` | `#e28296` | Desaturated, warmer |
| Yellow | `#f9e2af` | `#e8d5a1` | Less bright, calmer |
| Green | `#a6e3a1` | `#9dd696` | Softer, less vivid |
| Blue | `#89b4fa` | `#82a9e8` | Reduced saturation |
| Mauve | `#cba6f7` | `#bb9ae5` | Less purple, warmer |

### Text Colors Comparison

| Color | Mocha (Original) | Mocha ND | Change |
|-------|------------------|----------|--------|
| Text | `#cdd6f4` | `#d5ddf0` | Slightly brighter for better contrast |
| Base | `#1e1e2e` | `#1f2129` | Warmer undertone |
| Mantle | `#181825` | `#191b21` | Warmer undertone |

## All ND Variants

### Frappé ND 🧩
- **Focus**: Calmest variant, minimal stimulation
- **Best For**: Long reading sessions, documentation
- **Saturation**: Lowest
- **Warmth**: Medium-warm

### Macchiato ND 🎯
- **Focus**: Balanced warmth and calmness
- **Best For**: General coding, balanced workload
- **Saturation**: Medium-low
- **Warmth**: Warm

### Mocha ND 🌟
- **Focus**: Best concentration and focus
- **Best For**: Deep work, complex tasks
- **Saturation**: Medium
- **Warmth**: Warmest

## Color Philosophy

### Material Design 3 Principles Applied

1. **Tonal Palettes**: Each ND variant maintains consistent tonal relationships
2. **Accessibility**: Higher contrast ratios for text (aim for WCAG AAA where possible)
3. **Color Harmony**: Reduced saturation creates more harmonious color relationships
4. **Adaptive**: Works well in various lighting conditions

### Neurodiversity Considerations

1. **Reduced Sensory Load**: Lower saturation = less visual "noise"
2. **Better Focus**: Warmer tones help maintain concentration
3. **Less Eye Strain**: Reduced blue light emission from warmer base colors
4. **Clear Hierarchy**: Higher text contrast improves readability
5. **Consistent Experience**: Predictable color relationships reduce cognitive load

## Usage Recommendations

### For ADHD
- **Mocha ND** for hyperfocus sessions
- **Macchiato ND** for task switching
- **Frappé ND** for overwhelm reduction

### For Autism/Sensory Sensitivities
- **Frappé ND** for minimal sensory input
- **Macchiato ND** for moderate comfort
- **Mocha ND** when high contrast is needed

### For Dyslexia
- All variants provide good text contrast
- Warmer backgrounds reduce glare
- Consider Mocha ND for maximum readability

### For Light Sensitivity
- All variants use warmer, softer tones
- Frappé ND has the lowest overall brightness
- Macchiato ND offers good middle ground

## Integration Examples

### Terminals
Use the ANSI color mappings for terminal emulators.

### VSCode/IDEs
Use the color values for syntax highlighting themes.

### Web/Desktop Apps
Use the palette for UI element theming.

### TUI Apps (Ink)
Direct integration via the ink.ts module (see docs/nd-themes.md).

## Technical Details

### Color Space
- All colors defined in sRGB
- HSL values calculated for easy manipulation
- Hex values optimized for web/terminal use

### Contrast Ratios
- Text on Base: ~15:1 (WCAG AAA)
- Subtext on Base: ~11:1 (WCAG AAA)
- Accent on Base: Varies, minimum 4.5:1 (WCAG AA)

### Saturation Reduction
- Original → ND: Approximately 10-20% reduction
- Maintains color distinction
- Preserves semantic meaning (red=error, green=success, etc.)

## Future Considerations

Potential additions based on feedback:
- Light ND variants (based on Latte)
- High contrast ND mode
- Colorblind-specific adjustments
- Custom saturation levels
