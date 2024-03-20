---
title: CommonLook Training - Images
date: 2024-03-18
intro: 'Enhance document accessibility with clear image tagging, concise alternative text, effective use of captions and figures, appropriate redaction, and consideration of reading order. These practices ensure inclusivity for all users.'
tags: ['CommonLook', 'training','images']
---
# CommonLook Training - Images

In today's digital age, ensuring that documents are accessible to everyone, including those with disabilities, is crucial. One key aspect of document accessibility is the proper tagging and handling of images and graphical elements. Here are some essential tips to help you make your documents more accessible:

## Tagging Images

When including images in your document, consider if the image conveys important information. If it does, put the image in a `figure` tag with appropriate alternate text. The alternate text should be concise, accurate, and informative, conveying the essential information the image provides.

## Artifacting Images

For purely decorative images, untag them by right-clicking and selecting "untag" or hit delete. Be cautious not to delete the entire `figure` tag if it's empty; instead, ensure that the graphical element itself is removed.

## Alternative Text

When adding alternative text, ask yourself what's crucial about the graphic and avoid generic terms like "picture" or "graphic of." If there's a caption, you can refer to it in the alternative text. Remember to hit the tab key in the properties panel for changes to update.

## Captions & Figures

Use the `caption` tag for grouping text with graphical elements. If converting a paragraph tag to a caption, first convert it to a `span` tag (Ctrl + Shift + W), then insert the span into a caption (Ctrl + Q). Ensure that important graphics are within `figure` tags.

## Math Formulas

Tag math formulas in a `formula` tag and provide alternative text that conveys the full meaning of the formula.

## Redacted Text

When redacting content, ensure it's permanently removed and use `figure` tags with alternative text like "redacted text" for screen reader users.

## Actual Text & Expansion Text

Use actual text for exact text replacements in graphical elements with text, and expansion text for acronyms or abbreviations. Avoid assigning more than one type of text to any image or graphical element.

## Reading Order Considerations

When text wraps around an image, consider the logical reading order. Place `figure` tags either before or at the end of a paragraph, not in the middle. Watermarks should be tagged based on their importance in the reading order.

By following these tips, you can significantly improve the accessibility of your documents, ensuring that everyone can access and understand the content effectively.
