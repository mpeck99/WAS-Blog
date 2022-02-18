---
layout: base.njk
title: Posts
pagination:
    data: collections.posts
    alias: posts
    reverse: true
    size: 10
---
<h1>Archive</h1>
<div class="article-wrapper">
{% for post in posts%}
<article aria-labelledby="{{post.fileSlug}}">
    <header class="article-header">
      <h2 id="{{post.fileSlug}}">{{ post.data.title }}</h2>
    <time> {{ post.date | postDate }}</time>
    </header>
    <div class="content">
      <p>{{ post.data.intro }}</p>
      <a class="btn btn-link" title="Read about {{post.data.title}}" href="{{ post.url }}" aria-label="Read more about {{post.data.title}}">Read more</a>
    </div>
</article> 
{% endfor %}
</div>