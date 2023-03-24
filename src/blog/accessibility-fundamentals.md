---
title: Accessibility fundamentals - Vision Disabilities
date: 2022-02-13
intro: Today I have started my dive into Deque's WAS Preparation course in learning about Accessibility Fundamentals - Disabilities, Guidelines, and Laws.
btn: Read more about visual disabilities
tags: ['vision', 'disabilities', 'fundamentals']
---

I have taken the jump and enrolled in Deque's Web Accessibility Specialist preparation course. Some of the things I have been reading on so far is about various types of disabilities such as:

<ul class="list-columns">
    <li>Blindness</li>
    <li>Low vision</li>
    <li>Color-blindness</li>
    <li>Deafness</li>
    <li>Deaf-blind</li>
    <li>Motor disabilities</li>
    <li>Speech disabilities</li>
    <li>Cognitive disabilities</li>
    <li>Reading disabilities</li>
    <li>Seizures</li>
</ul>

### Blindness

According to the CDC there are roughly 1 million people in the United states who are blind. With such a high population it is essential to help create accessible sites and applications for them to use. In order to create an accessible web experience we need to make sure that we present all the content via text or a text equivalent (such as text alternatives). We cannot rely on information being conveyed by color, location, highlighting alone.

#### Screen readers

Screen readers will take the content of the webpage and convert it into spoken words for someone who is blind. Screen readers cannot read any non-text content (images) so one must make sure to include text alternatives to describe what information/scenery the image is meant to show. Screen readers also allows the user sto pull up lists of headings, landmarks and other semantic elements to help the user understand the page better as well as navigate to sections quickly; So one must make sure that their code has good structure and semantics to help with this. When your site uses custom controls (accordions, media player controls, dialogs, etc) ou will have to make sure co have the correct name/label, roles (HTML or ARIA), and values attached since these controls natively have no semantic parts.

### Low vision

This category of disability is a broad category that encompasses many different conditions with varying degrees of impairment.

#### Types of low vision

- Blur - faces and objects appear blurry and it is difficult to distinguish features.
- Blur with low contrast - People with blurred vision can also have issues with seeing things in low contrast(not many dark nor light areas). It makes it difficult for them to distinguish
  - Outlines
  - Borders
  - Edges
  - Details
- Cataracts - blind spots in someone's eyes that can cause them to miss visual information. They may see innumerable dark gray spots that can cloud their vision and make objects on a site hard to see
- Reginal Detachment - Vision can be affected in multiple ways:
  - Flashing of light in their vision fields
  - Floaters in their vision
  - Dark shadow covering a significant portion of their field of vision
- Diabetic Retinopathy - A condition in which people see dark spots
- Glaucoma - Where a person can only see a small area and has no peripheral vision. The edges are heavily darkened, similar to looking down a narrow tube
- Hemianopia - An eye condition that limits vision to a smaller area
- Macular degeneration - This is an eye disease where the loss of vision is in the center of the eye, the field of vision. While they may have peripheral vision the deterioration can cause either blurred vision or a blind spot in the persons central vision

#### Assistive technologies for low vision

- Screen magnifier - Tools such as ZoomText and MAGic allow a users to magnify portions of the screen and display in a high resolution. It also have a variety of options to enhance colors, pointers, cursors and focus.
- Screen readers - Low vision users can benefit from the use of screen readers. By hearing the words it can help make the visual text easier to understand. While ZoomText and MAGic have screen readers built into them they do not have as many features as a stand alone screen reader may.

### Color blindness

It is estimated that there are around 300 million people in the world with a color vision deficiency. 1 in 12 men (8%) or 1 in 200 women. Being color blind does'nt mean that a person cannot see any color at all (it is possible but very rare) it means that they have a hard time distinguishing between certain colors. It is important that as developers, designers, web content creators and really any role that id putting out content for users on the web to not use color to convey information. We need to make sure that if there is important information for the users we can rely on color alone to distinguish it.

#### Types of color blindness

- Red-green - difficulty distinguishing between the colors: red, orange and green.
  - Deuteranopia
  - Protanopia
- Blue-yellow (Tritanopia)
- Achromatopsia (Gray scale) - very rare
- Red-black color blindness
