---
title: Icon fonts and accessibility
date: 2022-04-18 
intro: Icon fonts are fonts that contain symbols and glyphs rather than numbers or letters. Just like images we must ensure to apply some best practices to make them accessible to all our users.
tags: ['accessibility', 'alt', 'svgs', 'icon-fonts']
---
## What are Icon fonts?
Icon fonts are fonts that contain symbols and glyphs rather than numbers or letters. They allow web developers to add lightweight, reusable images to their sites without the extra weight of an actual image. Icon fonts are vector images so they will scale well across various devices sizes and also will alow a user to customize its color. Just like images there are things you need to do to ensure that these icon fonts are accessible to all your users, read more below to find best practices. 

## Icon fonts and accessibility
Just like images you need to make sure that icon fonts are assigned a semantic role and have concise meaningful alternative text. 

For informative icon fonts that does not have any visible text be sure to add a `role="img"` to  your icon font. This allows blind users and screen reader users to be informed that an image is present. Then screen readers can list the icon fond among the images of the page and allow the user to navigate through the graphics. 

If you informative icon font does not have any text you must be sure that it has a text alternative. This can be done either by adding an  `aria-label` to the icon font or by the `position: absolute; clip: rect(0 0 0 0)` method without using a `role="img"`. You should avoid using the CSS method because: 
- Icon font is not recognized as an image by screen readers
- On mobile devices the icon font is not available to screen readers when using the explore by touch method
- Voiceover on OS X focuses separately on the icon font item and then on the hidden text even if the icon font is set to `aria-hidden="true"`

### Good informative icon font
<div class="example">
    <i class="fa-solid fa-cat" aria-label="Cat" role="img" style="font-size: 2.5rem;"></i>
    
    <i class="fa-solid fa-cat" aria-label="Cat" role="img" ></i>
   <p>Since there is a <code>role="img"</code> set screen readers will recognize this font as an image causing it to also read the <code>aria-label="Cat"</code> to its users.</p>
</div>

### Bad informative icon font
<div class="example">
    <i class="fa-solid fa-dog" aria-label="Dog" style="font-size: 2.5rem;"></i>
    
    <i class="fa-solid fa-dog" aria-label="Dog"></i>
   <p>Most screen readers will ignore the aria-label text in this example since this does not have a <code>role="img"</code> set.</p>
</div>

## Actionable Icon fonts
Actionable icon fonts are any icon fonts that are: 
- Links
- Buttons
- Controls
- UI components users can interact with

If you have any actionable icon fonts without any accompanying visible test you must make sure to have a text alternative. To do this you can add an `aria-label` to the icon font. This will treat icon font as an iamge and the link then will inherit the accessible text of that icon font. 

### Linked or anchor tag icon font with an `aria-label`
<div class="example">
    <a href="https://github.com/mpeck99">
        <i class="fa-solid fa-github" aria-label="github" style="font-size: 4rem;"></i>
    </a>
    
    <a>
        <i class="fa-solid fa-github" aria-label="github"></i>
    </a>
  
   <p>Most screen readers will ignore the aria-label text in this example since this does not have a <code>role="img"</code> set.</p>
</div>

### Buttons with icon fonts and `role="img"`
<div class="example">
    <button><span role="img" class="fa fa-bold" aria-label="Bold"></span></button>
    
    <button><span role="img" class="fa fa-bold" aria-label="Bold"></span></button>

</div>

### Buttons with icon fonts and the alternative text on the button
<div class="example">
    <button id="usernameExample" aria-label="More info about user name" 
      title="More info about user name">
      <span class="fa fa-question-circle" aria-hidden="true">         
      </span>
   </button>
    
    <button id="usernameExample" aria-label="More info about user name" 
      title="More info about user name">
      <span class="fa fa-question-circle" aria-hidden="true">         
      </span>
    </button>

</div>

## SVGs vs Icon fonts
SVGs and icon fonts are pretty similar when it can come to accessibility they both have their strengths and weaknesses. See the table below: 

<table class="table" aria-label="SVGs and Icon fonts benefits">
    <thead>
        <tr>
            <th>Benefits</th>
            <th>SVGs</th>
            <th>Icon Fonts</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Icons are vector based, rendering clearly and legibly</td>
            <td><i class="fa-solid fa-circle-check unchecked" aria-label="Unchecked"></i></td>
            <td><i class="fa-solid fa-circle-check checked" aria-label="Checked"></i></td>
        </tr>
        <tr>
            <td>Users can customize colors with accessibility utilities like Windows high contrast mode </td>
            <td><i class="fa-solid fa-circle-check unchecked" aria-label="Unchecked"></i></td>
            <td><i class="fa-solid fa-circle-check checked" aria-label="Checked"></i></td>
        </tr>
        <tr>
            <td>Icons scale with text when magnifying only the text</td>
            <td><i class="fa-solid fa-circle-check unchecked" aria-label="Unchecked"></i></td>
            <td><i class="fa-solid fa-circle-check checked" aria-label="Checked"></i></td>
        </tr>
        <tr>
            <td>Icons work when images are turned off</td>
            <td><i class="fa-solid fa-circle-check unchecked" aria-label="Unchecked"></i></td>
            <td><i class="fa-solid fa-circle-check checked" aria-label="Checked"></i></td>
        </tr>
         <tr>
            <td>Icons can be multiple colors</td>
            <td><i class="fa-solid fa-circle-check checked" aria-label="Checked"></i></td>
           <td><i class="fa-solid fa-circle-check unchecked" aria-label="Unchecked"></i></td>
        </tr>
         <tr>
            <td>Icons retain their original color(s) when font and background colors are changed in user preferences</td>
            <td><i class="fa-solid fa-circle-check checked" aria-label="Checked"></i></td>
            <td><i class="fa-solid fa-circle-check unchecked" aria-label="Unchecked"></i></td>
        </tr>
         <tr>
            <td>Icons work when styles are turned off</td>
            <td><i class="fa-solid fa-circle-check checked" aria-label="Checked"></i></td>
            <td><i class="fa-solid fa-circle-check unchecked" aria-label="Unchecked"></i></td>
        </tr>
         <tr>
            <td>Icons work when users customize the font (users with dyslexia may choose a dyslexia-friendly font)</td>
            <td><i class="fa-solid fa-circle-check checked" aria-label="Checked"></i></td>
            <td><i class="fa-solid fa-circle-check unchecked" aria-label="Unchecked"></i></td>
        </tr>
    </tbody>
</table>



