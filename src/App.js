import {
	Routes,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import { ProtectedLayout } from "./components/ProtectedLayout"
import { HomeLayout } from "./components/HomeLayout"
import { LoginPage } from "./pages/Login"
import { HomePage } from "./pages/Home"
// import { RegisterPage } from "./pages/Register"
import { ProfilePage } from "./pages/Profile"
import { SettingsPage } from "./pages/Settings"

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route element={<HomeLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Route>
			<Route path="/dashboard" element={<ProtectedLayout />}>
				<Route path="profile" element={<ProfilePage />} />
				<Route path="settings" element={<SettingsPage />} />
			</Route>
		</>
	)
)
