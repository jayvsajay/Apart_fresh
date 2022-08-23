
import './App.css';
// import Simpleform from './components/Simpleform';
// import Youtubeform from './components/Youtubeform';
// import FormContainer from './components/FormContainer';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';
// import { theme, ThemeProvider } from '@chakra-ui/core'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import EnrollmentForm from './components/EnrollmentForm';

function App() {
  return (
    <div className="App">
      {/* <Simpleform/> */}
      {/* <Youtubeform/> */}
      {/* <FormContainer/> */}
      {/* <LoginForm />
      <RegistrationForm/> */}
      <Router>
        <Routes>
          <Route path='/' element={<EnrollmentForm/>}/>
        </Routes>
      </Router>
      <EnrollmentForm/>
      {/* <ThemeProvider theme={theme}>
        <LoginForm/>
      </ThemeProvider> */}

    </div>
  );
}

export default App;
