import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'
import ForgotPass from '../body/auth/ForgotPassword'
import ResetPass from '../body/auth/ResetPassword'
import Profile from '../body/profile/Profile'
import Vendor from '../body/Vendor/Vendor'
import API from '../body/API/API'
import Usecase from '../body/Usecase/Usecase'
import Success from '../body/Success/Success'
import VendorsPage from '../body/VendorsPage/VendorsPage'
import Home from '../body/home/Home'
import {useSelector} from 'react-redux'
import TabsVendor from './Tabs/TabsVendor'
import TabsAPI from './Tabs/TabsAPI'
import TabsUsecase from './Tabs/TabsUsecase'
import TabsSuccess from './Tabs/TabsSuccess'
import Vendors from './NotLoggedIn/Vendors'
import APIs from './NotLoggedIn/APIs'
import Usecases from './NotLoggedIn/Usecases'
import SuccessStories from './NotLoggedIn/Successes'
import '../body/Tabs/Tabs.css'
function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged} = auth
    return (
        <section>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/allvendors" component={VendorsPage} />
                <Route path="/search/vendors/notloggedin" component={Vendors} />
                <Route path="/search/apis/notloggedin" component={APIs} />
                <Route path="/search/usecases/notloggedin" component={Usecases} />
                <Route path="/search/successes/notloggedin" component={SuccessStories} />
                <Route path="/search/vendors" component={TabsVendor} />
                <Route path="/search/apis" component={TabsAPI} />
                <Route path="/search/usecases" component={TabsUsecase} />
                <Route path="/search/successes" component={TabsSuccess} />
                <Route path="/successstories/:TransformX_Success_Story_Id" component={Success}  />
                <Route path="/usecases/:TransformX_Usecase_Id" component={Usecase}  />
                <Route path="/apis/:TransformX_API_Id" component={API}  />
                <Route path="/vendors/:TransformX_Vendor_Id" component={Vendor}  />
                <Route path="/login" component={isLogged ? NotFound : Login} />
                <Route path="/register" component={isLogged ? NotFound : Register} />
                <Route path="/vendors" component={Vendors} />
                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass}  />
                <Route path="/user/activate/:activation_token" component={ActivationEmail}/>
                <Route path="/profile" component={isLogged ? Profile : NotFound} />
           </Switch>
        </section>
    )
}

export default Body
