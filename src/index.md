---
title: Welcome to my blog!
layout: home.njk
description: Here is a simple blog built with 11ty to showcase my journey in obtaining the Web Accessibility Specialist certification from IAAP. Check out my blog posts below to follow along and see what I am up to!
--- 

<div class="article-wrapper">
{% for post in collections.posts %}
<article aria-labelledby="{{post.fileSlug}}">
    <header>
      <h2 id="{{post.fileSlug}}"><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
  <time> {{ post.date | postDate }}</time>
    </header>
    <div class="content"></content>
</article> 
{% endfor %}
</div>