# Etch-a-Sketch

A modern, interactive digital Etch-a-Sketch application built with HTML, CSS, and JavaScript. Create pixel art with various drawing tools and effects in your browser.

## Features

### Drawing Tools
- **Color Picker**: Choose any color for drawing
- **Rainbow Mode**: Draw with random rainbow colors
- **Eraser Tool**: Remove pixels from your canvas
- **Shading Tool**: Create gradual opacity effects for more realistic shading

### Grid Options
- Multiple grid sizes: 16x16, 20x20, 32x32, 48x48, 64x64, 96x96, 128x128
- Dynamic grid creation without page reload
- Responsive design that works on different screen sizes

### Canvas Management
- **Clear Canvas**: Reset the entire drawing area
- **Save Image**: Download your pixel art as a PNG file
- Confirmation dialogs to prevent accidental data loss

### User Experience
- Intuitive toolbar with icon-based buttons
- Hover tooltips for all tools
- Visual feedback for active tools
- Smooth animations and transitions
- Gradient background for aesthetic appeal

## How to Use

1. **Getting Started**: Open `index.html` in a web browser
2. **Drawing**: Click and drag on the grid to draw
3. **Changing Colors**: Use the color picker to select your drawing color
4. **Grid Size**: Click the grid tool to choose different canvas sizes
5. **Special Effects**: 
   - Enable rainbow mode for colorful random pixels
   - Use the shading tool for opacity-based drawing effects
   - Switch to eraser mode to remove pixels
6. **Saving**: Click the save button to download your artwork

## File Structure

```
etch-a-sketch/
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # Core functionality and interactions
└── images/             # Tool icons (not included in provided files)
    ├── grid-tool.png
    ├── color-picker.png
    ├── rainbow-mode.png
    ├── shading-tool.png
    ├── eraser-tool.png
    ├── clear-canvas.png
    └── save-button.png
```

## Technical Details

### Dependencies
- **html2canvas**: Used for converting the canvas to downloadable images
- **Roboto Font**: Google Fonts for typography (referenced in CSS)

### Key Technologies
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with gradients, shadows, and animations
- **Vanilla JavaScript**: No frameworks - pure JavaScript for all interactions

### Browser Compatibility
- Modern browsers supporting ES6+ features
- HTML5 Canvas API support required for image saving
- CSS Grid and Flexbox support needed for layout

## Installation & Setup

1. Clone or download the project files
2. Ensure you have the required icon images in the `images/` folder
3. Open `index.html` in a web browser
4. No build process or server required - runs entirely in the browser

## Customization

### Adding New Grid Sizes
Edit the grid size buttons in `index.html` and update the corresponding event listeners in `script.js`.

### Modifying Colors
The default pen color is black. You can change this in the `script.js` file:
```javascript
let penColor = 'black'; // Change to any valid CSS color
```

### Styling Changes
Modify `style.css` to customize:
- Background gradients
- Tool button appearances
- Grid styling
- Animation effects

## Features in Detail

### Shading Mode
When enabled, clicking on the same pixel multiple times gradually increases its opacity, creating a shading effect. Each click adds 0.1 opacity until reaching full opacity (1.0).

### Rainbow Mode
Generates random HSL colors with full saturation and 50% lightness for vibrant, colorful drawings.

### Drawing Mechanics
- **Mouse Down**: Starts drawing mode
- **Mouse Drag**: Continues drawing while moving
- **Mouse Up**: Stops drawing mode

## Contributing

Feel free to contribute by:
- Adding new drawing tools
- Implementing additional grid sizes
- Enhancing the user interface
- Adding keyboard shortcuts
- Improving accessibility features

## License

This project is open source and available under the MIT License.

## Credits

- Icons: Custom tool icons (not provided in source files)
- Font: Roboto from Google Fonts
- Image Export: html2canvas library
