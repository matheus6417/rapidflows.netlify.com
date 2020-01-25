
const Navigation = {
    template: `
      <div>
              <div
              data-collapse="medium"
              data-animation="over-right"
              data-duration="400"
              class="navbar w-nav"
            >
              <a
                href="index.html"
                class="logo-block w-nav-brand w--current"
              ><img
                  src="/img/blogo.png"
                  
                  class="logo"
                ></a>
              <div
                class="menu-button w-nav-button"
                id="js-menu-open"
                onclick="document.getElementById('js-menu').classList.remove('hidden');document.getElementById('js-menu-open').classList.add('hidden');document.getElementById('js-menu-close').classList.remove('hidden');"
              >
                <svg
                  style="height: 32px;width: 100%;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-menu"
                >
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                  />
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                  /></svg>
              </div>
              <div
                class="menu-button w-nav-button hidden"
                id="js-menu-close"
                onclick="document.getElementById('js-menu').classList.add('hidden');document.getElementById('js-menu-close').classList.add('hidden');document.getElementById('js-menu-open').classList.remove('hidden');"
              >
                <svg
                  style="height: 32px;width: 100%;"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-menu"
                >
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                  />
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                  /></svg>
              </div>
              <!-- <div class="cta-nav-menu w-hidden-small w-hidden-tiny">
                <a
                  href="#"
                  class="nav-link cta-nav-link w-hidden-small w-hidden-tiny w-nav-link"
                  style="border:none"
                >Sign
                  in</a><a
                  href="#"
                  class="nav-link cta-nav-link register w-nav-link"
                >Sign up</a>

                <a
                  href="index.html"
                  class="products-menu"
                ><img
                    src="/img/wannatalklogo-light.svg"
                    
                    class="logo"
                  ></a>
                <div class="products-menu--wrapper">
                  <a
                    href="index.html"
                    class="products-menu"
                    
                  ><img
                      src="/img/wannatalklogo-light.svg"
                      
                      class="logo"
                      style="filter:invert(0)!Important"
                    ></a>
                  <a
                    href="#"
                    class="products-menu--link"
                  ><img
                      src="/img/smile-face.svg"
                      
                      class="products-menu--logo"
                    >TeamJello</a>
                  <a
                    href="#"
                    class="products-menu--link"
                  ><img
                      src="/img/smile-face.svg"
                      
                      class="products-menu--logo"
                    >Gloo</a>
                </div>
              </div> -->
              <nav
                role="navigation"
                class="nav-menu w-clearfix w-nav-menu hidden lg:block"
                id="js-menu"
              >
                <a
                  href="/"
                  class="nav-link w-nav-link w--current"
                >Home</a>
                <a
                  href="features.html"
                  class="nav-link w-nav-link"
                >Features</a>
                <a
                  href="bap.html"
                  class="nav-link w-nav-link"
                >Partner with Blynk</a>
                <a
                  href="rapidstore.html"
                  class="nav-link w-nav-link"
                >RapidStore</a>
                <!-- <div class="cta-nav-menu w-hidden-main w-hidden-medium"><a
                    href="#"
                    class="nav-link cta-nav-link w-nav-link"
                  >Sign in</a><a
                    href="#"
                    class="nav-link cta-nav-link register w-nav-link"
                  >Sign up </a></div> -->
              </nav>
            </div> 
      </div>
    `
  };