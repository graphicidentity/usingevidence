---
title: Publications
layout: base.njk
permalink: "/publications/"
description: "Books, chapters, working papers, and articles by Fred Carden and collaborators."
---

<p class="lead">Selected publications. This page is data-driven: update <code>_data/publications.json</code> or <code>_data/publications.csv</code> to add or edit items.</p>

<div class="row row-cols-1 row-cols-md-2 g-3">
  {% for pub in publications %}
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h2 class="card-title h5">{{ pub.title }} <span class="text-body-secondary">({{ pub.year }})</span></h2>
        <p class="card-text">{{ pub.type }}{% if pub.publisher %} — {{ pub.publisher }}{% endif %}</p>
      </div>
      {% if pub.links and pub.links.length %}
      <div class="card-footer bg-transparent border-0">
        {% for l in pub.links %}
          <a class="btn btn-sm btn-outline-primary me-2" href="{{ l.url }}">{{ l.label }}</a>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
