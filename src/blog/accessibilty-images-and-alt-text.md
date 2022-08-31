---
title: Images & alternative text
date: 2022-04-06
intro: Some users may not be able to access images directly, so as developers we need to ensure that we are providing an HTML-based alternative for this content. 
tags: ['accessibility', 'alt', 'images', 'examples']
---

Users who are blind cannot access our images directly, the will use their screen readers to listen to content and any alternative text that was left by the creator of the site/page. It is almost the same concept for those who are deaf-blind but rather than listening to the content the text is converted to a refreshable braille device for them to feel. As developers we need to make sure that any image on our site that provides meaningful content to the page has appropriate alternative text. In this post I will be focusing on images alone but look for my future posts that will focus on: 
- SVGs
- Icon fonts
- HTML5 Canvas
- Multi-media objects
- Documents

## Alternative text best practices
The goal to good alternative text is to do the following: 
- Make them programmatically determinable - meaning that screen readers are able to access them
- Make them meaningful - accurately describe the images purpose or the purpose of the authors content
- Concise - make sure you text alternative is no longer than 150 characters (preferably its much shorter than 150 characters)
- Do not include the words: link, image, or graphic. Screen readers will read out what the element is so having this as text is redundant to the user

When creating `alt` text ask yourself the following questions: 
- Why is the non-text content here?
- What information is it presenting?
- What purpose does it fulfill?
- If I could not use the non-text content, what words would I use to convey the same information or function?

If you have an image that is purely for decoration you should hide the image with an empty `alt` tag. **Be sure to include an alt tag, if not the screen reader will read the images filename, which can be irrelevant and un-useful to the user**.

Also if you have an image that conveys a lot of important information, there should be a supplementary long description for that image.

<div class="callout">
    <p><strong>Note:</strong> While there is no limit on how long your <code aria-hidden="true">alt</code> text can be its best practice to not allow it to exceed 150 characters. This is because of the following reasons: </p>
    <ul>
        <li>Screen readers cannot resume where they left off if a user pauses in the middle of reading text</li>
        <li>Screen reader users cannot navigate the text (word by word)</li>
        <li>Some older screen readers do not even read the full text of the <code aria-hidden="true">alt</code> text</li>
    </ul>
</div>

## Ways to add `alt` text to images
Here are some ways that you can add `alt` text to your images: 
- `alt` - This is the standard method. It will not be read at all though if there is an `aria-label` or `aria-labelledby`
- `aria-labelledby` - If this is provided the text it refers to will override all other values
- `aria-label` - This will override all other labels unless there is an `aria-labelledby`
- `title` - Will be read if there are no other methods present
    - This is not recommended because some screen readers (VoiceOver on Mac OS) will tread this as an extra description as well as reading the accessible name (`alt`, `aria-label`, `aria-labelledby`)
    - Some screen readers (NVDA, JAWS) will not read the title if other methods are provided

## Informative images
Informative images are any images that convey content or important information, these images must have programmatically determinable `alt` text. 
### Images that convey content MUST have programmatically determinable `alt` text
This means that you image must have a form of alternative text by using any of the methods mentioned above. 

#### Example of good alt text
<div class="example">
<img src="../assets/images/mp-logo-angle-2-1.png" class="img-example" alt="Morgan Peck Logo"/>

```
<img src="../assets/images/mp-logo-angle-2-1.png" class="img-example" alt="Morgan Peck Logo"/>
```
<p>Here is an image that has an alternative text that describes it as Morgan Peck Logo. This allows the user to understand that its a logo for the site. </p>
</div>

#### Example of bad alt text
<div class="example">
<img src="../assets/images/mp-logo-angle-2-1.png" class="img-example" alt="Morgan Peck Logo"/>

```
<img src="../assets/images/mp-logo-angle-2-1.png" class="img-example" />
```
<p>In this example there is no alternative text for the user to know that its the logo for the site. Since there is no alternative text the screen reader will read out: Image mp-logo-angle-2-1.png, which is no use to the user. </p>
</div>

## Actionable images
Actionable images or iamges that are used for a user to perform a specific function or action ***MUST*** have alternative text. This alternative text must be meaningful and describe to the user what the button/action is meant to do and not what it looks like

> WCAG 1.1.1 - "If non-text content is a control or accepts user input, then it has to have a name that describes its purpose"

### Example of a good actionable image
<div class="example">
<img src="../assets/images/submit-button.png" class="img-example" alt="Submit"/>

```
<img src="../assets/images/submit-button.png" class="img-example" alt="Submit"/>
```
<p>This is a good example because this informs the user that the image will submit when the action is performed.</p> 
</div>

#### Example of a bad actionable image
<div class="example">
<img src="../assets/images/submit-button.png" class="img-example" alt="Pink oval with bevels"/>

```
<img src="../assets/images/submit-button.png" class="img-example" alt="Pink oval with bevels" />
```
<p>This alternative text does'nt inform the user what the purpose of the button is. It describes what the button looks like but that is not beneficial to the user since they do not know its a button that submits the content.  </p>
</div>

## Animated images
Animated images **MUST** not flash or flicker more than three times per second. Having an image that does flash or flicker more than three times per second can trigger seizures with uses who have epilepsy or photo-sensitive disorder. 

[Here](http://trace.umd.edu/peat) is a free resource you can use to test your webpage animations and or videos to make sure they are not at risk for causing a seizure

## Auto play video-only content
Any videos that auto play on your site **MUST** have a method to pause, stop, or hide the content. Having a video automatically play with no way for the user can stop it can be problematic for those with cognitive disabilities. By limiting your video auto-play to , it can grab peoples attention but also will not prevent or distract your user from interacting with your sites content. 

## Complex images
Complex images are images that have amounts of complex data such as charts and graphs. Complex images **MUST** must be briefly described using `alt` text and **MUST** have a more long complete description. 
### Ways to provide long descriptions for images
- Provide the long description in the context of the HTML document itself
- Provide a button that expands a collapsed region that contains the long description 
- Provide a button that opens a dialog that contains the long description
- Provide a link to a long description that is on another page

The long description **SHOULD** be visible to sighted users and it **SHOULD** be programmatically associated with the image. 
 ```
 <img
alt="Bar chart with percentages. Extended description below chart."
aria-describedby="description-extended">

<div id="description-extended">
    <p>This is the long description of the data :</p>
	 <ul>
	    <li>January: 14%</li>
	    <li>February: 10%</li>
	    <li>March: 9%</li>
	    <li>April: 18%</li>
	    <li>May: 3%</li>
	    <li>June: 1%</li>
	    <li>July: 20%</li>
		</ul>
</div>
 ```

 ## Informative text
 Images **MUST** not include any informative text if an equivalent presentation of text can be rendered via real text. 

 Make sure that if any image has informative text that it is somehow represented on the page via real text. 

 This does'nt apply to logos, they are the only exception on images having real text. 

## Decorative / redundant images
Any images that are purely decorative or redundant CSS images **SHOULD NOT** have a text alternative in the HTML.

Decorative images are images that do not convey important content, when these are used included an empty `alt=""` on the image and screen readers will ignore it. 

<div class="callout">
    <p><strong>Note:</strong> Be sure to include the <code aria-hidden="true">alt=""</code> tag even if its empty. If you do not include it then the screen reader will read the images title rather than ignoring it completely.</p>
</div>

## Image maps
If you have an image map you should make sure the `alt` text is: 
- Meaningful - must accurately describe the purpose of the entire image map to the user. You can also include brief instructions telling the user how to interact with it. 
- Concise - Try and limit the text to 150 characters or less
- `<area>`'s must be available as programmatically text - meaning they must also have `alt` text
- Avoid using a server-side image map if you can accomplish the same functionality with a client-side image map