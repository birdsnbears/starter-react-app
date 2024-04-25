/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        obadgebg: "#97B1CB",
        badgebg: "#4C6770",
        oheaderbg: "#6C9CAB",
        headerbg: "#4B6E79",
        ocontentbg: "#637273",
        contentbg: "#637273",
        // osky: "#6097cf",
        // nsky: "#d9d3c7",
        // osky: "#6097cf",
        // nsky: "#d9d3c7",
        osky: "#6097cf",
        nsky: "#d9d3c7",
        omountain: {
          100: "#1f2124",
          200: "#123c54",
          300: "#185d7e",
          400: "#8bc8ca",
          500: "#b5dbd2",
        },
        mountain: {
          100: "#18262f",
          200: "#223440",
          300: "#2a4b5a",
          400: "#63818c",
          500: "#94a2a5",
        },
        // /* tree */
        // /* old palette */
        otree: {
          100: "#2a3115",
          200: "#4d5634",
          300: "#2f3422",
          400: "#1f2124",
        },
        // /* new palette */
        tree: {
          100: "#434f38",
          200: "#394231",
          300: "#323935",
          400: "#233031",
        },
      },
    },
  },
  plugins: [],
};

// /* mnt */
// /* old palette */
// --osky: #6097cf;
// --omnt-0: #1f2124;
// --omnt-1: #123c54;
// --omnt-2: #185d7e;
// --omnt-3: #8bc8ca;
// --omnt-4: #b5dbd2;
// /* new palette */
// --sky: #d9d3c7;
// --mnt-0: #18262f;
// --mnt-1: #223440;
// --mnt-2: #2a4b5a;
// --mnt-3: #63818c;
// --mnt-4: #94a2a5;

// /* tree */
// /* old palette */
// --otree-0: #2a3115;
// --otree-1: #4d5634;
// --otree-2: #2f3422;
// --otree-3: #1f2124;
// /* new palette */
// --tree-0: #434f38;
// --tree-1: #394231;
// --tree-2: #323935;
// --tree-3: #233031;
