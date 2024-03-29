---
title: Accessibility and Contrast
date: 2022-04-26
intro: 1 in 12 people in the United States have some form of color deficiency, more commonly found in men (8%) than women (0.4%).
btn: Read more about contrast and accessibility
tags: ['design', 'examples']
---

In my last post I talked about color and its importance in making your site accessible for low vision user and users with color blindness. In this post I will focus more on the contrast side of design for accessibility.

1 in 12 people in the United States have some form of color deficiency, more commonly found in men (8%) than women (0.4%). Also there are roughly 3x more individuals who have low vision then there are with total blindness. This is why it is important to make sure that we have sufficient contrast between elements on our page.

## Text

For any small text (text under 18pt for regular and 14pt for bold) MUST have a contrast ratio of **4.5:1** to meet **WCAG 2.1 AA conformance**. This success criteria falls under the success criteria **1.4.3 Contrast (minimum)** which is under the **Guideline 1.4 Distinguishable**. This guidelines goal is to make it easier to users to see and hear content, which includes separating the foreground from the background.

If you have any large text or images of large text (18pt and greater regular, 14pt and greater bold) your need to ensure that there is at least a contrast ratio of **3:1**. The reason that the contrast ratio for larger font is lower is due to the larger fonts having wider strokes which in the end make it easer to read.

<div class="callout">
    <p>Since pixels are the most common way for developers to size the font here is a pt to px conversion to show how many pixel a pt will equal:</p>
    <p><strong>1pt = 1.333px<br>14pt = 18.4px<br>18pt = 24px</strong></p>
</div>

Its important to make sure that your text and background have at minimum this 4.5:1 contrast because it makes it easier for your users to read the content of your sight, especially if they suffer from low vision.

This contrast minimum should meet the standard for all background conditions such as:

- Solid color
- Pattern
- Gradient
- Image
- Animation
- Video
- Etc.

To meet success criteria **1.4.6 Contrast (Enhanced) AAA** you will need to ensure that your text (under 18pt for regular and 14pt for bold) has a contrast ratio of **7:1** against the background. Its also best to consider on increasing your contrast on mobile applications due to the screens lower viewport size and varying environmental conditions that the devices are used in. By doing this you will ensure to make your site accessible to the widest range of users.

If your page has a contrast ratio of 7:1 or greater it can help compensate the contrast loss for peoples vision who is about 20/80 or those with color deficiencies.

<div class="example" aria-hidden="true">
    <h3>Bad example</h3>
    <div class="low-contrast">
        <p>Here is a bad example of low contrast between the text and the background. With the background being yellow and the text pink there is only a ratio of 1.84:1 which makes it very hard to read.</p>
    </div>
</div>

<div class="example">
    <h3>Good example</h3>
    <p>This is a good example of color contrast between the text and the background. This black text against the white background has a contrast of <strong>12.63:1</strong> which exceed the minimum requirement to meet AAA standards.</p>
</div>

## Non-text

Any non-text parts of graphics or any text that is used for user interface components must have a contrast ratio of **3:1** with the adjacent background. This is necessary because it allows low vision users to perceive parts of the page that may not necessarily be text but are still important in using or understanding the pages content.

Elements that his relates to are:

- Buttons
- Form elements (radio buttons, checkmarks, etc)
- Links
- User controls generated by scripts

If the component is determined by the user agent and not modified by the pages author/creator then these rules do not apply.

You must also ensure that the visual state or focus of the active component must have a sufficient contrast of 3:1 with the background.

If you have any icons, lines on line graphs, slices in a pie chart or any other graphics that are important and required to understand the content you must also ensure that they have a contrast of 3:1 against the adjacent colors. If someone cannot distinguish the lines or slices on the graph then how will the be able to accurately interpret and understand the information your trying to convey.

<div class="callout">
    <p>There are exemption to the ratio above relating to contrast when changing the color can change the meaning. Some instances are: </p>
    <ul>
        <li>Flags</li>
        <li>Heatmaps</li>
        <li>Photography</li>
    </ul>
</div>

<div class="example" aria-hidden="true">
    <h3>Bad example</h3>
    <p>Below is a bad example of contrast and a radio button. The radio button outline is so light and hard to see its hard for the user to determine where the visual boundary is to select a radio button.</p>
    <div class="low-contrast-radio">
        <label for="yes">
            <input type="radio" id="yes" name="bad-example" /> Yes
        </label>
        <label for="no">
            <input type="radio" id="no" name="bad-example" /> No
        </label>
    </div>
</div>

<div class="example" aria-hidden="true">
    <h3>Good example</h3>
    <p>Since this contrast between the radio buttons boundary and the white background is much greater its easier to see and you can quickly determine where to click to select the option you choose. </p>
  <div>
        <label for="yes">
            <input type="radio" id="yes" name="bad-example" /> Yes
        </label>
        <label for="no">
            <input type="radio" id="no" name="bad-example" /> No
        </label>
    </div>
</div>

## Focus indicators and contrast

All visual focus indicators must have a ratio of **3:1** against the background. There is already default styling done by the browser for the visual focus. Its often a thin dotted line around the item that has been focused on, but since this is still somewhat difficult to see its always best to add some CSS to enhance it.

## UI components and boundaries

This is referring to any controls such as button or form elements. They must also have a ratio of **3:1** for the contrast to be sufficient and for users to be able to easily interact with your web page.

<div class="callout">
    <p>When developing an iOS app you should try and use the standard iOS colors or check that your custom colors you are using have a sufficient contrast.</p>
</div>

## Window High Contrast mode

Windows has a high contrast mode that will change the theme of the computer altering font colors and backgrounds. There are four different themes:

- High contrast black
  - Black background
  - White text
  - Yellow links
  - Bright green disabled text
  - Highlights selected text in turquoise and black text
- High contrast white
  - White background
  - Black text
  - Blue links
  - Maroon disabled text
  - Highlights selected text in dark blue background and white text
- High contrast #1
  - Variation of the high contrast black theme
- High contrast #2
  - Variation of the high contrast black theme

### Browsers

Some browsers have the ability to allow you to change the theme to a high contrast theme if you wish. Edge and IE automatically default to the high contrast theme. Firefox you can turn it on in the settings by going to Menu > Options > Content > Colors (under fonts and colors) > Select use systems colors in the dialog (this is if you have the Windows High Contrast Mode enabled on your machine).
Chrome is a little different. It will detect if you already have the high contrast mode enabled but then will prompt you to install the high contrast extension (if you dont already have it installed).

### Do not override windows high contrast mode

It is important that you do not include any css or selectors to override the windows high contrast mode. This is because this then does'nt allow your users to customize the page based on their preferences.

## Testing for contrast

When designing a site or a page you should always text your color contrast to make sure that its accessible for the widest range of users. Here are some links to sites and applications that can be used to test your color contrast:

- [WEBAIM Contrast Checker](https://webaim.org/resources/contrastchecker)
- [Deque University Color Contrast Analyzer](https://dequeuniversity.com/color-contrast)
- [Accessibility Engine - Axe browser extension](http://www.deque.com/products/axe/)
- [Adobe Color Contrast tool](https://helpx.adobe.com/ca/creative-cloud/adobe-color-accessibility-tools.html)
- [Adobe Color Contrast tool](https://helpx.adobe.com/ca/creative-cloud/adobe-color-accessibility-tools.html)
- [Colour Contrast Analyser (CAA) Downloadable tool](https://www.tpgi.com/color-contrast-checker/)
