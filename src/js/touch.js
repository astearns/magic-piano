/* eslint-disable no-undef */
/**
 * Source: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
 */
const isTouchDevice = () => {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
  var mq = query => {
    return window.matchMedia(query).matches
  }
  if (
    'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof DocumentTouch)
  ) {
    return true
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')
  return mq(query)
}
/* eslint-enable no-undef */

export default isTouchDevice
