---
title: Welcome to my blog!
layout: home.njk
description: Here is a simple blog built with 11ty to showcase my journey in obtaining the Web Accessibility Specialist certification from IAAP. Check out my blog posts below to follow along and see what I am up to!
--- 

<div class="article-wrapper">
{% for post in collections.posts reversed limit:5 %}
<article aria-labelledby="{{post.fileSlug}}">
    <header class="article-header">
      <h2 id="{{post.fileSlug}}">{{ post.data.title }}</h2>
    <time> {{ post.date | postDate }}</time>
    </header>
    <div class="content">
      <p>{{ post.data.intro }}</p>
      <a class="btn btn-link" href="{{ post.url }}" aria-label="Read more about {{post.data.title}}">Read more</a>
    </div>
</article> 
{% endfor %}
</div>