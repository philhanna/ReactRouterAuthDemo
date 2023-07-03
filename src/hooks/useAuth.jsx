import { createContext, useContext, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "./useLocalStorage"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null)
    const navigage = useNavigate()

    // Call this function when you want to authenticate the user
    const login = async (data) => {
        setUser(data)
        navigate("/profile")
    }

    // Call this function to log out logged in user
    const logout = () => {
        setUser(null)
        navigate("/", { replace: true })
    }

    const value = useMemo(
        () => ({ user, login, logout }), [user]
    )

    return
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}