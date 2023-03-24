---
title: Designing Accessible User Experiences
date: 2022-03-11
intro: This past week or so I have been trucking through my third Deque University WAS Prep Course, Designing for an Accessible User Experience.
btn: Read more about accessible UX
tags: ['WAS', 'WCAG', 'Design']
---

Hello, its been awhile from my last post, I have been busy learning and trying to follow along with deque's courses during work and on my free time. My last post I started discussing Web Content Accessible Guidelines (WCAG) 2.1 and the perceivable guidelines. I have read through all the guidelines and will be making a post in the future once I have the chance to get back and re-look over them.

This past week or so I have been trucking through my third Deque University WAS Prep Course, Designing for an Accessible User Experience. While I have experience in the development of accessible content I have never also though about the design aspect. Throughout this course it keeps mentioning how as developers we like to say "mobile first" and how we should also be thinking of "accessible design" from the very beginning.

While we can follow along with WCAG 2.1 to help create a design that complies with the guidelines, these are only objectively testable (meaning we can easily test and mark things as a pass or fail). When trying to design to WCAG 2.1 guidelines we miss out on any subjectively testable aspects of the design such as:

- Is the font easily readable?
- Is the content easy to read/understand?
- Does the visual cues focus on what the purpose of the web page is?

WCAG 2.1 did help in some sense compared to 2.0 by improving(some what) and adding 17 new success criteria in the following categories:

- Cognitive disabilities - While they have made some improvement here there is still work that needs to be done
- Low vision
- Mobile and touch devices

## Design failures

Some of the major failures when it comes to accessibility are as follows:

- No semantic markup
- Custom widgets without ARIA markup
- Custom widgets without proper keyboard focus management
- Poor color contrast
- Form validation with visual cues only

While I knew about form validation and poor color contrast being a huge issue with accessibility I didn't think that having semantic content is so important to accessibility. Once reading into it it does make sense, you want provide the correct elements and structure for your site so that assistive technologies can use that and present it to the user in a format that they can easily understand.

## Design considerations

While I could go in depth on everything word by word that deque recommends I just want to note some major takeaways when designing for various disabilities.

1. Ensure all content is presented in text or a text equivalent
   - This helps users who have vision, auditory disabilities present the content in a form they are most comfortable with
2. Ensure all content passes contrast guidelines
   - Allows those with vision disabilities be able to view and distinguish parts of the site
3. The user interface should be clear, predictable, and understandable
   - Make sure that your site is predictable in functionality and that your content is clear and understandable
4. All content must be available via keyboard
   - It is very important that all your content can be accessed via keyboard since a variety of disabilities may not be able to use a mouse and may rely on a keyboard
5. Make sure links have a hover anf focus state
   - Helps sighted users know the keyboard current location
6. Keep your interface and content as simple as possible
   - This helps benefit users with cognitive disabilities who may not be able to comprehend your site as well, also if your site is too complex they may have a hard time completing any tasks or even just using your site in general

## Summary of what I have learned

Throughout this course I have really learned and started to really understand the importance of thinking of accessibility first. Since accessibility is a huge part of your users experience we need to think of it from the very beginning so we wont waste time in the future trying to make an inaccessible design accessible. While WCAG 2.1 can be a good place to start to make your site accessible you will need to think about the intent of some items and the affordance's they may have. Keep your content simple and intuitive, make sure all content is provided via text or a text alternative, don't rely on colors to distinguish information, these are just some of things to keep in mind when trying to design with accessibility in mind.
