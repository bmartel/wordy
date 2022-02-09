let Toaster: HTMLElement | null = null;

export const initToaster = (node: HTMLElement) => {
  Toaster = node;
};

export const removeToaster = () => {
  Toaster = null;
};

const createToast = (text: string) => {
  const node = document.createElement("output");

  node.innerText = text;
  node.classList.add("toast");
  node.setAttribute("role", "status");

  return node;
};

const flipToast = (toast: HTMLElement) => {
  const first = Toaster?.offsetHeight || 0;

  Toaster?.appendChild(toast);

  const last = Toaster?.offsetHeight || 0;
  const invert = last - first;

  Toaster?.animate(
    [{ transform: `translateY(${invert}px)` }, { transform: "translateY(0)" }],
    {
      duration: 150,
      easing: "ease-out",
    }
  );
};

const addToast = (toast: HTMLElement) => {
  const { matches: motionOK } = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  );

  Toaster?.children.length && motionOK
    ? flipToast(toast)
    : Toaster?.appendChild(toast);
};

export const Toast = (text: string) => {
  const toast = createToast(text);
  addToast(toast);

  return new Promise<void>(async (resolve) => {
    await Promise.allSettled(
      toast.getAnimations().map((animation) => animation.finished)
    );
    Toaster?.removeChild(toast);
    resolve();
  });
};
