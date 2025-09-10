---
title: Using Evidence — Home
layout: base.njk
permalink: "/"
description: "Using Evidence is a research and evaluation consultancy focused on evaluation methods, systems, and the use of evidence."
---

<div class="row g-4">
  <div class="col-lg-8">
    <div class="lead">Making evaluation <strong>useful</strong> and <strong>useable</strong>.</div>
    <p>Using Evidence is a research and evaluation consultancy focused on <strong>development and research evaluation</strong>, with a strong emphasis on helping organizations <em>use</em> findings — not just generate them.</p>

    <h2 class="h3 mt-4">What we do</h2>
    <div class="list-group">
      <a class="list-group-item list-group-item-action" href="{{ '/about/#current-work' | url }}">
        <div class="d-flex w-100 justify-content-between">
          <h3 class="h5 mb-1">Evaluation methods & research</h3>
          <span class="badge text-bg-secondary">Approaches</span>
        </div>
        <p class="mb-1">Work on approaches that account for <strong>complexity</strong> and systems (e.g., Outcome Mapping and Organizational Assessment).</p>
      </a>
      <div class="list-group-item">
        <h3 class="h5 mb-1">Quality assurance</h3>
        <p class="mb-1">Independent design and report reviews for organizations such as Universalia, IUCN, and the Global Education Fund.</p>
      </div>
      <div class="list-group-item">
        <h3 class="h5 mb-1">Enhancing the use of evidence</h3>
        <p class="mb-1">Work on how research informs policy, including <em>Knowledge to Policy</em> and the Knowledge Sector Initiative (Indonesia).</p>
      </div>
      <div class="list-group-item">
        <h3 class="h5 mb-1">Evaluation systems & frameworks</h3>
        <p class="mb-1">Organization‑wide evaluation and learning systems (e.g., MasterCard Foundation, Rideau Hall Foundation, ICM).</p>
      </div>
      <div class="list-group-item">
        <h3 class="h5 mb-1">Evaluation practice</h3>
        <p class="mb-1">Contributions with UN Women (regional architecture), Global Affairs Canada country programs, and the Global Challenges Research Fund.</p>
      </div>
      <div class="list-group-item">
        <h3 class="h5 mb-1">Evaluation capacity</h3>
        <p class="mb-0">UNESCO MOOC modules, Outcome Mapping workshops, Ontario Brain Institute.</p>
      </div>
    </div>

    <h2 class="h3 mt-5">Featured publications</h2>
    <div class="row row-cols-1 row-cols-md-2 g-3">
      {% for pub in publications | slice(0, 2) %}
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title fs-5">{{ pub.title }} ({{ pub.year }})</h3>
            <p class="card-text">{{ pub.type }} — {{ pub.publisher }}</p>
          </div>
          <div class="card-footer bg-transparent border-0">
            {% for l in pub.links %}
              <a class="btn btn-sm btn-outline-primary me-2" href="{{ l.url }}">{{ l.label }}</a>
            {% endfor %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>

  <aside class="col-lg-4">
    <div class="card">
      <div class="card-header"><i class="bi bi-person-badge" aria-hidden="true"></i> About Fred</div>
      <div class="card-body">
        <p class="card-text">Fred Carden is an evaluation specialist with <strong>30+ years</strong> of experience across methods, systems, and the <em>use of evidence</em> in public policy.</p>
        <div class="d-grid gap-2">
          <a class="btn btn-primary" href="{{ '/about/' | url }}">Learn more</a>
          <a class="btn btn-outline-secondary" href="https://usingevidence.com/wp-content/uploads/2019/01/CARDEN_CV_2019.pdf">Résumé (PDF)</a>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <h2 class="h5">Latest posts</h2>
      <ol class="list-group list-group-numbered">
        {% for post in collections.posts | slice(0,3) %}
          <li class="list-group-item">
            <a href="{{ post.url }}">{{ post.data.title }}</a>
            <div class="text-body-secondary small">{{ post.date | formatDateISO }}</div>
          </li>
        {% endfor %}
      </ol>
    </div>
  </aside>
</div>
