const icon = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.525 243.713"><path fill="%23009cde" d="M131.64 51.91C114.491 34.769 98.13 18.429 93.26 0c-4.87 18.429-21.234 34.769-38.38 51.91C29.16 77.613 0 106.743 0 150.434a93.263 93.263 0 1 0 186.525 0c0-43.688-29.158-72.821-54.885-98.524m-92 120.256c-5.719-.194-26.824-36.571 12.329-75.303l25.909 28.3a2.215 2.215 0 0 1-.173 3.306c-6.183 6.34-32.534 32.765-35.81 41.902-.675 1.886-1.663 1.815-2.256 1.795m53.624 47.943a32.075 32.075 0 0 1-32.076-32.075 33.423 33.423 0 0 1 7.995-21.187c5.784-7.072 24.077-26.963 24.077-26.963s18.012 20.183 24.033 26.896a31.368 31.368 0 0 1 8.046 21.254 32.076 32.076 0 0 1-32.075 32.075m61.392-52.015c-.691 1.512-2.26 4.036-4.376 4.113-3.773.138-4.176-1.796-6.965-5.923-6.122-9.06-59.551-64.9-69.545-75.699-8.79-9.498-1.238-16.195 2.266-19.704 4.395-4.403 17.224-17.225 17.224-17.225s38.255 36.296 54.19 61.096 10.444 46.26 7.206 53.342"/></svg>`;

const UIStrings = {
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by removing unused CSS, in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'unused-css-rules': 'Consider removing unused CSS rules and only attach the needed Drupal libraries to the relevant page or component in a page. See the [Drupal documentation](https://www.drupal.org/docs/develop/theming-drupal/adding-assets-css-js-to-a-drupal-theme-via-librariesyml#define) for details. To identify attached libraries that are adding extraneous CSS, try running [code coverage](https://developer.chrome.com/docs/devtools/coverage) in Chrome DevTools. You can identify the theme/module responsible from the URL of the stylesheet when CSS aggregation is disabled in your Drupal site. Look out for themes/modules that have many stylesheets in the list which have a lot of red in code coverage. A theme/module should only enqueue a stylesheet if it is actually used on the page.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve image loading by using webp in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'modern-image-formats': 'Consider configuring [WebP image formats with a Convert image style](https://www.drupal.org/docs/core-modules-and-themes/core-modules/image-module/working-with-images#styles) on your site.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by lazy loading images that are initially offscreen in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'offscreen-images': 'Consider configuring lazy load images in Drupal. The field formatters for images support lazy or eager.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve site loading performance by reducing the total bytes delivered by their page in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'total-byte-weight': 'Consider using [Responsive Image Styles](https://www.drupal.org/documentation/modules/responsive_image) to reduce the size of images loaded on your page. If you are using Views to show multiple content items on a page, consider implementing pagination to limit the number of content items shown on a given page.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by reducing the amount of render blocking resources present on their page, in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'render-blocking-resources': 'Consider using [a module](https://www.drupal.org/project/critical_css) to inline critical CSS and JavaScript, and use the defer attribute for non-critical CSS or JavaScript.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their CSS files in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'unminified-css': 'Ensure you have enabled "Aggregate CSS files" in the "Administration » Configuration » Development" page.  Ensure your Drupal site is running at least Drupal 10.1 for improved asset aggregation support.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their Javascript files in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'unminified-javascript': 'Ensure you have enabled "Aggregate JavaScript files" in the "Administration » Configuration » Development" page.  Ensure your Drupal site is running at least Drupal 10.1 for improved asset aggregation support.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by encoding animated images as video, in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'efficient-animated-content': 'Consider uploading your GIF to a service which will make it available to embed as an HTML5 video.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by removing unused Javascript files in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'unused-javascript': 'Consider removing unused JavaScript assets and only attach the needed Drupal libraries to the relevant page or component in a page. See the [Drupal documentation](https://www.drupal.org/docs/develop/theming-drupal/adding-assets-css-js-to-a-drupal-theme-via-librariesyml#define) for details. To identify attached libraries that are adding extraneous JavaScript, try running [code coverage](https://developer.chrome.com/docs/devtools/coverage) in Chrome DevTools. You can identify the theme/module responsible from the URL of the script when JavaScript aggregation is disabled in your Drupal site. Look out for themes/modules that have many scripts in the list which have a lot of red in code coverage. A theme/module should only attach a script library if it is actually used on the page.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve their site by enabling long caching in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'uses-long-cache-ttl': 'Set the "Browser and proxy cache maximum age" in the "Administration » Configuration » Development » " page. Read about [Drupal cache and optimizing for performance](https://www.drupal.org/docs/8/api/cache-api/cache-api).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve site performance by optimizing images, in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'uses-optimized-images': 'Consider using [a module](https://www.drupal.org/project/project_module?f%5B0%5D=&f%5B1%5D=&f%5B2%5D=im_vid_3%3A123&f%5B3%5D=&f%5B4%5D=sm_field_project_type%3Afull&f%5B5%5D=&f%5B6%5D=&text=image&solrsort=iss_project_release_usage+desc&op=Search) that automatically optimizes and reduces the size of images uploaded through the site while retaining quality. Also, ensure you are using the native [Responsive Image Styles](https://www.drupal.org/documentation/modules/responsive_image) provided from Drupal (available in Drupal 8 and above) for all images rendered on the site.',
  /** Additional description of a Lighthouse audit for a third-party framework called `Drupal`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'uses-text-compression': 'Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. Consider using a CDN that natively supports this, or configure the web server to perform this operation. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/text-compression).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by using responsive images in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'uses-responsive-images': 'Ensure that you are using the native [Responsive Image Styles](https://www.drupal.org/documentation/modules/responsive_image) provided from Drupal (available in Drupal 8 and above). Use the Responsive Image Styles when rendering image fields through view modes, views, or images uploaded through the WYSIWYG editor.',
  /** Additional description of a Lighthouse audit for a third-party framework called `Drupal`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'prioritize-lcp-image': 'If the LCP element is dynamically added to the page, you should optimize the image in order to improve LCP. [Learn more](https://www.smashingmagazine.com/2023/08/methods-improving-drupal-largest-contentful-paint-core-web-vital/).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve the time to first byte speed metric, in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'server-response-time': 'Themes, modules, and server specifications all contribute to server response time. Consider finding a more optimized theme and/or upgrading your server. Your hosting servers should make use of PHP OPcache. Consider using memory-caching such as Redis or Memcached to reduce database query times, as well as optimized application logic to prepare pages faster. Lastly consider leveraging a CDN to offload server load and improve response time',
  /** Additional description of a Lighthouse audit for a third-party framework called `Drupal`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'redirects': 'Redirects introduce additional delays before the page can be loaded. If the [Redirect](https://www.drupal.org/project/redirect) module is installed, review if un-necessary redirects can be removed. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/redirects).',
  /** Additional description of a Lighthouse audit that tells the user how they can add preconnect or dns-prefetch resource hints, in the context of the Drupal CMS platform. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  'uses-rel-preconnect': 'Preconnect or dns-prefetch resource hints can be added by installing and configuring [a module](https://www.drupal.org/project/project_module?f%5B0%5D=&f%5B1%5D=&f%5B2%5D=&f%5B3%5D=&f%5B4%5D=sm_field_project_type%3Afull&f%5B5%5D=&f%5B6%5D=&text=Preconnect&solrsort=score+desc&op=Search) that provides facilities for user agent resource hints.',
};

module.exports = {
  id: 'drupal',
  title: 'Drupal',
  icon,
  UIStrings,
}
