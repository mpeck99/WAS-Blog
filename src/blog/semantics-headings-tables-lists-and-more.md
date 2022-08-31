---
title: Semantic HTML  - Headings, Tables, Lists, and more.
date: 2022-08-28
intro: In a past post I went into the hierarchial levels of headings but there are some more best practices and examples I wish to share. Also tables, lists, paragraphs all need to be semantically marked up to ensure that our users can access the information on our site as easily as possible.
tags: ['HTML', 'semantics', 'examples']
---

It is important to include things in semantic HTML at all times. Well most times (sometimes ARIA can be used but its not recommended unless you know what your doing).

## So what do I mean by including things into semantic HTML?

When I say semantic html its important to ensure our content is appropriately marked up and that our contents layout/structure/relationships are not referenced by visuals only.

## Headings

You need to ensure all things that should be headings are actual headings (h1, h2, h3, h4, h5, h6) and not just styled to look like headings. Also its best to ensure that you write headings in hierarchial order. This means h1, then after that would be an h2, not an h6.

### Heading examples

<div class="example" aria-labelledby="heading-good-example" tabindex="0">
  <h2 id="heading-good-example">Good example of semantic headings</h2>
  <pre aria-hidden="true">
    <code aria-hidden="true">&lt;h2 id="heading-good-example">Good example of semantic headings&lt;/h2&gt;</code>
  </pre>
  <p>This heading is a good example of a semantic heading because it allows screen-reader users to be able to easily look for a heading/section of content since it appropriately marked up.</p>
</div>
<div class="example" aria-labelledby="heading-bad-example" tabindex="0">
  <p id="heading-bad-example">Heading that is not semantic</p>
  <pre aria-hidden="true"><code aria-hidden="true">&lt;p id="heading-bad-example">Heading that is not semantic&lt;/p&gt;</code></pre>
  <p>Looks like a heading isn't a heading. This heading isn't semantically set up as a real heading so it causes screen-readers to not notice it as an actual heading.</p>
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

<div class="example" aria-labelledby="list-good-example" tabindex="0">
  <h2 id="list-good-example">Good semantic lists</h2>
    <h3>Ordered list</h3>
    <div class="row">
      <ol>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ol>
    <pre aria-hidden="true"><code aria-hidden="true">&lt;ol>
  &lt;li>List item 1&lt;/li>
  &lt;li>List item 2&lt;/li>
  &lt;li>List item 3&lt;/li>
&lt;/ol></code></pre>
    </div>
    <h3>Unordered list</h3>
    <div class="row"><ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <pre aria-hidden="true"><code aria-hidden="true">&lt;ul>
  &lt;li>List item 1&lt;/li>
  &lt;li>List item 2&lt;/li>
  &lt;li>List item 3&lt;/li>
&lt;/ul></code></pre></div>
    <h3>Definition list</h3>
    <div class="row">
    <dl>
      <dt>Term 1</dt>
        <dd>
          Some cool term definition
        </dd>
    </dl>
    <pre aria-hidden="true">
      <code aria-hidden="true">&lt;dl>
      &lt;dt>Term 1&lt;/dt>
        &lt;dd>
          Some cool term definition
        &lt;/dd>
    &lt;/dl></code>
    </pre>
    </div>
</div>
<div class="example" aria-labelledby="list-bad-example" tabindex="0">
  <h2 id="list-bad-example">Bad semantic list</h2>
  <div class="row">
    <p>1. Bad list item<br>2. Bad list item<br>3. Bad list item</p>
    <pre aria-hidden="true"><code aria-hidden="true">&lt;p>1. Bad list item&lt;br&gt;<br>2. Bad list item&lt;br&gt;<br>3. Bad list item&lt;/p&gt;</code></pre>
  </div>
</div>

## Tables

Tables are a beast in their own thing. They never truly will be 100% accessible even if we do everything right, but this still does'nt mean we should do things wrong. The goal is to make them as accessible as possible by ensuring they have the following:

- Table headers `<th>`
- Rows `<tr>` & Columns
- Data-sets that appropriately link the data to the correct headers
- Title - should have an `aria-labelled` to linking to a visible heading above the table. If there is no visible heading above the table then should have an `aria-label` or a caption.

<div class="example" aria-labelledby="basic-table">
  <h2 id="basic-table">Basic table example</h2>
  <table class="table" tabindex="0" aria-labelledby="basic-table">
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
        <td>Mary</td>
        <td>8:32</td>
        <td>28:04</td>
        <td>1:01:16</td>
      </tr>
      <tr>
        <td>Betsy</td>
        <td>7:43</td>
        <td>26:47</td>
        <td>55:38</td>
      </tr>
    </tbody>
  </table>
  <pre aria-hidden="true">
    <code aria-hidden="true">
    &lt;table class="table" tabindex="0" aria-labelledby="basic-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;Name&lt;/th&gt;
      &lt;th scope="col"&gt;1 mile&lt;/th&gt;
      &lt;th scope="col"&gt;5 km&lt;/th&gt;
      &lt;th scope="col"&gt;10 km&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Mary&lt;/td&gt;
      &lt;td&gt;8:32&lt;/td&gt;
      &lt;td&gt;28:04&lt;/td&gt;
      &lt;td&gt;1:01:16&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Betsy&lt;/td&gt;
      &lt;td&gt;7:43&lt;/td&gt;
      &lt;td&gt;26:47&lt;/td&gt;
      &lt;td&gt;55:38&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
    </code>
  </pre>
</div>

<div class="example" aria-labelledby="group-headers">
  <h2 id="group-headers">Table with group headers example</h2>
  <table  class="table table-colgroup" tabindex="0" aria-labelledby="group-headers">
  <thead>
    <tr>
      <td rowspan="2">&nbsp;</td>
      <th colspan="2" scope="colgroup" class="theader">Heading 1</th>
      <th colspan="2" scope="colgroup" class="theader">Heading 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Heading 3</th>
      <td colspan="2">Data</td>
      <td colspan="2">Data</td>
    </tr>
    <tr>
      <th scope="row">Heading 4</th>
      <td colspan="2">Data</td>
      <td colspan="2">Data</td>
    </tr>
  </tbody>
</table>
<pre aria-hidden="true">
<code aria-hidden="true">
&lt;table  class="table table-colgroup" tabindex="0" aria-labelledby="group-headers"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;td rowspan="2"&gt;&nbsp;&lt;/td&gt;
      &lt;th colspan="2" scope="colgroup" class="theader"&gt;Heading 1&lt;/th&gt;
      &lt;th colspan="2" scope="colgroup" class="theader"&gt;Heading 2&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Heading 3&lt;/th&gt;
      &lt;td colspan="2"&gt;Data&lt;/td&gt;
      &lt;td colspan="2"&gt;Data&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Heading 4&lt;/th&gt;
      &lt;td colspan="2"&gt;Data&lt;/td&gt;
      &lt;td colspan="2"&gt;Data&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</code>
<pre aria-hidden="true">
</div>

<div class="example" aria-labelledby="complex">
  <h2 id="complex">Complex table example</h2>
  <p>If a table has complex data you will need to use headers and ID's this will help associate the correct data with the correct header.</p>
  <table class="table-complex" tabindex="0" aria-labelledby="complex">
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

  <pre aria-hidden="true">
    <code aria-hidden="true">
&lt;table class="table-complex" tabindex="0" aria-labelledby="complex"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th role="columnheader" rowspan="3" id="h1"&gt;Header 1&lt;/th&gt;
      &lt;th colspan="3" role="columnheader" id="h2"&gt;Header 2&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th role="columnheader" id="s1"&gt;Subheader 1&lt;/th&gt;
      &lt;th role="columnheader" id="s2"&gt;Subheader 2&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope="rowheader" id="row1" headers="h1"&gt;Row header 1&lt;/th&gt;
      &lt;td headers="row1 h2 s1"&gt;Data 1&lt;/td&gt;
      &lt;td headers="h2 s2 row1"&gt;Data 2&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="rowheader" id="row2" headers="h1"&gt;Row header 2&lt;/th&gt;
      &lt;td headers="h2 s1 row2"&gt;Data 3&lt;/td&gt;
      &lt;td headers="h2 s2 row2"&gt;Data 4&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
    </code>
  </pre>
</div>


## Other content

Its important that we ensure that all our text is in the correct HTMl. If we have any paragraph text we need to ensure that it is wrapped in `<p>` tags to ensure screen-readers are able to access the content when a user tabs into them. If they are'nt properly marked up then our screen-reader users will have no way to access our content, and thats not very cool

### Emphasize / Special text

If there is any text that should be visually emphasized be sure to use HTMl mark up to do so (`<em>` & `<strong>`)

<div class="example" aria-labelledby="paragraph-example" tabindex="0">
   <h2 id="paragraph-example">Paragraph examples</h2>
  <p tabindex="0">This paragraph is inside of the correct HTML</p>
  <div tabindex="0">This paragraph is not.</div> 
</div>

