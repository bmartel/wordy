import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("wd-fireworks")
export class CwFireworks extends LitElement {
  static styles = css`
    .overlay > .before,
    .overlay > .after {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      box-shadow: 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color),
        0 0 var(--wd-fireworks-base-color), 0 0 var(--wd-fireworks-base-color);
      animation: 1.25s bang ease-out infinite backwards,
        1.25s gravity ease-in infinite backwards,
        6.25s position linear infinite backwards;
      will-change: margin, transform, opacity, box-shadow;
    }
    .overlay > .after {
      animation-delay: 1.5s, 1.5s, 1.5s;
      animation-duration: 1.5s, 1.5s, 7.5s;
    }

    @keyframes bang {
      to {
        box-shadow: 18px -277.6666666667px #bf00ff,
          8px -315.6666666667px #005eff, 89px -69.6666666667px #0073ff,
          46px 54.3333333333px #ff6600, 238px -135.6666666667px #e1ff00,
          -234px 34.3333333333px #ff00a6, -62px 68.3333333333px #ff005e,
          95px -60.6666666667px #ff2200, -240px 49.3333333333px #ff4400,
          242px -312.6666666667px #00ff37, 47px -67.6666666667px #00ff6f,
          -49px -131.6666666667px #1a00ff, -184px 23.3333333333px #005eff,
          -173px -330.6666666667px #d900ff, 216px -130.6666666667px #ff0062,
          192px -154.6666666667px #2600ff, -113px 56.3333333333px #0900ff,
          169px -244.6666666667px #007bff, 87px -332.6666666667px #0044ff,
          167px -407.6666666667px #9900ff, -214px -163.6666666667px #4000ff,
          195px -262.6666666667px #ff006a, 26px -36.6666666667px #00ffe1,
          -219px -225.6666666667px #00ffc4, -168px -277.6666666667px #55ff00,
          35px -371.6666666667px blue, 110px -358.6666666667px #00ffe6,
          -225px -105.6666666667px #00ff09, 150px -171.6666666667px #00ff77,
          213px -90.6666666667px #ff00dd, 39px 0.3333333333px #22ff00,
          168px 5.3333333333px #001eff, -128px -357.6666666667px #9500ff,
          -79px -155.6666666667px #00fff7, -66px -260.6666666667px fuchsia,
          -142px -274.6666666667px #ffb700, -64px 24.3333333333px #00fff7,
          -41px -312.6666666667px #1aff00, 183px -94.6666666667px #3700ff,
          -218px -64.6666666667px #ff00a2, -172px -181.6666666667px #008cff,
          -37px -350.6666666667px #ff7700, 219px -415.6666666667px #ae00ff,
          -245px 59.3333333333px #2600ff, 83px -188.6666666667px #00ffe1,
          45px -363.6666666667px #ff0011, 155px 32.3333333333px #00ffcc,
          -224px -245.6666666667px #ff0400, -83px -337.6666666667px #00ffae,
          58px -401.6666666667px #a6ff00, -129px -84.6666666667px #0066ff;
      }
    }
    @keyframes gravity {
      to {
        transform: translateY(200px);
        opacity: 0;
      }
    }
    @keyframes position {
      0%,
      19.9% {
        margin-top: 10%;
        margin-left: 40%;
      }
      20%,
      39.9% {
        margin-top: 40%;
        margin-left: 30%;
      }
      40%,
      59.9% {
        margin-top: 20%;
        margin-left: 70%;
      }
      60%,
      79.9% {
        margin-top: 30%;
        margin-left: 20%;
      }
      80%,
      99.9% {
        margin-top: 30%;
        margin-left: 80%;
      }
    }
  `;

  render() {
    return html`
      <div class="overlay">
        <div class="before"></div>
        <div class="after"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-fireworks": CwFireworks;
  }
}
