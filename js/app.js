(function () {
  const tabBar = document.getElementById("tab-bar");
  const main = document.getElementById("main");

  // --- Render Tabs ---
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn";
    btn.dataset.target = cat.id;
    btn.innerHTML = `<span class="tab-icon">${cat.icon}</span><span class="tab-label">${cat.label}</span>`;
    tabBar.appendChild(btn);
  });

  // --- Render Sections + Cards ---
  CATEGORIES.forEach((cat) => {
    const section = document.createElement("section");
    section.className = "category-section";
    section.id = cat.id;

    const heading = document.createElement("h2");
    heading.className = "section-heading";
    heading.innerHTML = `<span class="section-icon">${cat.icon}</span>${cat.label}`;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "card-grid";

    cat.places.forEach((place) => {
      const card = document.createElement("a");
      card.className = "card";
      card.href = place.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";

      const priceTag = place.price ? `<span class="card-price">${place.price}</span>` : "";

      card.innerHTML = `
        <div class="card-img-wrap">
          <img class="card-img" src="${place.photo}" alt="${place.name}" loading="lazy">
          ${priceTag}
        </div>
        <div class="card-body">
          <h3 class="card-name">${place.name}</h3>
          <p class="card-desc">${place.description}</p>
        </div>
      `;

      grid.appendChild(card);
    });

    section.appendChild(grid);

    // --- "Show More" button if grid has more cards than visible rows ---
    // Collapse by default; getComputedStyle will tell us columns at render time
    grid.classList.add("collapsed");

    const btn = document.createElement("button");
    btn.className = "show-more-btn";
    btn.innerHTML = 'Show More <i class="fa-solid fa-chevron-down"></i>';
    btn.addEventListener("click", () => {
      const expanded = grid.classList.toggle("collapsed");
      // expanded is false when we just removed "collapsed"
      if (grid.classList.contains("collapsed")) {
        btn.innerHTML = 'Show More <i class="fa-solid fa-chevron-down"></i>';
      } else {
        btn.innerHTML = 'Show Less <i class="fa-solid fa-chevron-up"></i>';
      }
    });

    const btnWrap = document.createElement("div");
    btnWrap.className = "show-more-wrap";
    btnWrap.appendChild(btn);
    section.appendChild(btnWrap);

    main.appendChild(section);
  });

  // --- Scroll Spy (Intersection Observer) ---
  const tabs = tabBar.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".category-section");
  let isClickScrolling = false;

  function scrollTabIntoView(btn) {
    // Horizontal-only scroll — won't interfere with page vertical scroll
    const barRect = tabBar.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const offset = btnRect.left - barRect.left - (barRect.width / 2) + (btnRect.width / 2);
    tabBar.scrollBy({ left: offset, behavior: "smooth" });
  }

  function setActiveTab(id) {
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.target === id));
    if (!isClickScrolling) {
      const active = tabBar.querySelector(".tab-btn.active");
      if (active) scrollTabIntoView(active);
    }
  }

  // --- Tab Click → Smooth Scroll ---
  tabBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    // Immediately highlight the clicked tab
    setActiveTab(btn.dataset.target);
    isClickScrolling = true;

    const target = document.getElementById(btn.dataset.target);
    if (target) target.scrollIntoView({ behavior: "smooth" });

    // Re-enable scroll spy after the scroll finishes
    // Listen for scrollend if supported, otherwise use a timeout
    if ("onscrollend" in window) {
      window.addEventListener("scrollend", () => { isClickScrolling = false; }, { once: true });
    } else {
      setTimeout(() => { isClickScrolling = false; }, 800);
    }
  });

  // Track which sections are currently visible
  const visibleSections = new Map();

  const observer = new IntersectionObserver(
    (entries) => {
      if (isClickScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.target);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      // Pick the topmost visible section
      let topId = null;
      let topY = Infinity;
      visibleSections.forEach((el, id) => {
        const y = el.getBoundingClientRect().top;
        if (y < topY) { topY = y; topId = id; }
      });
      if (topId) setActiveTab(topId);
    },
    {
      rootMargin: "-80px 0px -40% 0px",
      threshold: 0
    }
  );

  sections.forEach((s) => observer.observe(s));
})();
