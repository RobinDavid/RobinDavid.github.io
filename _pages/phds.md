---
layout: page
permalink: /phds/
title: PhD Thesis
description: PhD thesis as advisor and jury.
nav: false
nav_order: 1
---

## Current

<div class="publications">

{% bibliography --file phds.bib --query @*[year>=2025]%}

</div>

## Past

<div class="publications">

{% bibliography --file phds.bib --query @*[year<2025]%}

</div>
