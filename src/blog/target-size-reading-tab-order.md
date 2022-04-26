---
title: Target size, Reading Order, and Tab Order
date: 2022-04-26
intro: When designing and developing a sites its important to keep the target size, tab order, and reading order in mind. 
tags: ['design', 'accessibility']
---
When designing and developing a sites its important to keep the target size, tab order, and reading order in mind. 

## Target size
If you have an actionable element (like a button) you need to make sure that the target size is at least 44px by 44px wide, and it has at least 6pxs of inactive space between adjacent actionable elements. This is important because if you do not allow this type of space on your actionable elements it can be hard for your users to touch or click your element. Especially if your user has issues with motor control. 

You can easily make a button the right target size by adding some padding to the top and bottom to ensure that there is enough room to click. To ensure that there is at least 6px around the button if there is adjacent images make sure to add some margin.

Its also suggested that if you have a frequently used target or element to make them larger.

<div class="example" aria-hidden="true">
    <h3>Bad example</h3>
    <p>This button below only has a target size of 28px by 36px which can make it hard to click on.</p>
    <a href="#0" class="btn btn-no-padding"><i class="fa-solid fa-magnifying-glass"></i></a>
</div>

<div class="example">
    <h3>Good example</h3>
    <p>This button below only has a target size of 52px by 45.6px wide so its easier for a user to click or touch.</p>
    <a href="#0" class="btn"><i class="fa-solid fa-magnifying-glass"></i></a>
</div>

## Reading and Focus Order
The Document Object Model or the DOM is what determines the reading and focus order of your sites. After a browser parses your content and runs any relevant JS the DOM will display your source code. Screen readers then will use the structure of the DOM to linearly tab through the sites content. So it is important to make sure that your reading order and your tab order is logical and intuitive. 

A good way to check that your sites reading order is logical is to run off your stylesheets and read through your static content. This helps give a good feel of how the screen readers will be reading the page. 

Its also important to ensure that your tab order is logical, so if a user is tabbing through your content they wont get stuck or confused. The browser will start at the top focusable element then proceed through the page linearly until it reaches the bottom. It only pays attention to the content that is in the DOM and ignores all the visual formatting such as: 
- Margin
- Floats
- Padding
- Columns
- Positioning

## Do not use a positive value for `tab-index`
It is important that you do not set a positive value, such as 1, 2, 3, on any element on your page. If you do it can cause significant issues for any keyboard users by creating a discrepancy between the tab and reading order. This discrepancy then can lead to confusion. It will also remove the items from the natural tab order because if anything has a positive tab-index value that element will be tabbed into before the rest of the focusable elements. 

## Things to watch out for when thinking about reading / tab order
- CSS Positioning techniques such as: float, padding, position, margin can alter the visual layout which can lead to it not matching the reading order
- Injecting content dynamically via AJAX - this can end up placing things in unexpected locations. Say a blind user is in the middle of the page and something is injected via AJAX above where they are currently located. They may not even notice that the content has loaded since they have already read through that section. 