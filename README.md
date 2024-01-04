# SVGParser with Javascript

A simple and efficient JavaScript class for parsing SVG data and retrieving SVG and Path attributes. This parser handles the parsing of SVG data, caches the results, and provides methods to retrieve SVG and Path attributes separately.

## Features

- Parses SVG data and caches the results for efficient retrieval.
- Retrieves SVG attributes and Path attributes separately.
- Easy to integrate and use in any JavaScript project.

## Installation

To use SVGParser in your project, simply copy the `SVGParser` class from `svgparser.js` into your JavaScript codebase.

## Usage

Here's how to use SVGParser:

```javascript
const svgData = '<svg>...</svg>'; // Your SVG data here
const index = 0; // Index for caching and retrieval

// Create an instance of SVGParser
const svgParse  r = new SVGParser();

// Parse and cache the SVG data
svgParser.parseAndCache(svgData, index);

// Retrieve SVG Parent attributes
// - This outputs the properties of the <svg> tag.
const parent = svgParser.getParentAttribute(index);
console.log('SVG Parent Attributes:', parent);

/*
 * [  ]
 */

// Retrieve SVG Children attributes
// - This will list the attributes for each <path> or child element within the SVG.
const children = svgParser.getChildrenAttribute(index);
console.log('SVG Children Attributes:', children);