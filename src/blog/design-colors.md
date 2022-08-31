---
title: Accessibility and Colors
date: 2022-04-25
intro: While building websites we must make sure that our HTML is semantically correct, but we also need to make sure that we are designing with accessibility in mind.
tags: ['design']
---

While building websites we must make sure that our HTML is semantically correct, but we also need to make sure that we are designing with accessibility in mind. This post I am going to discuss the important of color and what should or should'nt be done when designing a website to be accessible as possible. 

One very important thing we must keep in mind when designing websites is to make sure that we do not use color as the only means to convey information. When I say information I am talking about any text that is: 
- Distinguishing between visual elements
- Distinguishing between interactive elements
- Distinguishing from static elements

Its important to make sure that color is not the only way we convey information because those who may be colorblind or have low vision, still need to be able to have access to the information that we have on our site. 

<div class="callout">
    <p><strong>Note</strong>: Its very important that we do not use color alone to convey important information because the colors we use may be altered or appear differently to the users.</p>
</div>

Also to ensure that our content can accommodate the needs of all our users we need to try and design and develop the content to be customizable for each individuals needs. Users can use their assistive technologies to adjust the color, contrast, brightness and more of the web content, so its best to make sure they have the ability to customize it as they wish. 

## Color and links
You must not use color alone to distinguish the link from the surrounding text unless: 
- The color contrast between the link and the text is 3:1 AND
- There is additional differentiation when the link receives focus.

When I say differentiation I mean meaning you should add some additional such as a underline, outline or something else that makes it stand out as a link.

### Common ways to distinguish links from text
- Different color plus underline - browser default
- Different color plush underline the links on hover and focus only
    - It is not recommended to remove the underline from links in the main content area due to those with low vision may have difficulty distinguishing the link only by color before they hover/focus on the link. It is still allowable though you must ensure that the contrast is 3:1 and that the underline occurs on the links focus.
- Different background color on focus/hover
- Add an outline or border on focus/hover
- Placement in a navigation menu
    - Sighted users understand that items are clickable in menu items, if the menu is styled in a way that makes it obvious to the user that its a menu
<div class="example">
    <h3>Bad - Low contrast example</h3>
    <p>This link is not accessible because its does not have a contrast ratio of 3:1. Its ratio is only 1.49:1, which does'nt meet minimum standards.</p>
    <p><a href="#0" class="low-contrast-link">Color contrast</a> is important!</p>
</div>

<div class="example">
    <h3>Good - Underlined link example</h3>
    <p><a href="#0">Color contrast</a> is important! This link is a good link example because it is underlined and it also has a contrast ratio of 5.148  :1.</p>
</div>

<div class="example">
    <h3>Good - High contrast example</h3>
    <p>This link is is accessible because of its contrast ratio is greater than 3:1. While its not it still passes minimum guidelines because of the contrast and the focus/hover states its still best practice to underline a text to make it 100% obvious that its a link.</p>
    <p><a href="#0" class="no-underline-border">Color contrast</a> is important! </p>
</div>


## Color and User Interface Components
You should not use color as the sole method to distinguish UI components and or their surrounding contents unless the contrast between the two is at least 3:1. 

<div class="example">
    <h3>Bad example</h3>
    <p>This is a bad example because color is the only way that is distinguishing the buttons (the last two icons with text). If a user has low vision they may have difficulty telling the difference between the two sets of items.</p>
    <ul class="list-ui">
        <li><i class="fa-solid fa-explosion"></i> We are the bomb</li>
        <li><i class="fa-solid fa-face-kiss-wink-heart"></i> Wink Wink</li>
        <li><a class="btn-bad" href="#0"><i class="fa-solid fa-gear"></i> Settings</a></li>
        <li><a class="btn-bad" href="#0"><i class="fa-solid fa-at"></i> Contact Us</a></li>
    </ul>
</div>

<div class="example">
    <h3>Good example</h3>
    <p>This is a good example of not using color alone to distinguish UI components. Since the button is also outlined it makes the icons stand out more for those who may not be able to distinguish the two only by color. </p>
    <ul class="list-ui">
        <li><i class="fa-solid fa-explosion"></i> We are the bomb</li>
        <li><i class="fa-solid fa-face-kiss-wink-heart"></i > Wink Wink</li>
        <li><a class="btn-good" href="#0"><i class="fa-solid fa-gear"></i> Settings</a></li>
        <li><a class="btn-good" href="#0"><i class="fa-solid fa-at"></i> Contact Us</a></li>
    </ul>
</div>

## Allowing customizability
If you have any text on your site, ensure that its being created as standard text in the HTML mark up and that its not an image or another graphic version of text, like an SVG. This allows the user to customize the text color and contrast to better suit their needs. Since some users may also be sensitive to brightness they may make changes to contrast and colors to be easier on them thats why its important that all text on the page that is visible to the user can be customized to fit their needs. This also applies to UI components such as buttons, form controls and other features. 


## Resources
One resource I have always used is WEBAIM's contrast checker. This is great to check the contrast ratio between the foreground and the background color to make sure that you meet the minimum 3:1 ratio for normal text to be WCAG AAA compliant. 

[WEBAIM Contrast Checker](https://webaim.org/resources/contrastchecker)