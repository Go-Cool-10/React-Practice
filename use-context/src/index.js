import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataConsumer from './useCon/DataConsumer';
import { ProviderContext } from './useCon/providerContext';
import DataProvider from './useCon/ContextDemo';
import { ColorProvider } from './colorCont/ColorProvider';
import Panel from './colorCont/Panel';
import PanelButton from './colorCont/PanelButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DataProvider/> */}
    <ColorProvider.Provider value = {{color:'white'}}>
      <Panel>
        <PanelButton text = "submit"></PanelButton>
        <PanelButton text ="clear"></PanelButton>
      </Panel>
    </ColorProvider.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
