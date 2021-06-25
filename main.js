// зафиксировать Navbar по скроллу
window.addEventListener('scroll', () => {
  let navbar = document.querySelector('.navbar')

  if (window.scrollY > 0) {
    navbar.classList.remove('lg:static')
    navbar.classList.add('fixed')
    navbar.classList.add('navfixed')
  } else {
    if (window.innerWidth >= 1024) navbar.classList.remove('fixed')
    navbar.classList.remove('navfixed')
    navbar.classList.add('lg:static')
  }
})




const links = [
  
    {
      name: 'Group',
      url: '#',
      title: {
          name: 'Who we are',
          url: '#'
      },
      lists: [
        {
          list_1: {       
              title: 'About Emi',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Our purpose',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Strategy & Model',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Quality & Safety Standards',
                  url: '#'
                  }
              },
              { 
                  item_4: {
                  title: 'Our performance',
                  url: '#'
                  }
              }              
              ]
          }
        },
        {
          list_2: {       
              title: 'Governance & Ethics',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Board of directors',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Executive Committee',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Our ethical principles',
                  url: '#'
                  }
              }             
              ]
          }
        },
        {
          list_3: {       
              title: 'Culture & Heritage',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Life at Emi',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Values & Mindset',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Emi History',
                  url: '#'
                  }
              }             
              ]
          }
        },
        {
          list_4: {       
            title: 'News & Documentation',
            url: '#',     
            items: [
              {
                item_1: {
                title: 'News',
                url: '#'
                }
              },
              {  
                item_2: {
                title: 'Publications',
                url: '#'
                }
              },
              {
                item_3: {
                title: 'Media Library',
                url: '#'
                }
              },
              { 
                item_4: {
                title: 'Press Releases',
                url: '#'
                }
              }              
            ]
          }
        }
      ]
    },
  
    {
      name: 'Commitments',
      url: '#',
      title: {
          name: 'Our Commitments & Responsibilities',
          url: '#'
      },
      lists: [
        {
          list_1: {       
            title: 'For the Planet',
            url: '#',     
            items: [
              {
                item_1: {
                title: 'Our purpose',
                url: '#'
                }
              },
              {  
                item_2: {
                title: 'Strategy & Model',
                url: '#'
                }
              },
              {
                item_3: {
                title: 'Quality & Safety Standards',
                url: '#'
                }
              },
              { 
                item_4: {
                title: 'Our performance',
                url: '#'
                }
              }              
            ]
          }
        },
        {
          list_2: {       
              title: 'Governance & Ethics',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Board of directors',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Executive Committee',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Our ethical principles',
                  url: '#'
                  }
              }             
              ]
          }
        },
        {
          list_3: {       
              title: 'Culture & Heritage',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Life at Emi',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Values & Mindset',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Emi History',
                  url: '#'
                  }
              }             
              ]
          }
        },
        {
          list_4: {       
              title: 'News & Documentation',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'News',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Publications',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Media Library',
                  url: '#'
                  }
              },
              { 
                  item_4: {
                  title: 'Press Releases',
                  url: '#'
                  }
              }              
              ]
          }
        }
      ]
    },
  
    {
      name: 'Brands',
      url: '#',
      title: {
          name: 'Our Global Brands Portfolio',
          url: '#'
      },
      lists: [
        {
          list_1: {       
              title: 'Consumer Products',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Our purpose',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Strategy & Model',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Quality & Safety Standards',
                  url: '#'
                  }
              },
              { 
                  item_4: {
                  title: 'Our performance',
                  url: '#'
                  }
              }              
              ]
          }
        },
        {
          list_2: {       
              title: 'Emi Luxe',
              url: '#', 
              itemsTitle: {
              title: 'Explore Emi Luxe Division',
              url: '#'
              },     
              items: [
              {
                  item_1: {
                  title: 'Board of directors',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Executive Committee',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Our ethical principles',
                  url: '#'
                  }
              }             
              ]
          }
        },
        {
          list_3: {       
            title: 'Profession Products',
            url: '#',   
            itemsTitle: {
              title: 'Explore Professional Products Division',
              url: '#'
            },  
            items: [
              {
                item_1: {
                title: 'Life at Emi',
                url: '#'
                }
              },
              {  
                item_2: {
                title: 'Values & Mindset',
                url: '#'
                }
              },
              {
                item_3: {
                title: 'Emi History',
                url: '#'
                }
              }             
            ]
          }
        },
        {
          list_4: {       
            title: 'Active Cosmetics',
            url: '#',   
            itemsTitle: {
              title: 'Explore Active Cosmetics Division',
              url: '#'
            },   
            items: [
              {
                item_1: {
                title: 'News',
                url: '#'
                }
              },
              {  
                item_2: {
                title: 'Publications',
                url: '#'
                }
              },
              {
                item_3: {
                title: 'Media Library',
                url: '#'
                }
              },
              { 
                item_4: {
                title: 'Press Releases',
                url: '#'
                }
              }              
            ]
          }
        }
      ]
    },
  
  {
    name: 'Beauty Science & Technology',
    url: '#',
    title: {
        name: 'How to Invent Future of Beauty',
        url: '#'
    },
    lists: [
        {
        list_1: {       
            title: 'Beauty Research & Innovation',
            url: '#',     
            items: [
            {
                item_1: {
                title: 'Our purpose',
                url: '#'
                }
            },
            {  
                item_2: {
                title: 'Strategy & Model',
                url: '#'
                }
            },
            {
                item_3: {
                title: 'Quality & Safety Standards',
                url: '#'
                }
            },
            { 
                item_4: {
                title: 'Our performance',
                url: '#'
                }
            }              
            ]
        }
        },
        {
        list_2: {       
            title: 'Governance & Ethics',
            url: '#',     
            items: [
            {
                item_1: {
                title: 'Board of directors',
                url: '#'
                }
            },
            {  
                item_2: {
                title: 'Executive Committee',
                url: '#'
                }
            },
            {
                item_3: {
                title: 'Our ethical principles',
                url: '#'
                }
            }             
            ]
        }
        },
        {
        list_3: {       
            title: 'Culture & Heritage',
            url: '#',     
            items: [
            {
                item_1: {
                title: 'Life at Emi',
                url: '#'
                }
            },
            {  
                item_2: {
                title: 'Values & Mindset',
                url: '#'
                }
            },
            {
                item_3: {
                title: 'Emi History',
                url: '#'
                }
            }             
            ]
        }
        },
        {
        list_4: {       
            title: 'News & Documentation',
            url: '#',     
            items: [
            {
                item_1: {
                title: 'News',
                url: '#'
                }
            },
            {  
                item_2: {
                title: 'Publications',
                url: '#'
                }
            },
            {
                item_3: {
                title: 'Media Library',
                url: '#'
                }
            },
            { 
                item_4: {
                title: 'Press Releases',
                url: '#'
                }
            }              
            ]
        }
        }
      ]
  },
  
  {
    name: 'Careers',
    url: '#'
  }
  
]

console.log(links);

let navlinks = document.querySelectorAll('.nav-link'),
navtitles = document.querySelectorAll('.nav-title'),
navTitleItems = document.querySelectorAll('.nav-title-item'),
submenu = document.querySelector('.submenu'),
mainMenu = document.querySelector('.main-menu'),
mobileSubMenuDiv = document.querySelector('.mobile-submenu'),
mobileSubMenuLinksDiv = document.querySelector('.mobile-submenu-links-container'),
mobileSubMenuTitles = document.querySelectorAll('.mobile-submenu-titles'),
backToMainMenu = document.querySelector('.back-to-main-menu'),
navbar = document.querySelector('.navbar'),
backToMobileSubmenu = document.querySelector('.back-to-mobile-submenu');

Navbar()
window.addEventListener('resize', Navbar)

function Navbar() {  
    console.log('resized');
  // Navbar для десктопов
  if (window.innerWidth >= 1024) {  
    navbar.classList.remove('navfixed')

    // Показать подменю при наведении курсора на ссылку
    navTitleItems.forEach((el, i) => {
      el.onmouseenter = () => {
        if (submenu.classList.contains('hidden')) fadeIn(submenu)
      }
    })

    navlinks.forEach((el, i) => el.textContent = links[i].name)

    // Скрыть подменю при mouseleave submenu
    let mouseenterSubmenu = false

    submenu.onmouseenter = () => {
      mouseenterSubmenu = true
    }

    submenu.onmouseleave = () => {
      mouseenterSubmenu = false
      submenu.classList.remove('flex')
      submenu.classList.add('hidden')
    }

    navTitleItems.forEach((el) => {
      el.onmouseleave = () => {
        setTimeout( () => {
          if (!mouseenterSubmenu) {
            submenu.classList.remove('flex')
            submenu.classList.add('hidden')
          }
        }, 0)        
      }
    })
  }

  // Navbar для узких экранов
  if (window.innerWidth < 1024) {
    navbar.classList.add('navfixed')

    // функция Hamburger Menu
    let btn = document.getElementById('menuBtn'),
    nav = document.getElementById('menu');

    btn.onclick = () => {
      btn.classList.toggle('open')
      nav.classList.toggle('-left-full')
      nav.classList.toggle('left-0')
    }

    navtitles.forEach((el, i) => el.textContent = links[i].name)

    navTitleItems.forEach((el, i) => {
      el.onclick = () => {
        mainMenu.classList.remove('flex')
        mainMenu.classList.add('hidden')
        mobileSubMenuDiv.classList.remove('hidden')
        mobileSubMenuDiv.classList.add('flex')      
        setTimeout(() => {
          mobileSubMenuDiv.classList.remove('translate-x-full')
          mobileSubMenuLinksDiv.classList.add('translate-x-full')
        }, 0)
        
      }

      mobileSubMenuTitles.forEach((title, i) => {
        title.onclick = () => {
          mobileSubMenuDiv.classList.remove('flex')
          mobileSubMenuDiv.classList.add('hidden')
          mobileSubMenuLinksDiv.classList.remove('hidden')
          mobileSubMenuLinksDiv.classList.add('flex')
          setTimeout(() => {
            mobileSubMenuLinksDiv.classList.remove('translate-x-full')
            mobileSubMenuDiv.classList.add('translate-x-full')
          }, 0)
        }
      })
    })

    backToMainMenu.onclick = () => {    
      mobileSubMenuDiv.classList.add('translate-x-full')

      setTimeout(() => {
        mobileSubMenuDiv.classList.remove('flex')
        mobileSubMenuDiv.classList.add('hidden')
        mainMenu.classList.remove('hidden')
        mainMenu.classList.add('flex')
      }, 250)
      
    }

    backToMobileSubmenu.onclick = () => {
      mobileSubMenuLinksDiv.classList.add('translate-x-full')

      setTimeout(() => {
        mobileSubMenuLinksDiv.classList.remove('flex')
        mobileSubMenuLinksDiv.classList.add('hidden')
        mobileSubMenuDiv.classList.remove('hidden')
        mobileSubMenuDiv.classList.add('flex')
        mobileSubMenuDiv.classList.remove('translate-x-full')

      }, 250)
    }
  }
}

// FadeIn effect
function fadeIn(el) {
  let op = 0
  el.style.opacity = op
  el.classList.remove('hidden')
  el.classList.add('flex')
  
  let timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer)
    }
    el.style.opacity = op
    op = op + 0.1
  }, 50);
}

// Carousel
(function() {	
	function Carousel(setting) {
		if(document.querySelector(setting.wrap) === null) {
			console.error(`Carousel not fount selector ${setting.wrap}`);
			return;
		}

		/* Scope privates methods and properties */
		let privates = {},
        xDown, yDown, xUp, yUp, xDiff, yDiff;

		/* Public methods */
		// Prev slide
		this.prev_slide = () => {
			if(!privates.isAnimationEnd) {
				return;
			}

			privates.isAnimationEnd = false;

			--privates.opt.position;

			if(privates.opt.position < 0) {
				privates.sel.wrap.classList.add('s-notransition');
				privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.max_position}00%)`;
				privates.opt.position = privates.opt.max_position - 1;
			}
			
			setTimeout(() => {
				privates.sel.wrap.classList.remove('s-notransition');
				privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
			}, 10);

			privates.sel.wrap.addEventListener('transitionend', () => {
				privates.isAnimationEnd = true;
			});

			if(privates.setting.autoplay === true) {
				privates.timer.become();
			}
		};

		// Next slide
		this.next_slide = () => {
			if(!privates.isAnimationEnd) {
				return;
			}

			privates.isAnimationEnd = false;

			if(privates.opt.position < privates.opt.max_position) {
				++privates.opt.position;
			}
			
			privates.sel.wrap.classList.remove('s-notransition');
			privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;

			privates.sel.wrap.addEventListener('transitionend', () => {
				if(privates.opt.position >= privates.opt.max_position) {
					privates.sel.wrap.style["transform"] = 'translateX(0)';
					privates.sel.wrap.classList.add('s-notransition');
					privates.opt.position = 0;
				}

				privates.isAnimationEnd = true;
			});

			if(privates.setting.autoplay === true) {
				privates.timer.become();
			}
		};

		// Pause timer carousel
		this.pause = () => {
			if(privates.setting.autoplay === true) {
				privates.timer.pause();
			}
		};

		// Become timer carousel
		this.become = (autoplayDelay = privates.setting.autoplayDelay) => {
			if(privates.setting.autoplay === true) {
				privates.setting.autoplayDelay = autoplayDelay;
				privates.timer.become();
			}
		};

		// Go to
		this.goto = (index) => {
			privates.opt.position = index - 1;
			this.next_slide();
		};

		// Item
		this.index = () => {
			return privates.opt.position;
		};

		/* privates methods */
		privates.hts = (e) => {
			xDown = e.touches[0].clientX;
			yDown = e.touches[0].clientY;
		};

		privates.htm = (e) => {
			if ( ! xDown || ! yDown ) {
				return;
			}

			xUp = e.touches[0].clientX;
			yUp = e.touches[0].clientY;

			xDiff = xDown - xUp;
			yDiff = yDown - yUp;

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
				if ( xDiff > 0 ) {
					this.next_slide();
				} else {
					this.prev_slide();
				}
			}

			xDown = 0;
			yDown = 0;
		}

		/* privates properties */
		privates.default = {
			"touch": true,
			"autoplay": false,
			"autoplayDelay": 3000,
			"pauseOnFocus": true,
			"pauseOnHover": true
		};

		privates.setting = Object.assign(privates.default, setting);

		privates.isAnimationEnd = true;

		privates.sel = {
			"wrap": document.querySelector(privates.setting.wrap),
			"children": document.querySelector(privates.setting.wrap).children,
			"prev": document.querySelector(privates.setting.prev),
			"next": document.querySelector(privates.setting.next)
		};

		privates.opt = {
			"position": 0,
			"max_position": document.querySelector(privates.setting.wrap).children.length
		};

		/* Constructor */
		// Clone first elem to end wrap
		privates.sel.wrap.appendChild(privates.sel.children[0].cloneNode(true));

		// Autoplay
		if(privates.setting.autoplay === true) {
			privates.timer = new Timer(this.next_slide, privates.setting.autoplayDelay);
		}

		// Control
		if(privates.sel.prev !== null) {
			privates.sel.prev.addEventListener('click', () => {
				this.prev_slide();
			});
		}

		if(privates.sel.next !== null) {
			privates.sel.next.addEventListener('click', () => {
				this.next_slide();
			});
		}

		// Touch events
		if(privates.setting.touch === true) {
			privates.sel.wrap.addEventListener('touchstart', privates.hts, false);
			privates.sel.wrap.addEventListener('touchmove', privates.htm, false);
		}

		// Pause on hover
		if(privates.setting.autoplay === true && privates.setting.pauseOnHover === true) {
			privates.sel.wrap.addEventListener('mouseenter', () => {
				privates.timer.pause();
			});

			privates.sel.wrap.addEventListener('mouseleave', () => {
				privates.timer.become();
			});
		}
	}

	function Timer(callback, delay) {
		/* privates properties */
		let timerId, start, remaining = delay;

		/* Public methods */
		this.resume = () => {
			start = new Date();
			timerId = setTimeout(() => {
				remaining = delay;
				this.resume();
				callback();
			}, remaining);
		};

		this.pause = () => {
			clearTimeout(timerId);
			remaining -= new Date() - start;
		};

		this.become = () => {
			clearTimeout(timerId);
			remaining = delay;

			this.resume();
		};

		/* Constructor */
		this.resume();
	}

	let a = new Carousel({
		"wrap": ".js-carousel__wrap",
		"prev": ".js-carousel__prev",
		"next": ".js-carousel__next",
		"touch": true,
		"autoplay": false,
		"autoplayDelay": 3000
	});
})();