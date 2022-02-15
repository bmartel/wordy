import { html, css, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./wd-switch.ts";

@customElement("wd-settings")
export class CwSettings extends LitElement {
  @state()
  darkTheme = localStorage.getItem("theme_dark") || "";

  private toggleDarkTheme(e: Event) {
    e.preventDefault();
    this.darkTheme = this.darkTheme === "on" ? "" : "on";
    localStorage.setItem("theme_dark", this.darkTheme);
    this.dispatchEvent(
      new CustomEvent("wd-dark-theme", {
        detail: { on: this.darkTheme === "on" },
        bubbles: true,
        composed: true,
      })
    );
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      box-sizing: border-box;
      overflow: hidden;
    }
    .setting {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--wd-border-color);
      padding: 16px 0;
    }

    a,
    a:visited {
      color: var(--wd-color-faded);
    }

    .title {
      font-size: 18px;
    }
    .text {
      padding-right: 8px;
    }
    .description {
      font-size: 12px;
      color: var(--wd-color-faded);
    }

    #footnote {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 16px;
      color: var(--wd-color-faded);
      font-size: 12px;
      text-align: right;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    #privacy-policy,
    #copyright {
      text-align: left;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      .setting {
        padding: 16px;
      }
    }
  `;

  render() {
    return html`
      <div class="sections">
        <section>
          <div class="setting">
            <div class="text">
              <div class="title">Dark Theme</div>
            </div>
            <div class="control">
              <wd-switch
                @click=${this.toggleDarkTheme}
                id="dark-theme"
                name="dark-theme"
                .checked=${this.darkTheme === "on"}
              ></wd-switch>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-settings": CwSettings;
  }
}
