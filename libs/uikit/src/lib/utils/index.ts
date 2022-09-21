export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const themeSwitcher = {
  init() {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.setDark();
    }
  },

  setDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  },

  setLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  },

  toggle() {
    if (localStorage.getItem('theme') === 'dark') {
      this.setLight();
      return;
    }
    this.setDark();
  },
};
