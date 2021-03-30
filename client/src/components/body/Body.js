import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import AdminLogin from './auth/AdminLogin'
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
import { useSelector } from 'react-redux'
import TabsVendor from './Tabs/TabsVendor'
import TabsAPI from './Tabs/TabsAPI'
import TabsUsecase from './Tabs/TabsUsecase'
import TabsSuccess from './Tabs/TabsSuccess'
import Vendors from './NotLoggedIn/Vendors'
import APIs from './NotLoggedIn/APIs'
import Usecases from './NotLoggedIn/Usecases'
import SuccessStories from './NotLoggedIn/Successes'
import '../body/Tabs/Tabs.css'
import InstaEmbed from '../body/Social/InstaEmbed'
import Maps from '../body/Maps/Maps'
import Hoome from '../body/home/Hoome'
import NewLayout from '../body/NewLayout/NewLayout'
import GetStartedPage from './home/getStartedPage';
import BuyergetStartedPage from './home/BuyergetStartedPage';
import Dashboard from '../body/Dashboard/Dashboard'
import BuyerDashboard from '../body/Dashboard/BuyerDashboard'
import Articles from '../body/Articles/Articles'
import ProtectedRoute from './ProtectedRoute';
import Resources from '../body/Resources/Resources'
function Body() {
    const auth = useSelector(state => state.auth)
    const { isLogged, isAdmin, isBuyer, isSeller } = auth
    return (
        <section>
            <Switch>
                <Route path="/" component={isLogged ? Hoome : AdminLogin} exact />
                <ProtectedRoute path="/home" component={Hoome} />
                <ProtectedRoute path="/resources" component={Resources} />
                <ProtectedRoute path="/sellerdashboard" component={Dashboard} />
                <ProtectedRoute path="/buyerdashboard" component={BuyerDashboard} />
                <ProtectedRoute path="/getstarted/seller" component={GetStartedPage} />
                <ProtectedRoute path="/getstarted/buyer" component={BuyergetStartedPage} />
                <ProtectedRoute path="/map" component={Maps} />
                <ProtectedRoute path="/new" component={NewLayout} />
                <Route path="/blog/:id" component={Articles} />
                <ProtectedRoute path="/instagram" component={InstaEmbed} />
                <ProtectedRoute path="/allvendors" component={VendorsPage} />
                <ProtectedRoute path="/search/vendors/notloggedin" component={Vendors} />
                <ProtectedRoute path="/search/apis/notloggedin" component={APIs} />
                <ProtectedRoute path="/search/usecases/notloggedin" component={Usecases} />
                <ProtectedRoute path="/search/successes/notloggedin" component={SuccessStories} />
                <ProtectedRoute path="/search/vendors" component={TabsVendor} />
                <ProtectedRoute path="/search/apis" component={TabsAPI} />
                <ProtectedRoute path="/search/usecases" component={TabsUsecase} />
                <ProtectedRoute path="/search/successes" component={TabsSuccess} />
                <ProtectedRoute path="/successstories/:TransformX_Success_Story_Id" component={Success} />
                <ProtectedRoute path="/usecases/:TransformX_Usecase_Id" component={Usecase} />
                <ProtectedRoute path="/apis/:TransformX_API_Id" component={API} />
                <ProtectedRoute path="/vendors/:TransformX_Vendor_Id" component={Vendor} />
                <ProtectedRoute path="/login" component={isLogged ? Hoome : Login} />
                <ProtectedRoute path="/register" component={isLogged ? Hoome : Register} />
                <ProtectedRoute path="/vendors" component={Vendors} />
                <ProtectedRoute path="/forgot_password" component={isLogged ? NotFound : ForgotPass} />
                <ProtectedRoute path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} />
                <ProtectedRoute path="/user/activate/:activation_token" component={ActivationEmail} />
                <ProtectedRoute path="/profile" component={isLogged ? Profile : Hoome} />
            </Switch>
        </section>
    )
}

export default Body
