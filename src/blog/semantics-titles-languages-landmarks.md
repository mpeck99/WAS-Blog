---
title: Importance of semantic HTML - Titles, Languages, and Landmarks
date: 2022-03-30
intro: This week I have been going over the importance of semantic HTML. Some of the topics I will discuss in this blog post will be focused towards page titles, languages, and landmarks.
btn: Read more about title, languages & landmarks
tags: ['HTML']
---

This week I have been going over the importance of semantic HTML. Some of the topics I will discuss in this blog post will be focused towards page titles, languages, and landmarks.

## Titles

For you site to meet WCAG A conformance a webpage must have a title. An effective title is:

- Accurate
- Informative
- Concise
- Unique
- Similar to the top heading (`<h1>`)

Since titles are the first thing a screen reader user will hear or read it needs to be able to help the identify the purpose of the web page. Its best practice to make your title very similar if not matching to your top heading element (`<h1>`). Another thing to keep in mind that on page change you should update your title when the address changes.

### Home page title example

```
<title>Blog | Morgan Peck</title>
```

### Subpage title example

```
<title>Designing Accessible User Experiences - Blog | Morgan Peck</title>
```

## Language

Its also very important to ensure that you have a language set on the `<html>` because if you do not provide a language screen readers may be hard to understand if the user has defaulted to a different language then what the page is. To identify the language you must identify the language of the page using the valid two digit language code. Mozilla shares [this link](https://r12a.github.io/app-subtags/) that has all of the language codes that are valid to use.

If your page also has any specific parts that are a different language (inline languages) you must provide a language tag on the element surrounding that text. This language tag can be applied to both inline & block elements.

### Page language example

```
<html lang="en">
```

### Inline language example

```
<p lang="es">Aquí hay una pequeña oración simple para mostrar un ejemplo de lenguaje de línea.</p>
```

## Landmarks

Landmarks are important HTML or ARIA-Rols because they allow screen readers to navigate a page by jumping to specific areas. Landmarks designate sections of the overall page design and layout.

Some of the most useful landmarks:

- `<header`> - Header landmark can also be a div with the ARIA `role="banner"`
- `<nav>` - Navigation landmark can also be a div with the ARIA `role="navigation"`
- `<main>` - Main content landmark can also be a div with the ARIA `role="main"`
- `<footer>` - Footer landmark can also be a div with the ARIA `role="contentinfo"`

### Best practices

- All text should be contained in a landmark
- Use `aria-label` or `aria-labelledby` to distinguish multiple instances of the same landmark
  ```
  <nav aria-label="Main Menu">
  <ul>
      <li><a href="/">Home</a></li>
      <li><a href="posts">posts</a></li>
  </ul>
  </nav>
  <main>
  <div>[...other content...]</div>
      <nav aria-label="Posts list">
      <ul>
          <li><a href="#0"> 1</a></li>
          <li><a href="#0"> 2</a></li>
          <li><a href="#0"> 3</a></li>
          <li><a href="#0"> 4</a></li>
      </ul>
      </nav>
  </div>
  <div>[...other content...]</div>
  </main>
  <footer>
  <nav aria-label="Corporate and legal info">
      <ul>
          <li><a href="#0">About us</a></li>
          <li><a href="#0">Copyright notice</a></li>
          <li><a href="#0">Terms of use</a></li>
          <li><a href="#0">Contact us</a></li>
      </ul>
  </nav>
  </section>
  ```
- Keep the total number of landmarks to a mininum, the more landmarks there are make it more difficult for users to easily sort through your content
- Only use the following landmarks once:
  - `role="contentinfo"` or `<footer>`
  - `role="banner"` or `<header>`
  - `role="main"` or `<main>`
- Landmarks should be backward compatible. Meaning if you plan on using old browsers that do not understand HTML5 elements you will need to take extra steps to ensure the render correctly (both visually and in the Document Object Model (DOM))

## Summary

So in the end its important to keep in mind that for your page to be accessible it must contain a `<title>` element in the head that is accurate, concise, informative and unique to the page it is located on. You also need to remember to include a `lang` tag on the HTML element to help screen readers understand how the page should be pronounced if the users has their default changed to a different language than the content. Finally including some useful landmarks with aria-labels or aria-labelledby can help section out your content making it easier for your user to be able to skip through and understand your content. Try not to provide to many landmarks because this can cause your page to become cluttered and more difficult for screen reader users rather than helping them.
