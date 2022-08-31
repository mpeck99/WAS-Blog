---
title: Alternative image text examples
date: 2022-08-31
intro: Here is a page with some examples of images and text alternatives to showcase how a screen-reader will read/interpret them.
tags: ['alt-text', 'HTML']
---
<div class="example-wrapper">
	<div class="example">
		<h2 tabindex="0">Image with bad alternative text</h2>
		<img tabindex="0" src="/assets/images/mp-logo-angle-2-1.png" alt="logo" />
		<pre><code aria-hidden="true">&lt;img src="/assets/assets/images/mp-logo-angle-2-1.png" alt="logo" /&gt;</code></pre>
	</div>
	<div class="example">
		<h2 tabindex="0">Image with no alternative text</h2>
		<img tabindex="0" src="/assets/images/logo-with-a-long-title.png" alt="src=/assets/images/logo-with-a-long-title.png"/>
		<pre><code aria-hidden="true"> &lt;img src="/assets/assets/images/logo-with-a-long-title.png" /&gt; </code></pre>
	</div>
	<div class="example">
		<h2 tabindex="0">Image with appropriate alternative text</h2>
		<img tabindex="0" src="/assets/images/mp-logo-angle-2-1.png" alt="Morgan Peck" />
		<pre>
      <code aria-hidden="true"
        >&lt;img src="/assets/assets/images/mp-logo-angle-2-1.png" alt="Morgan Peck" /&gt;</code>
    </pre>
	</div>
	<div class="example">
		<h2 tabindex="0">Decorative image</h2>
		<img tabindex="0" src="/assets/images/bg-employ-blob.svg" alt="" aria-hidden="true"/>
		<pre><code aria-hidden="true">&lt;img src="/assets/assets/images/bg-employ-blob.svg" alt="" /&gt;</code></pre>
	</div>
	<div class="example">
		<h2 tabindex="0">Alternative text with the word Image</h2>
		<img tabindex="0" src="/assets/images/terry-oof.png" alt="Image of a Terry" />
		<pre><code aria-hidden="true">&lt;img src="/assets/assets/images/terry off.png" alt="Graphic of Terry" /&gt;</code></pre>
	</div>
</div>

## Screen-reader example
<div class="iframe-wrapper"><iframe src="https://www.youtube.com/embed/n-1e57g7I1o" title="Image alternative text examples with a screen-reader" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>