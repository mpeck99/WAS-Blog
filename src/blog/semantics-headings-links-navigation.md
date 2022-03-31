---
title: Importance of semantic HTML - Headings, Links, and Navigation
date: 2022-03-30
intro: Having the appropriate mark up and functionality for headings, links and how your page navigate are important things to keep in mind when building out a site.  
tags: ['accessibility', 'HTML']
---
## Headings
Headings help provide structure and organize the content on a page, as well as help improve your SEO. On every page there must be a **SINGLE** `<h1>` that will be located at the beginning of the main content page. This heading should be clear and provide an accurate description of what the user can expect on the page. 
If you have text on a page that acts like a heading visually or structurally then it should be a heading. Headings structure out a page and are not to be used for visual effects, since screen reader users will use them to help gain an understanding of your page layout and to find the content they are interested in easily. 

A big thing that seems to be abused is skipping heading hierarchial levels. I mean I have done it, I know we all have but its important that we keep headings in hierarchial levels. 
```
<h1>Main content</h1>

<h2>Subheading 1</h2>
<p>Some content related to the subheading</p>
    
<h3>Sub-Subheading</h3>
<p>Some content related to the sub-subheading.</p>
```
## Links
Screen readers will announce a link when they are tabs onto and will read the text of that link. A link needs to have programmatically determined text that is able to be read by screen readers. If a link doesnt have any text it will just read out the URL which will not be helpful to your user (and could be annoying if its a long and complicated).
The name of the link will be calculated as follows (order of precedence by screen readers)
- `aria-labelledby`
- `aria-label`
- text between the opening and closing `<a>` tags. This should be the first thing you consider when creating link text
    ```
    <a href="#0>Link text</a>   
    ```
- title attribute - this is a last resort method for screen readers to find something and should'nt be considered a primary technique

Links and buttons should be designated semantically
- Buttons will activate a scripted functionality 
- Links will take you to a location

### Best practices
Create link text that will help the user determine its purpose, you should understand where/what the link or button will do based on its text. Also avoid using the words link or button in the text since screen readers will already announce if its a link or button. 
Links should be visually distinguishable from the surrounding text. There are already default styles in place but if you must change the colors or styles to match your sites theme make sure to: 
- Use a different color
- Add an outline or border on hover/focus
- Underline links
By following these styling recommendations for links it helps for users with low vision be able to distinguish the links from the rest of the pages content. 

Be consistent in identification
Don't provide the same link text for links that go to different locations
```
<p><a href="contact.html">Our Company</a></p>
<p><a href="contact.html">Contact Us</a></p>
```
Don't use different link text if the link leads to the same url
```
<p><a href="contact.html">Our Company</a></p>
<p><a href="contact.html">Contact Us</a></p>
 ```

Another thing to keep in mind to is allow users to know if your link will be opening in a new window. Since screen readers do not announce when a link is set to open in a new window you should provide the following: 
- An icon that shows it will be opening a new window for sighted users
- A hidden span/div with text that informs blind/screen reader users that the link will be opening in a new window

All focusable elements **MUST** have a visual focus. Most browsers typically indicate which element is by outlining it but it can be beneficial if you enhance this to help users with low vision. 

## Navigating between pages
When creating navigation list on your sites you need to be consistent across all pages. Meaning you need to have them in the same location and relative order from page to page and do not change them. If each page has a different navigation location and or layout it can become confusing to your users. 
Another thing that is required but is a good thin gto keep in mind is to create a visible clear indication which page you are on. For blind users it will be beneficial to provide `aria-current="page"`
You can also create an alert for screen readers using visually hidden text via the CSS clip method, aria-label, aria-labelledby, or aria-describedby
Navigation lists should also be created using the `<nav>` or `aria-role="navigation"` and its important to only label the main or most important ones and not to have to many. 
<div class="callout">
    <p><strong>Note: </strong>If you are using <code>role="navigation"</code>you need to assign it to a <code>div</code> that will then contain the list of navigation links. This will prevent the screen reader stripping the list of its semantic name</p>
</div>

## Navigating within pages
Its important to provide a functional skip link that will allow users to skip all the header navigation and jump directly to your sites content. This link must be the first focusable element on the page. It can either be visible at all times, but its common to have it only visible when the keyboard focus's on it. Do not use `display: none;` to hide the skip link, this will prevent screen readers for using it and render it useless. 

You should make sure the navigational order of focusable elements are logical and intuitive and avoid using any positive values in the tabindex. Using positive values removes items from the natural tab order and can mess with a users reading order. 

If your site has pagination make sure to inform your uses which page is currently active by having text that is hidden/clipped by CSS. Also if your sites has any single-key shortcuts you need to make sure that one of these are true: 
- They can be turned off
- Can be remapped
- Only are active when relevant UI component is in focus
