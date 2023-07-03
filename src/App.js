import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/Login"
import { HomePage } from "./pages/Home"
import { RegisterPage } from "./pages/Register"
import { ProfilePage } from "./pages/Profile"
import { SettingsPage } from "./pages/Settings"
import { ProtectedRoute } from "./components/ProtectedRoute"

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route
				path="/profile"
				element={
					<ProtectedRoute>
						<ProfilePage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/settings"
				element={
					<ProtectedRoute>
						<SettingsPage />
					</ProtectedRoute>
				}
			/>
		</Routes>
	)
}
