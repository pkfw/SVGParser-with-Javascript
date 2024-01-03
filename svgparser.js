/**
 * Class representing an SVG Parser.
 * It handles the parsing of SVG data and caches the results for efficient retrieval.
 */
class SVGParser {
  /**
   * Create a new instance of SVGParser.
   */
  constructor() {
    this.parsedCache = [];
  }

  /**
   * Parses the given SVG data and caches the results.
   * @param {string} svgData - The SVG data as a string.
   * @param {number} index - The index to use as a reference for caching.
   */
  parseAndCache(svgData, index) {
    if (this.parsedCache[index]) {
      // Data is already cached for this index
      return;
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(svgData, "text/xml");

    // Parse SVG attributes (Parent)
    const svgElement = xmlDoc.getElementsByTagName("svg")[0];
    const parent = {};
    for (let i = 0; i < svgElement.attributes.length; i++) {
      const attr = svgElement.attributes[i];
      parent[attr.name] = attr.value;
    }

    // Parse Path attributes (Children)
    const paths = xmlDoc.getElementsByTagName("path");
    const children = [];
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const attributes = {};
      for (let j = 0; j < path.attributes.length; j++) {
        const attr = path.attributes[j];
        attributes[attr.name] = attr.value;
      }
      children.push(attributes);
    }

    // Cache the parsed data
    this.parsedCache[index] = { parent, children };
  }

  /**
   * Retrieves cached parent (SVG) attributes for a given index.
   * @param {number} index - The index of the cached data.
   * @returns {Object|null} The parent (SVG) attributes or null if not found.
   */
  getParentAttribute(index) {
    if (!this.parsedCache[index]) {
      // No data cached for this index
      return null;
    }
    return this.parsedCache[index].parent;
  }

  /**
   * Retrieves cached children (Path) attributes for a given index.
   * @param {number} index - The index of the cached data.
   * @returns {Array|null} An array of children (Path) attributes or null if not found.
   */
  getChildrenAttribute(index) {
    if (!this.parsedCache[index]) {
      // No data cached for this index
      return null;
    }
    return this.parsedCache[index].children;
  }
}

// Usage:
// const svgParser = new SVGParser();
// svgParser.parseAndCache(yourSVGData, index); // Parses and caches the data
// const parent = svgParser.getParentAttribute(index); // Retrieves SVG (parent) attributes
// const children = svgParser.getChildrenAttribute(index); // Retrieves Path (children) attributes