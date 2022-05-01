import React from 'react';

export declare interface ThemeSwitcherPosition {
  top: string,
  right: string,
  bottom: string,
  left: string
}

export declare interface ThemeSwitcherProps {
  theme?: string,
  toggleTheme?: () => void,
  position?: ThemeSwitcherPosition
}

/**
 * A tiny theme switcher button
 */
export default function ThemeSwitcher({ theme, toggleTheme, position }: ThemeSwitcherProps) {
  return (
    <div className="ts-wrapper" style={position}>
      <label htmlFor="switch">
        <input type="checkbox" key={theme} id="switch" className="ts-checkbox" onChange={toggleTheme} defaultChecked={theme === 'dark'} />
        <div className="toggle" />
        <div className="names">
          <p className="name-light">Light</p>
          <p className="name-dark">Dark</p>
        </div>
      </label>
    </div>
  );
}

ThemeSwitcher.defaultProps = {
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
  position: {
    top: 'auto',
    right: '20px',
    bottom: '20px',
    left: 'auto',
  },
};
