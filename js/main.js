(function(){
  const burger = document.querySelector('[data-burger]');
  const mobile = document.querySelector('[data-mobile]');
  if(burger && mobile){
    burger.addEventListener('click', () => {
      const opened = mobile.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', opened ? 'true' : 'false');
      mobile.style.display = opened ? 'block' : 'none';
    });
    // start hidden
    mobile.style.display = 'none';
  }

  // About tabs (visual only)
  const tabs = document.querySelectorAll('[data-tab]');
  const aboutTitle = document.querySelector('[data-about-title]');
  const aboutText = document.querySelector('[data-about-text]');
  const map = {
    consistent: {
      title: 'We turn the idea of legal services',
      text: 'Consolidating many years of experience and practice, the company’s lawyers accompany complex projects and achieve a number of important decisions for the industry.'
    },
    customer: {
      title: 'Customer oriented approach',
      text: 'We focus on the client’s goals, build transparent processes, and communicate in a clear way at every step.'
    },
    innovative: {
      title: 'Innovative solutions',
      text: 'We apply modern tools and flexible formats so that legal support works as a business service.'
    },
    business: {
      title: 'Business oriented mindset',
      text: 'We think in terms of risks, value and strategy to protect and develop your business.'
    }
  };

  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('is-active'));
    t.classList.add('is-active');
    const key = t.getAttribute('data-tab');
    if(map[key] && aboutTitle && aboutText){
      aboutTitle.textContent = map[key].title;
      aboutText.textContent = map[key].text;
    }
  }));
})();
