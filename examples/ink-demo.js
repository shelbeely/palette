#!/usr/bin/env node
/**
 * Example Ink TUI application using Catppuccin ND themes
 * 
 * To run this example:
 * 1. npm install ink react
 * 2. node examples/ink-demo.js
 */

const React = require('react');
const { render, Box, Text } = require('ink');

// Import from the built palette
// In your app, use: const { mochaND } = require('@catppuccin/palette/ink');
const palette = require('../palette.json');

// Extract ND theme colors
const mochaND = palette['mocha-nd'].colors;
const macchiatoND = palette['macchiato-nd'].colors;
const frappeND = palette['frappe-nd'].colors;

// Demo component showcasing all ND themes
const NDThemeDemo = () => {
  return React.createElement(
    Box,
    { flexDirection: 'column', padding: 1 },
    
    // Header
    React.createElement(
      Text,
      { bold: true, color: mochaND.lavender.hex },
      '🌟 Catppuccin ND Themes Demo for Ink'
    ),
    React.createElement(Text, { dimColor: true }, 'Neurodiversity-Friendly Color Palettes\n'),
    
    // Mocha ND Section
    React.createElement(
      Box,
      { flexDirection: 'column', marginTop: 1 },
      React.createElement(Text, { bold: true, color: mochaND.text.hex }, '━━━ Mocha ND 🌟 ━━━'),
      React.createElement(Text, { color: mochaND.subtext0.hex }, 'Optimized for focus and concentration'),
      React.createElement(
        Box,
        { marginTop: 1 },
        React.createElement(Text, { color: mochaND.red.hex }, '● Red    '),
        React.createElement(Text, { color: mochaND.yellow.hex }, '● Yellow  '),
        React.createElement(Text, { color: mochaND.green.hex }, '● Green   '),
        React.createElement(Text, { color: mochaND.blue.hex }, '● Blue    '),
        React.createElement(Text, { color: mochaND.mauve.hex }, '● Mauve')
      )
    ),
    
    // Macchiato ND Section
    React.createElement(
      Box,
      { flexDirection: 'column', marginTop: 1 },
      React.createElement(Text, { bold: true, color: macchiatoND.text.hex }, '━━━ Macchiato ND 🎯 ━━━'),
      React.createElement(Text, { color: macchiatoND.subtext0.hex }, 'Warmer tones for reduced eye strain'),
      React.createElement(
        Box,
        { marginTop: 1 },
        React.createElement(Text, { color: macchiatoND.red.hex }, '● Red    '),
        React.createElement(Text, { color: macchiatoND.yellow.hex }, '● Yellow  '),
        React.createElement(Text, { color: macchiatoND.green.hex }, '● Green   '),
        React.createElement(Text, { color: macchiatoND.blue.hex }, '● Blue    '),
        React.createElement(Text, { color: macchiatoND.mauve.hex }, '● Mauve')
      )
    ),
    
    // Frappé ND Section
    React.createElement(
      Box,
      { flexDirection: 'column', marginTop: 1 },
      React.createElement(Text, { bold: true, color: frappeND.text.hex }, '━━━ Frappé ND 🧩 ━━━'),
      React.createElement(Text, { color: frappeND.subtext0.hex }, 'Calmer colors to minimize distraction'),
      React.createElement(
        Box,
        { marginTop: 1 },
        React.createElement(Text, { color: frappeND.red.hex }, '● Red    '),
        React.createElement(Text, { color: frappeND.yellow.hex }, '● Yellow  '),
        React.createElement(Text, { color: frappeND.green.hex }, '● Green   '),
        React.createElement(Text, { color: frappeND.blue.hex }, '● Blue    '),
        React.createElement(Text, { color: frappeND.mauve.hex }, '● Mauve')
      )
    ),
    
    // Footer
    React.createElement(
      Box,
      { marginTop: 1 },
      React.createElement(
        Text,
        { dimColor: true },
        '\nAll themes follow Material Design 3 accessibility principles'
      )
    )
  );
};

// Render the app
render(React.createElement(NDThemeDemo));
