---
title: Link text, what to include, what to not include.
date: 2022-08-31
intro:  Audio descriptions help those who cannot see things in videos that have no audio content tied to them such as scenery, facial expressions, actions, and more. They can help provide this important information tho those who are blind. Read more about why they are needed and when to include them. 
tags: ['alt-text', 'HTML', 'examples']
---
It is important that link text can be programmatically determined and that it properly describes the links purpose or location. 

If you provide link text that has ambiguous text like Click here, More, Here a user might not no what that link does or where it even goes. This is especially true for screen-reader users who may use the link text to determine the links purpose before they decide if they want to continue navigating to that new link. 

## Things to keep in mind when creating link text: 
- Do not use the word link in the link text, screen-readers will announce its a link beforehand so it will be redundant. 
- Links that go to the same destination should have the same text
- Links that go to different destionations should have different text

<div class="example" aria-labelledby="link-text-bad" tabindex="0">
  <h2 id="link-text-bad">Examples of bad link text</h2> <p>These two links to to the same location but they have different link text.</p>
  <a href="contact.html">Our Company</a>
<a href="contact.html">Contact Us</a>
  <pre aria-hidden="true"><code aria-hidden="true">&lt;a href="contact.html">Our Company&lt;/a>
&lt;a href="contact.html">Contact Us&lt;/a></code></pre>
 
  <p>These two links to to the different locations but they have different link text.</p>
  <a href="directory.html">Contact Us</a>
  <a href="contact.html">Contact Us</a>
  <pre aria-hidden="true"><code aria-hidden="true">&lt;a href="directory.html">Contact Us&lt;/a>
&lt;a href="contact.html">Contact Us&lt;/a></code></pre>
</div>
