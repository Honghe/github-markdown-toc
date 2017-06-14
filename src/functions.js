import { prop, map, filter, pipe, apply, always } from '../modules/functional-util/index.js'

/**
 * @typedef {object} HeaderObject
 * @property {string} link
 * @property {number} level
 * @property {string} text
 */

/**
 * @typedef {HeaderObject[]} HeaderList
 */

/**
 * @param {string} link
 * @param {number} level
 * @param {string} text
 * @returns {HeaderObject}
 */
export function createHeader (link, level, text) {
  return {
    link,
    level,
    text
  }
}

/**
 * @param {string} query
 * @returns {function(Element): Node}
 */
export function querySelector (query) {
  return root => root.querySelector(query)
}

/**
 * @param {string} query
 * @returns {function(Element): NodeList}
 */
export function querySelectorAll (query) {
  return root => root.querySelectorAll(query)
}

/**
 * @param {string} query
 * @returns {function(Element): Element[]}
 */
export function querySelectorAllArray (query) {
  return pipe(querySelectorAll(query), Array.from)
}

/**
 * @param {string} str
 * @returns {string}
 */
export function hash (str) {
  return `#${str}`
}

/**
 * @function
 * @param {Element}
 * @returns {string}
 */
export const id2link = pipe(prop('id'), hash)

/**
 * @param {boolean} isHref
 * @returns {function(HTMLAnchorElement): string}
 */
export function hrefOrID (isHref) {
  return isHref ? prop('hash') : id2link
}

/**
 * @param {string} str
 * @returns {string}
 */
function trim (str) {
  return str.trim()
}

/**
 * @function
 * @param {Node}
 * @returns {string}
 */
export const trimmedText = pipe(prop('textContent'), trim)

/**
 * @function
 * @param {Node}
 * @returns {number}
 */
export const headerLevel = pipe(prop('tagName'), prop(1), Number)

/**
 * @function
 * @param {Node}
 * @returns {boolean}
 */
export const hasText = pipe(prop('textContent'), Boolean)

/**
 * @function
 * @param {Node[]}
 * @returns {Node[]}
 */
export const filterEmptyText = filter(hasText)

/**
 * @param {...function} fun
 * @returns {function(Element): HeaderList}
 */
export function createHeaders (...fun) {
  return pipe(filterEmptyText, ...fun, map(apply(createHeader)))
}

/**
 * @function
 * @param {Element}
 * @returns {HTMLHeadingElement[]}
 */
export const selectAllHeaderElement = querySelectorAllArray('h1, h2, h3, h4, h5, h6')

/**
 * @param {string} query
 * @returns {function(Element): Element[]}
 */
export function selectAllHeaderElementFrom (query) {
  return root => {
    const element = root.querySelector(query)
    if (!element) return []
    return selectAllHeaderElement(element)
  }
}

/**
 * @param {function(Element, ...*): string} link
 * @param {function(Element, ...*): number} level
 * @param {function(Element, ...*): string} text
 * @param {object} [options]
 * @returns {function(Element): (string|number)[]}
 */
export function element2Array (link, level, text, ...options) {
  return element => [link, level, text].map(fun => fun(element, ...options))
}

/**
 * @param {number} level
 * @returns {function(Element): (string|number)[]}
 */
export function element2ArrayAnchorAndFlatLevel (level) {
  return element2Array(
    pipe(querySelector('a'), prop('href')),
    always(level),
    trimmedText
  )
}

/**
 * @param {boolean} isJSEnabled
 * @returns {function(Element): (string|number)[]}
 */
export function markdownElement2Array (isJSEnabled) {
  return element2Array(
    pipe(querySelector('.anchor'), hrefOrID(isJSEnabled)),
    headerLevel,
    trimmedText
  )
}