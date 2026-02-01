<template>
  <footer class="body-container">
    <div class="logo-area">
      <img src="/holey_logo.svg" alt="holey logo" class="logo" />
    </div>

    <div class="contact-area">
      <div class="contact-details">
        <div class="address-phone">
          <div class="address">
            <h4>Location</h4>

            <span
              >Rangs Arcade, 153/A Gulshan North Ave, Gulshan-2,
              Dhaka-1212</span
            >

            <NuxtLink
              to="https://maps.app.goo.gl/qbXTmvYHYf9uVzEK8"
              target="_blank"
              >View on Map</NuxtLink
            >
          </div>

          <div class="phone">
            <h4>Phone</h4>

            <a href="tel:+880 1969 200200"> +880 1969 200200 </a>
          </div>
        </div>

        <div class="social-links">
          <NuxtLink to="/" target="_blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8916 2V6H14.3203C14.1443 5.97832 13.9681 6.04187 13.8428 6.17188C13.7176 6.30189 13.6568 6.48451 13.6777 6.66699V8.66992H16.8965L16.2539 12.6699H13.6777V22H9.82031V12.6699H7.89648V8.66992H9.82031V6C9.82031 5.50667 9.73728 2 13.9287 2H16.8916Z"
                fill="#105984"
              />
            </svg>
          </NuxtLink>

          <NuxtLink to="/" target="_blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9922 2.5C14.5783 2.5 14.895 2.49967 15.915 2.52344C16.9115 2.57891 17.6079 2.73787 18.209 2.97559C18.8339 3.21338 19.3487 3.53033 19.8945 4.06934C20.4166 4.60039 20.7647 5.1159 21.002 5.75C21.2392 6.3603 21.3969 7.05811 21.4443 8.04883C21.4997 9.06327 21.5 9.38877 21.5 11.9727C21.5 14.5564 21.4918 14.8739 21.4443 15.9043C21.4048 16.9026 21.2469 17.5999 21.0098 18.2021C20.7646 18.8283 20.4399 19.3595 19.9258 19.8984C19.3958 20.4216 18.874 20.7554 18.2412 20.9932C17.6401 21.2309 16.9438 21.389 15.9473 21.4365C14.9348 21.4999 14.6021 21.5 12.0234 21.5C9.44523 21.5 9.12866 21.492 8.10059 21.4365C7.10411 21.389 6.40772 21.2309 5.80664 20.9932C5.18175 20.7474 4.64354 20.4221 4.08984 19.9307C3.56778 19.3996 3.23535 18.8685 2.99805 18.2344C2.76075 17.6399 2.60313 16.9422 2.55566 15.9355C2.50029 14.9209 2.5 14.5879 2.5 12.0117C2.5 9.43574 2.5002 9.11832 2.56348 8.08789C2.61096 7.08933 2.76859 6.39141 3.00586 5.78906C3.25106 5.16298 3.57586 4.63974 4.08203 4.08496C4.61187 3.56991 5.14962 3.23679 5.78223 2.99902C6.3754 2.76126 7.07183 2.60325 8.07617 2.55566C9.08866 2.50018 9.4135 2.5 11.9922 2.5ZM11.9902 4.20703C9.45941 4.20703 9.15873 4.21503 8.1543 4.27051C7.22903 4.31013 6.73075 4.46108 6.39062 4.58789C5.9398 4.76225 5.62301 4.96793 5.30664 5.30078C4.96657 5.63364 4.75292 5.95077 4.59473 6.39453C4.46027 6.73534 4.31017 7.23489 4.2627 8.16211C4.20732 9.16878 4.20703 9.47033 4.20703 12.0068C4.20703 14.5433 4.21514 14.8449 4.27051 15.8516C4.31008 16.7787 4.46037 17.2783 4.58691 17.6191C4.76091 18.0708 4.96669 18.3881 5.29883 18.7051C5.63095 19.0458 5.94778 19.2595 6.39062 19.418C6.73075 19.5527 7.22909 19.7034 8.1543 19.751C9.15873 19.8065 9.45941 19.8066 11.9902 19.8066C14.5215 19.8066 14.8226 19.7986 15.8271 19.7432C16.7525 19.7035 17.2507 19.5526 17.5908 19.4258C18.0417 19.2514 18.3584 19.0458 18.6748 18.7129C19.0149 18.38 19.2285 18.0629 19.3867 17.6191C19.5212 17.2783 19.6713 16.7787 19.7188 15.8516C19.7741 14.8449 19.7744 14.5433 19.7744 12.0068C19.7744 9.47033 19.7663 9.16878 19.7109 8.16211C19.6714 7.23488 19.5211 6.73534 19.3945 6.39453C19.2205 5.9428 19.0148 5.62562 18.6826 5.30859C18.3504 4.96779 18.0337 4.75423 17.5908 4.5957C17.2507 4.46096 16.7525 4.31027 15.8271 4.2627C14.8226 4.20721 14.5215 4.20703 11.9902 4.20703ZM11.9941 7.12891C14.6834 7.12915 16.8662 9.31683 16.8662 12.0117C16.8662 14.7066 14.6833 16.8943 11.9941 16.8945C9.30473 16.8945 7.12112 14.7067 7.12109 12.0117C7.12109 9.31668 9.30472 7.12891 11.9941 7.12891ZM11.9922 8.8457C10.252 8.8457 8.82812 10.2728 8.82812 12.0166C8.82827 13.7603 10.2521 15.1865 11.9922 15.1865C13.7323 15.1865 15.1561 13.7603 15.1562 12.0166C15.1562 10.2728 13.7324 8.84572 11.9922 8.8457ZM17.084 5.70117C17.7205 5.70117 18.2371 6.21706 18.2373 6.85352C18.2373 7.49014 17.7206 8.00684 17.084 8.00684C16.4475 8.00664 15.9316 7.49002 15.9316 6.85352C15.9318 6.21718 16.4477 5.70137 17.084 5.70117Z"
                fill="#105984"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Holey Artisan Bakery.</span>

        <NuxtLink to="https://co.design/" target="_blank"
          >Made By
          <svg
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_93_1716)">
              <path
                d="M23.7861 0.00059804C21.6064 0.0252778 19.6752 0.883704 18.2751 2.27865L18.274 2.27757L15.5153 5.06961L10.6941 9.94869C10.6941 9.94869 10.4841 10.1611 10.3785 10.2674C10.3774 10.2685 10.3764 10.2695 10.3753 10.2706C9.79624 10.8565 8.98259 11.2159 8.05484 11.2267C6.2004 11.2471 4.77572 9.85963 4.75652 8.01508C4.73733 6.18556 6.13109 4.74877 7.945 4.72838C9.70987 4.70907 11.0994 5.94735 11.2721 7.63201L14.9458 3.89249C13.5424 1.50499 10.9223 -0.0348121 7.8309 0.00059804C3.37662 0.0499576 -0.045399 3.57702 0.000455444 8.06981C0.0473763 12.6012 3.54511 16.05 8.09856 15.9985C10.3401 15.9738 12.3097 15.0735 13.7269 13.6743C13.7419 13.6592 13.7579 13.6453 13.7728 13.6303L13.8218 13.5798L16.4718 10.8983C17.6096 13.9436 20.427 16.0306 23.9685 15.9899C28.5262 15.9384 32.0484 12.422 31.9994 7.90671C31.9503 3.37958 28.3876 -0.0509075 23.7861 0.00059804ZM24.0101 11.2267C22.1556 11.2471 20.7309 9.8607 20.7117 8.01508C20.6925 6.18556 22.0863 4.74877 23.9002 4.72838C25.7739 4.70799 27.2252 6.10508 27.2455 7.94855C27.2657 9.78773 25.8656 11.2052 24.0101 11.2267Z"
                fill="#041926"
              />
            </g>
            <defs>
              <clipPath id="clip0_93_1716">
                <rect width="32" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </NuxtLink>
      </div>
    </div>

    <!-- Optional top left reverse border-radius illusion -->
    <svg
      id="top-left"
      width="64"
      height="64"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0C0 55.2285 44.7715 100 100 100H0V0Z" fill="white" />
    </svg>

    <!-- Optional top right reverse border-radius illusion -->
    <svg
      id="top-right"
      width="64"
      height="64"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100 0C100 55.2285 55.2285 100 0 100H100V0Z" fill="white" />
    </svg>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: #ffffff;
  position: relative;

  @include clamp-property("padding-block", 5, 8.5);
  padding-bottom: 2.5rem;

  @include flex(space-between, start, nowrap, column);
  @include clamp-property("gap", 2.5, 5);

  @media screen and (min-width: 1024px) {
    @include flex(space-between);
  }

  .logo-area {
    width: 100%;
    @media screen and (min-width: 1024px) {
      width: 28%;
    }
  }

  .contact-area {
    width: 100%;
    @media screen and (min-width: 1024px) {
      width: 72%;
    }

    .contact-details {
      @include flex(space-between, center, nowrap, column);
      @include clamp-property("gap", 1.5, 3);

      @media screen and (min-width: 1024px) {
        @include flex(space-between);
      }

      .address-phone {
        color: $text;
        .address {
          margin-bottom: 1.5rem;
          h4 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%; /* 24px */
            text-transform: capitalize;
          }

          span {
            width: 100%;
            @media screen and (min-width: 1024px) {
              width: 70%;
            }
            font-size: 17px;
            font-style: normal;
            font-weight: 450;
            line-height: 160%; /* 27.2px */
            text-transform: capitalize;
            display: block;
            margin-block: 0.25rem;
          }

          a {
            color: $highlight;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%; /* 24px */
            text-decoration-line: underline;
          }
        }

        .phone {
          h4 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%; /* 24px */
            text-transform: capitalize;
          }

          a {
            color: $text;
            font-size: 1.0625rem;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 1.7rem */
            text-transform: capitalize;
            margin-top: 0.25rem;
            text-decoration: none;
          }
        }
      }

      .social-links {
        @include flex();
        @include clamp-property("gap", 1, 0.75);

        a {
          background: rgba(254, 249, 241, 1);
          border-radius: 50%;
          transition: background-color 0.45s ease;
          @include size(3rem, 3rem);
          @include flex(center, center);

          &:hover {
            background: rgba(16, 89, 132, 1);

            svg path {
              fill: rgba(254, 249, 241, 1);
            }
          }
        }
      }
    }

    .footer-bottom {
      @include clamp-property("margin-top", 2.5, 5);
      @include flex(center, center, nowrap, column);
      @include clamp-property("gap", 1.25, 3);

      @media screen and (min-width: 1024px) {
        @include flex(space-between, center);
      }

      span {
        color: $text;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 1.5rem */
        text-transform: capitalize;
      }

      a {
        color: $text;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 1.5rem */
        text-transform: capitalize;
        text-decoration: none;

        @include flex(space-between, center);
        gap: 0.4rem;

        svg {
          opacity: 0.9;
        }
      }
    }
  }

  #top-left {
    position: absolute;
    left: 0;
    bottom: 100%;
  }

  #top-right {
    position: absolute;
    right: 0;
    bottom: 100%;
  }
}
</style>
