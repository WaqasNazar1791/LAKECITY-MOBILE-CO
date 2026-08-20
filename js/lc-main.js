/* ==========================================================================
   LAKE CITY KUWAIT — OFFICIAL CORPORATE WEBSITE JAVASCRIPT (ENHANCED)
   WordPress HTML Widget Compatible & Modular (Scoped: lc-*)
   Includes Luxury Preloader, Counter Animations, SPA Routing & Document Preview
   ========================================================================== */

(function() {
  'use strict';

  // Document Ready Initialization
  document.addEventListener('DOMContentLoaded', function() {
    initPreloader();
    initHeaderScroll();
    initMobileMenu();
    initRouting();
    initDocumentModal();
    initFaqAccordion();
    initContactForm();
    initMetricCounters();
  });

  /* ------------------------------------------------------------------------
     01. LUXURY PRELOADER LOGIC
     ------------------------------------------------------------------------ */
  function initPreloader() {
    const preloader = document.getElementById('lc-preloader');
    if (!preloader) return;

    window.addEventListener('load', function() {
      setTimeout(function() {
        preloader.classList.add('lc-loaded');
      }, 700);
    });

    // Fallback safety timeout if window load event fired early
    setTimeout(function() {
      if (preloader && !preloader.classList.contains('lc-loaded')) {
        preloader.classList.add('lc-loaded');
      }
    }, 2500);
  }

  /* ------------------------------------------------------------------------
     02. STICKY HEADER SHRINK ON SCROLL
     ------------------------------------------------------------------------ */
  function initHeaderScroll() {
    const header = document.querySelector('.lc-header');
    if (!header) return;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 40) {
        header.classList.add('lc-scrolled');
      } else {
        header.classList.remove('lc-scrolled');
      }
    });
  }

  /* ------------------------------------------------------------------------
     03. MOBILE DRAWER MENU
     ------------------------------------------------------------------------ */
  function initMobileMenu() {
    const toggleBtn = document.querySelector('.lc-mobile-toggle');
    const mobileMenu = document.querySelector('.lc-mobile-menu');

    if (!toggleBtn || !mobileMenu) return;

    toggleBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('lc-open');
      const isOpen = mobileMenu.classList.contains('lc-open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking link
    const mobileLinks = mobileMenu.querySelectorAll('.lc-nav-link, .lc-btn');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('lc-open');
      });
    });
  }

  /* ------------------------------------------------------------------------
     04. CLIENT SPA ROUTING & VIEW SWITCHING
     Views: home, about, brands, authorization, b2b, contact
     ------------------------------------------------------------------------ */
  function initRouting() {
    const views = document.querySelectorAll('.lc-view');
    const navLinks = document.querySelectorAll('[data-lc-target]');

    function switchView(targetId) {
      if (!targetId) targetId = 'home';
      
      let viewFound = false;
      views.forEach(function(view) {
        if (view.id === 'lc-view-' + targetId) {
          view.classList.add('lc-active-view');
          viewFound = true;
        } else {
          view.classList.remove('lc-active-view');
        }
      });

      if (!viewFound) {
        const homeView = document.getElementById('lc-view-home');
        if (homeView) homeView.classList.add('lc-active-view');
        targetId = 'home';
      }

      // Update Active Navigation Highlight
      navLinks.forEach(function(link) {
        const linkTarget = link.getAttribute('data-lc-target');
        if (linkTarget === targetId) {
          link.classList.add('lc-active');
        } else {
          link.classList.remove('lc-active');
        }
      });

      // Scroll smoothly to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Attach Click Events to Routing Triggers
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const target = this.getAttribute('data-lc-target');
        if (target) {
          e.preventDefault();
          window.location.hash = target;
          switchView(target);
        }
      });
    });

    // Handle Initial Load & Browser Hash Navigation
    function handleHash() {
      const hash = window.location.hash.replace('#', '');
      switchView(hash || 'home');
    }

    window.addEventListener('hashchange', handleHash);
    handleHash();
  }

  /* ------------------------------------------------------------------------
     05. DOCUMENT MODAL VIEWER WITH EMBEDDED PDF PREVIEW
     ------------------------------------------------------------------------ */
  function initDocumentModal() {
    const modal = document.getElementById('lc-doc-modal');
    const closeBtn = document.querySelector('.lc-modal-close');
    const triggers = document.querySelectorAll('[data-lc-doc-title]');

    if (!modal) return;

    triggers.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const title = this.getAttribute('data-lc-doc-title') || 'Official Document';
        const type = this.getAttribute('data-lc-doc-type') || 'Authorization Verification';
        const pdfPath = this.getAttribute('data-lc-doc-pdf') || '';
        const refNo = this.getAttribute('data-lc-doc-ref') || 'OFFICIAL RECORD';
        const issuer = this.getAttribute('data-lc-doc-issuer') || 'Brand Manufacturer';
        const validity = this.getAttribute('data-lc-doc-validity') || 'Active';
        const entity = this.getAttribute('data-lc-doc-entity') || 'Lakecity Mobile CO.';
        const contact = this.getAttribute('data-lc-doc-contact') || 'Asif (+965 51005252)';
        const address = this.getAttribute('data-lc-doc-address') || 'Shop 19 Basement, Adwaa Complex, Hawally, Kuwait';

        const modalTitleElem = modal.querySelector('.lc-modal-title');
        const modalBodyElem = modal.querySelector('.lc-modal-body');

        if (modalTitleElem) modalTitleElem.textContent = title;
        if (modalBodyElem) {
          modalBodyElem.innerHTML = `
            <div style="padding: 10px 0;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
                <span class="lc-badge">${type}</span>
                <span style="font-family: monospace; font-size: 0.85rem; color: var(--lc-gold-dark); background: rgba(185,145,63,0.1); padding: 4px 12px; border-radius: 2px;">REF: ${refNo}</span>
              </div>

              <h3 style="font-family: var(--lc-font-heading); color: var(--lc-navy); margin-bottom: 12px; font-size: 1.4rem;">${title}</h3>
              
              <div style="background-color: var(--lc-offwhite); border: 1px solid var(--lc-border); padding: 20px; border-radius: 4px; margin-bottom: 24px; font-size: 0.9rem; color: var(--lc-text);">
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 12px;">
                  <div><strong>Authorized Entity:</strong> ${entity}</div>
                  <div><strong>Issuing Authority:</strong> ${issuer}</div>
                  <div><strong>Period of Validity:</strong> ${validity}</div>
                  <div><strong>Contact Person:</strong> ${contact}</div>
                </div>
                <div><strong>Registered Address:</strong> ${address}</div>
              </div>

              ${pdfPath ? `
              <div style="border: 1px solid var(--lc-border-subtle); border-radius: 4px; overflow: hidden; margin-bottom: 24px; background: #000;">
                <object data="${pdfPath}" type="application/pdf" width="100%" height="450px">
                  <iframe src="${pdfPath}" width="100%" height="450px" style="border:none;">
                    This browser does not support inline PDFs. Please download the document below.
                  </iframe>
                </object>
              </div>
              ` : ''}

              <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                ${pdfPath ? `
                <a href="${pdfPath}" download class="lc-btn lc-btn-primary" target="_blank">
                  Download Official PDF Document
                </a>
                ` : ''}
                <button class="lc-btn lc-btn-outline" onclick="document.getElementById('lc-doc-modal').classList.remove('lc-active')">
                  Close Verification Window
                </button>
              </div>
            </div>
          `;
        }

        modal.classList.add('lc-active');
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        modal.classList.remove('lc-active');
      });
    }

    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('lc-active');
      }
    });
  }

  /* ------------------------------------------------------------------------
     06. FAQ ACCORDION TOGGLE
     ------------------------------------------------------------------------ */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.lc-faq-item');

    faqItems.forEach(function(item) {
      const question = item.querySelector('.lc-faq-question');
      if (!question) return;

      question.addEventListener('click', function() {
        const isActive = item.classList.contains('lc-active');

        // Close all other accordion items
        faqItems.forEach(function(other) {
          other.classList.remove('lc-active');
        });

        if (!isActive) {
          item.classList.add('lc-active');
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     07. B2B CONTACT FORM HANDLER
     ------------------------------------------------------------------------ */
  function initContactForm() {
    const forms = document.querySelectorAll('.lc-contact-form-element');

    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.textContent : 'Send Inquiry';
        
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Transmitting B2B Inquiry...';
        }

        setTimeout(function() {
          form.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Inquiry Sent Successfully!';
            submitBtn.style.backgroundColor = '#10B981';
            
            setTimeout(function() {
              submitBtn.textContent = originalText;
              submitBtn.style.backgroundColor = '';
            }, 4000);
          }
        }, 1000);
      });
    });
  }

  /* ------------------------------------------------------------------------
     08. SCROLL METRIC COUNTERS
     ------------------------------------------------------------------------ */
  function initMetricCounters() {
    const metrics = document.querySelectorAll('[data-lc-counter]');
    if (!metrics.length) return;

    let animated = false;

    function checkScroll() {
      if (animated) return;
      const triggerPos = window.innerHeight * 0.85;

      metrics.forEach(function(counter) {
        const rect = counter.getBoundingClientRect();
        if (rect.top < triggerPos) {
          const target = parseInt(counter.getAttribute('data-lc-counter'), 10);
          if (isNaN(target)) return;

          let current = 0;
          const duration = 1500;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, stepTime);

          animated = true;
        }
      });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
  }

})();
