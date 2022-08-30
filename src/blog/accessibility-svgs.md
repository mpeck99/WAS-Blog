---
title: Scalable Vector Graphics (SVGs) and accessibility
date: 2022-04-12 
intro: Scalable Vector Graphics can help provide a number fo features to benefit individuals who experience low vision or color blindness. 
tags: ['accessibility', 'alt', 'svgs']
---

Scalable Vector Graphics or SVGs are two-dimensional, vector based graphics that are defined in Extensible Markup Language (XML) that was first introduced to the World Wide Web Consortium (W3C) in 1999. There is a variety of ways you can create an SVG but they usually are created using some form of graphic editing software, like Adobe. 

## SVG's and accessibility
SVG's provide a number of features to help in the area of accessibility and graphics, and can benefit individuals who may experience low vision or color blindness. One thing that is beneficial with SVG's is that its resolution independent. This means that they will look good across various sizes, from small mobile devices to large desktop screens.

### Raster vs Vector
Raster images, also known as bitmap images, are made up of sets of pixels that each have different color values. Raster images are best for complex images like photographs. These images when zoomed in become pixilated, distorted or blurry which can be an issue for users with low vision or color blindness. 

Vector images or SVGs are basic geometric shapes (lines, points, or curves) with their relationships based on mathematic equations. These images will scale well regardless of zoom factor or resolution. These are best utilized when drawing is simplistic, such as: 
- Logos
- Charts
- Graphs
- Text
- Line art

SVG's are also generally smaller in file size since they are just text and they can easily be zipped. 

#### Example of Raster Vs. SVG when scaled
##### Raster image
<div class="example">

<img src="../assets/images/flower.jpg" class="img-example" alt="Red flower" />
<p>This jpg is the same size as the SVG below but due to it being a raster image when its scaled to fix the same width/height it looks blurry and pixelated.</p>
</div>

##### SVG
<div class="example">
<img src="../assets/images/flower.svg" class="img-example" alt="Red flower" />
<p>As you can see this SVG is clear and crisp at the same size as the image.</p>
</div>

## Ways to embed an SVG
There are two different ways that you can insert an SVG on a page:  
- Use the `<img>` tag and reference the SVG file as the `src`
- Put the SVG code inline in the HTML
### Using the `<img>` tag
This is pretty straightforward, you would reference the SVG file as the `src` as you would for any other image format (.tiff, .jpg, .svg, etc). If you are embedding an SVG this way you need to make sure that the `<img>` tag has a `role="img"` set to it so that it can be recognized as an image to the widest range of assistive technologies.
#### Pros
- Smaller HTML file size
- Image can be cached by the browser
- If the SVG is used in multiple places, it makes maintenance easier
#### Cons
- JS and CSS can not be applied to the `svg` contents to manipulate or animate any of its properties
- Can provide less predictable results (image not being seen and more) since the image is not directly in the DOM.
### Inline SVGs
Putting an SVG code has a major advantage against embedding in a `<img>` tag since you can manipulate or animate any of the SVG properties with CSS and JS. 
#### Cons
- Assistive technology support is not consistent
- Increased embedded code will result in a larger HTML file size
- Inline SVGs cannot be cached

If you are inserting an SVG inline that has important information you want to make sure is available to as many assistive technologies as possible be sure to add `role="img"` to the SVG code. 

Also you must add a meaningful and concise `<title>` element, that is the first child of the parent element. This is important because some SVGs may have multiple titles if it has more than one container or groupings. You also must make sure that the `<title>` element is associated with an `aria-labelledby` on the svg itself. This is because not all browsers expose the `<title>` element via the accessible API, so doing this drastically increases the exposure to screen readers. 

If there is any text that also is important and should be spoken by a screen reader it must be associated with the `<svg>` element using an `aria-labelledby`

<div class="callout">
    <p><strong>Note:</strong> You should not embed SVGs in an <code aria-hidden="true">object</code> or an <code aria-hidden="true">iframe</code> tag since they are very poorly supported by assistive technologies</p>
</div>

## Text in SVGs
You should try your best to eliminate or keep to a minimum the amount of text elements you have in an SVG. Screen readers will read all text elements as one continuous string of text which can end up being confusing for the user.

## Complex SVGs
If you have a complex SVG, such as a graph or chart, you should provide a meaningful and concise `alt` text and must have a more complete description somewhere else. By providing these you can help blind users be able to easily make sense of the graphic. Provide a `<desc>` tag for the detailed description of the complex SVG if it cannot be provided in any other way. This will make description available only to screen reader users, and is the preferred method of providing a detailed description. 
```
<svg role="img" aria-labelledby="description"> 
<title>Total Widgets Purchased during 2016</title>
  <desc id="description">
  The graph displays the total number of widgets purchased from The ABC Store
  during 2016, displayed by month.
  </desc>
</svg>
```

## Color contrast
If the SVG doesnt have a set background color, it will change itself when/if a user switches to windows high contrast mode. This may not be an issue but if large parts of the SVG ar transparent and they depend on a particular background color it may be difficult for the user to view when this change occurs.

Try to style your SVG to ensure compatibility with windows high contrast mode.

## Animated SVGs
Animations that use JS or CSS to animate should not blink at a rate of three times per second or more. This will help lower the risk of causing seizures in users who are epileptic or have photo-sensitivity disorders. Also to meet WCAG Guideline Success Criteria 2.2.2: Pause, Stop, Hide, ensure that your video does not auto-play for more than 5 seconds. You must allow your users to pause or stop the animations. This is beneficial to any users who have cognitive disabilities to not become distracted. 

## Interactive SVGs
If you have an interactive SVG on your page you must ensure that it is fully accessible to keyboards by making: 
- All links, buttons, and controls keyboard focusable and usable
- All focusable elements must have a visual focus indicator
- Scripting must manage the focus whe activating, deactivating/dimissing features (dialogs, menus, etc)
    - The focus must be at the proper place at the proper time
- `<svg>` element must not trap the keyboard focus
- Tab order must be logical
- All focusable elements must be visible on the screen or become visible once they are focused on

You also must make sure that its fully touch-screen accessible, meaning: 
- All mouse-only or keyboard-only functions have a touch equivalent action
- All gesture-dependent actions must have an equivalent non-gesture method to achieve the same results

Interactive SVGs must also communicate the applicable `name`, `role`, and `value` of controls , events, and semantic elements withing the svg element. This means that it must abide by the same accessibility guidelines and principles that govern custom ARIA widgets. 

<div class="callout">
    <p><strong>Note:</strong> Support for interactive SVGs can be spotty when combined with ARIA so its best to thoroughly test them when used.</p>
</div>






