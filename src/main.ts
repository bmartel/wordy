import { registerSW } from "virtual:pwa-register";
import "./wd-theme.ts";
import "./wd-app.ts";

registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});
