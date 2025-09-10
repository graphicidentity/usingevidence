---
title: Blog
layout: base.njk
permalink: "/blog/"
description: "Blog posts and external articles curated by Using Evidence."
---

<p class="lead">Latest posts and curated external articles. Add Markdown files to <code>posts/</code> to publish.</p>

<div class="row row-cols-1 row-cols-md-2 g-3">
  {% for post in collections.posts %}
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h2 class="card-title h5"><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
        <p class="text-body-secondary small mb-2">{{ post.date | formatDateISO }}</p>
        {% if post.data.external_url %}
          <p class="mb-0">This is a curated link. Read on the external site.</p>
        {% else %}
          <div class="mb-0">{{ post.templateContent | safe }}</div>
        {% endif %}
      </div>
      <div class="card-footer bg-transparent border-0">
        <a class="btn btn-sm btn-outline-primary" href="{{ post.url }}">Open</a>
        {% if post.data.external_url %}
          <a class="btn btn-sm btn-primary" href="{{ post.data.external_url }}">Read externally</a>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
