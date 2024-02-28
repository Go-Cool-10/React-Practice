import { useTheme } from "./ThemeProvider";

const Content = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className={`App ${theme}`}>
        <b>Current Theme {theme}</b>
        <button onClick={toggleTheme}>Toggle</button>
      </div>
    </>
  );
};
export default Content;
