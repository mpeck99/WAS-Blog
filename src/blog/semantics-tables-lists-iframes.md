---
title: Importance of semantic HTML - Tables, Lists, Iframes and more!
date: 2022-03-31
intro: In this post I will go through some important things to keep in mind when building HTML tables, Lists, Iframes and more! 
tags: ['accessibility', 'HTML', 'examples']
---
## Tables
Tables are a create way to represent tabular data, but its important that you do not create fake tables (HTML structure that looks like a table but isnt semantically set up as a table). Tables should be marked up in a `<table>` element that is labelled with: 
- `aria-label` or
- `aria-labelledby` or
- `<caption>`

By having the table appropriate labelled it will allow screen readers to be able to pull up a list of tables on a page an allow the user to easily tell them apart. This is also very beneficial for when there are multiple tables on a page. A caption or label for a table needs to be a unique and meaningful that allows the user to identify the table and understand what its purpose or function is. 

### Table headers
Table headers must be designated with a `<th>`, it is also a good idea to scope all `<th>` with one of the following: 
- `scope="col"`
- `scope="row"`
- `scope="colgroup"`
- `scope="rowgroup"`

#### Basic table example
```
<table class="data">
  <caption>
    <strong>Personal Bests</strong>
  </caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">1 mile</th>
      <th scope="col">5 km</th>
      <th scope="col">10 km</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mary</th>
      <td>8:32</td>
      <td>28:04</td>
      <td>1:01:16</td>
    </tr>
    <tr>
      <th scope="row">Betsy</th>
      <td>7:43</td>
      <td>26:47</td>
      <td>55:38</td>
    </tr>
  </tbody>
</table>
```
### Table with group headers
```
<table>
  <caption>
    Table with colgroup
  </caption>
  <thead>
    <tr>
      <td rowspan="2">&nbsp;</td>
      <th colspan="3" scope="colgroup">Heading 1</th>
      <th colspan="3" scope="colgroup">Heading 2</th>
    </tr>
    <tr>
      <th scope="col">Data</th>
      <th scope="col">Data</th>
      <th scope="col">Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Heading 3</th>
      <th scope="col">Data</th>
    </tr>
    <tr>
      <th scope="row">Heading 4</th>
      <th scope="col">Data</th>
    </tr>
  </tbody>
</table>
```
### Complex tables
If a table has complex data you will need to use headers and ID's this will help associate the correct data with the correct header.
```
<table class="table table-complex k-table">
  <thead>
    <tr>
      <th role="columnheader" rowspan="3" id="h1">Header 1</th>
      <th colspan="3" role="columnheader" id="h2">Header 2</th>
    </tr>
    <tr>
      <th role="columnheader" id="s1">Subheader 1</th>
      <th role="columnheader" id="s2">Subheader 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="rowheader" id="row1" headers="h1">Row header 1</th>
      <td headers="row1 h2 s1">Data 1</td>
      <td headers="h2 s2 row1">Data 2</td>
    </tr>
    <tr>
      <th scope="rowheader" id="row2" headers="h1">Row header 2</th>
      <td headers="h2 s1 row2">Data 3</td>
      <td headers="h2 s2 row2">Data 4</td>
    </tr>
  </tbody>
</table>

```

<div class="callout">
  <p><strong>Note:</strong> Complex tables can still be problematic for screen readers even if the HTML and markup is perfect. Its best to try and simplify tables whenever possible.</p>
</div>

### No-No's of table creation
- Do not create nested or split tables
  Nested tables break the accessibility of data presentation as a whole and its impossible to associate data and headers appropriately 
- Do not use table for visual layout
  Tables shouldnt be used for visual layout of content, all layout should be accomplished with CSS. 
  *If you must use a table, make sure to use `role="presentation"` and not use `caption`, `summary`, `<th>`, `scope` or  `headers`*

## Lists
When creating a list you must make sure that they are constructed with the appropriate semantic mark up. 
- `ol` - when order doesnt matter
- `ul` - when the order does matter
- `dl` - when a term should be paired with a definition
  - `dt` - term name
  - `dd` - term definition
When a screen reader user comes across a list it will notify them that its a list and how many list items it contains. That way a user will understand what they are listening to and what they can expect. 

## Iframes
Iframes can be used when you are wanting to pull content from another webpage into your current page. Think of it as a window on your webpage that lets you view another page. Iframes can contain a variety of content such as: 
- Videos
- Custom Widgets
- JavaScript
- and more

Now when we are talking about accessibility all iframes *MUST* to have a non-empty `title` attribute that is: 
- Informative
- Unique
- Valid
- Meaningful 

If you have control over the iframes content (which is usually not the case) try and make sure that the heading hierarchy fits into your sites heading directory. This is something to think about and try to control because iframes can be accessed by screen readers just like the rest of the content on the page. 

<div class="callout">
  <p>If you have an iframe that doesnt convey information to your users make sure that it is hidden with: </p>
  <ul>
    <li><code aria-hidden="true">aria-hidden="true";</code></li>
    <li><code aria-hidden="true">display: none;</code></li>
    <li><code aria-hidden="true">visibility: hidden;</code></li>
  </ul>
</div>

## Other Semantic elements & validity/parsing
### `<em>` and `<strong>`
Other things to keep in mind is that if there is critical emphasis to be conveyed through visual styling you need to also make sure that is conveyed in text format as well because screen readers do not announce if something is emphasized via HTML elements. 

Ways you can make sure that things that convey critical info provide the word important before the text, or the important is hidden via css clip properties. You can also add an image with alt text to convey a warning or importance. 

### `<blockquote>` and `<q>`
`<blockquote>` should be used to designate long block level quotes, and should not be used for visual styling of non-quotation content. 
While you need to wrap quotes in `<q>` tags you also need to include quotation marks since some screen readers do not read the `<q>` element

### `<code aria-hidden="true">` and `<pre aria-hidden="true">`
When you are wanting to display code in your document you should use the `<code aria-hidden="true">` element and visually style it differently. While screen readers do not support the code 
element it does benefit sighted users and allow them to visualize technical terms and regular prose. 

`<pre aria-hidden="true">` should be used to wrap around large blocks of code. This allows the code to be preformatted exactly as it appears in the code, spacing and all. 

### `<del>`, `<ins>`, and `<mark>`
`<del>` will strike through text but it is not supported by screen readers. If there is critical text on the screen you must provide a text-based alternative method to inform the users that the text has been 'deleted'.

`<ins>` will display that text has been inserted into the page. Screen readers do not support this as well, so if there is critical text you must provide a text-based alternative to inform users that text has been 'inserted'.

`<mark>` will highlight text on your page. Screen readers do not support this as well, so if there is critical text you must provide a text-based alternative to inform users that text has been highlighted.

### Validity and parsing
Its always good practice to validate your HTML via some sort of validator. W3C has an HTML validator that can be found [here](https://validator.w3.org/). This will check your HTML to make sure that the HTML is valid and isn't missing any opening or closing tags or if there are any duplicate ID's. 

You will need to be sure that you provide names for all table and landmarks, and that markup is adhering to parent-child semantics, such as `<li>` inside of list elements. 

You will also need to be sure to avoid using deprecated markup such as: 
- `<u>`
- `<b>`
- `<marquee>` - this can cause blinking/flashing that can be an issue for those with seizure disorders
- `<blink>` - this can cause blinking/flashing that can be an issue for those with seizure disorders