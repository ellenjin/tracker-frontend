import { HashRouter } from 'react-router-dom';
import './App.css';
import PageRoutes from './PageRoutes';
import { UserProvider } from './contexts/UserProvider';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <HashRouter>
          <PageRoutes />
        </HashRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
