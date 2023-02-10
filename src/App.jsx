import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import PreviewResume from './components/PreviewResume';
import { ResumeContextProvider } from './components/ResumeDataContext';
import "./scss/style.scss"
import Cascade from './resume-templates/Cascade';
import Straight from './resume-templates/Straight';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <>

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <BrowserRouter>
          <Routes>

            <Route path='/register' element={<Register />}></Route>
            <Route index path='/login' element={<Login />}></Route>
            <Route path="/home" element={<ResumeContextProvider><Home /></ResumeContextProvider>} />
            <Route path="/" element={<ResumeContextProvider><Home /></ResumeContextProvider>} />
            <Route path='/preview-resume' element={<ResumeContextProvider><PreviewResume /></ResumeContextProvider>}></Route>
            <Route path='/preview-resume/cascade' element={<ResumeContextProvider><Cascade /></ResumeContextProvider>}></Route>
            <Route path='/preview-resume/straight' element={<ResumeContextProvider><Straight /></ResumeContextProvider>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </>
  );
}

export default App;
