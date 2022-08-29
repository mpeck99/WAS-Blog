---
title: Semantic HTMl - Headings, Tables, Lists, and more.
date: 2022-08-28
intro: In a past post I went into the hierarchial levels of headings but there are some more best practices and examples I wish to share. Also tables, lists, paragraphs all need to be semantically marked up to ensure that our users can access the information on our site as easily as possible.
tags: ['accessibility', 'HTML', 'semantics']
---

It is important to include things in semantic HTML at all times. Well most times (sometimes ARIA can be used but its not recommended unless you know what your doing).

## So what do I mean by including things into semantic HTML?

When I say semantic html its important to ensure our content is appropriately marked up and that our contents layout/structure/relationships are not referenced by visuals only.

## Headings

You need to ensure all things that should be headings are actual headings (h1, h2, h3, h4, h5, h6) and not just styled to look like headings. Also its best to ensure that you write headings in hierarchial order. This means h1, then after that would be an h2, not an h6.

### Heading examples

<div class="example" aria-labelledby="heading-good-example">
   <h2 id="heading-good-example">Good example of semantic headings</h2>
  <p>This heading is a good example of a semantic heading because it allows screen-reader users to be able to easily look for a heading/section of content since it appropriately marked up.</p>
</div>
<div class="example" aria-labelledby="heading-bad-example">
  <p id="heading-bad-example">Heading that is not semantic</p>
  <p>This heading isn't semantically set up as a real heading so it causes screen-readers to not notice it as a heading. Looks like a heading isn't a heading. </p>
</div>

## Lists

Any items that should be a list or if they are a group of links should be in one of the following list markups:

- `ol` - Ordered list for when order does matter
- `ul` - Unordered list for when the order does'nt matter
- `dl` - when a term should be paired with a definition
  - `dt` - term name
  - `dd` - term definition
    When a screen reader user comes across a list it will notify them that its a list and how many list items it contains. That way a user will understand what they are listening to and what they can expect.

### List examples

<div class="example" aria-labelledby="list-good-example">
  <h2 id="list-good-example">Good semantic lists</h2>
    <h3>Ordered list</h3>
    <ol>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ol>
    <h3>Unordered list</h3>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <h3>Definition list</h3>
    <dl>
      <dt>Term 1</dt>
        <dd>
          Some cool term definition
        </dd>
    </dl>
</div>
<div class="example" aria-labelledby="list-bad-example">
  <h2 id="list-bad-example">Bad semantic list</h2>
  <p>1. Bad list item<br>2. Bad list item<br>3. Bad list item</p>
  <h3>HTML</h3>
  <pre><code>&lt;p>1. Bad list item&lt;br&gt;<br>2. Bad list item&lt;br&gt;<br>3. Bad list item&lt;/p&gt;</code></pre>
</div>

## Tables

Tables are a beast in their own thing. They never truly will be 100% accessible even if we do everything right, but this still does'nt mean we should do things wrong. The goal is to make them as accessible as possible by ensuring they have the following:

- Table headers `th`
- Rows `tr` & Columns
- Data-sets that appropriately link the data to the correct headers
- Title - should have an `aria-labelled` to linking to a visible heading above the table. If there is no visible heading above the table then should have an `aria-label`

## Other content

Its important that we ensure that all our text is in the correct HTMl. If we have any paragraph text we need to ensure that it is wrapped in `<p>` tags to ensure screen-readers are able to access the content when a user tabs into them. If they are'nt properly marked up then our screen-reader users will have no way to access our content, and thats not very cool

### Emphasize / Special text

If there is any text that should be visually emphasized be sure to use HTMl mark up to do so (`<em>` & `<strong>`)

## Good example of semantic headings

This heading is a good example of a semantic heading because it allows screen-reader users to be able to easily look for a heading/section of content since it appropriately marked up.

Heading that is not semantic

This heading isn't semantically set up as a real heading so it causes screen-readers to not notice it as a heading. Looks like a heading isnt a heading.
