import LoginComponent from "./Views/Auth/Login/LoginComponents/LoginComponent"
import iconeclimatempo from './assets/climatempo.png'
import googleicone from './assets/googleicone.png'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import RegisterByEmail from "./Views/Auth/Register/RegisterByEmail"
import DashboardApp from "./Views/Dashboard/DashboarApp"
import logoWeather from './assets/logoWeather.png'
import iconeCidades from './assets/iconCidades.png'
import iconeConfig from './assets/iconeConfig.png'
import iconeMap from './assets/iconeMap.png'
import iconeProfile from './assets/iconProfile_darkmode.png'
import searchIcon from './assets/searchIcon.png'
import climateCondition from "./assets/climateCondition.png"
const App = () => {
  return (
    <Router>
     <Routes>
      <Route path="/" element={<RegisterByEmail />}/>
      <Route path="/login" element={<LoginComponent src = {iconeclimatempo} googleicone={googleicone}/>}/>
      <Route path="/dashboard" element={<DashboardApp
                    logoWeather={logoWeather}
                    iconeCidades={iconeCidades}
                    iconeConfig={iconeConfig}
                    iconeMap={iconeMap}
                    iconeProfile = {iconeProfile}
                    searchIcon={searchIcon}
                    climateCondition={climateCondition}
        />}/>
     </Routes>

     

    </Router>

  )
}

export default App
