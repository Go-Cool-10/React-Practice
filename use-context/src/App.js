import './App.css';
import Content from './themeCont/Content';
import { ThemeProvider } from './themeCont/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Content/>
    </ThemeProvider>
  );
}

export default App;
