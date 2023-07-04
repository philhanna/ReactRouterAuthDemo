import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	defer,
} from "react-router-dom"
import { ProtectedLayout } from "./components/ProtectedLayout"
import { HomeLayout } from "./components/HomeLayout"
import { LoginPage } from "./pages/Login"
import { HomePage } from "./pages/Home"
import { ProfilePage } from "./pages/Profile"
import { SettingsPage } from "./pages/Settings"
import { AuthLayout } from "./components/AuthLayout"

const getUserData = () =>
	new Promise((resolve) =>
		setTimeout(() => {
			const user = window.localStorage.getItem("user")
			resolve(user)
		}, 3000)
	)

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			element={<AuthLayout />}
			loader={() => defer({ userPromise: getUserData() })}
		>
			<Route element={<HomeLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Route>
			<Route path="/dashboard" element={<ProtectedLayout />}>
				<Route path="profile" element={<ProfilePage />} />
				<Route path="settings" element={<SettingsPage />} />
			</Route>
		</Route>
	)
)
