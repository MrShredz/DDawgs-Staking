import { grey } from "@mui/material/colors";

export const ROUTES = [
  {
    name: 'Home',
    path: 'home'
  },
  {
    name: 'Staking',
    path: 'staking'
  },
  {
    name: 'Buy DDawgs',
    path: 'buy-ddawgs'
  },
  // {
  //   name: 'Exchange',
  //   path: 'exchange'
  // }
];

//  Animations
export const VAR_FADE_IN_UP = {
  hidden: {
    y: -30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const VAR_FADE_IN_DOWN = {
  hidden: {
    y: 30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const VAR_FADE_IN_LEFT = {
  hidden: {
    x: -30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const VAR_FADE_IN_RIGHT = {
  hidden: {
    x: 30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};

// Colors
export const COLOR_PRIMARY = '#60FF42';
export const COLOR_SECONDARY = grey[200];
export const COLOR_SUCCESS = '#0fed18';
export const COLOR_WARNING = '#fdc400';
export const COLOR_DARK = grey[900];
export const COLOR_DARK_BLACK = '#131313';
export const COLOR_WHITEB_BROWN = '#af572f';
export const COLOR_BRIGHT = 'white';
export const COLOR_BRIGHT_BLUE = '#60ff42';
export const COLOR_BLUE = '#61c97d';
export const COLOR_DARK_BLUE = '#06441f';
export const COLOR_GREEN = '#49c2ff';

// export const FONT_PRIMARY = 'font-walter-turncoat';
export const FONT_PRIMARY = 'Noto Sans';
export const FONT_SECONDARY = '';

export const COMMUNITY_TELEGRAM_URL = 'https://t.me/DeputyDawgs';

export const SUCCESS = 'success';
export const WARNING = 'warning';

export const BORDER_RADIUS_TOP = '0 50px 0 50px';
export const BORDER_RADIUS_BOTTOM = '50px 0 50px 0';
export const BORDER_STYLE = '1px solid #49c2ff';