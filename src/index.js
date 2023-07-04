import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, RouterProvider } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { router } from "./App"

const theme = createTheme({
    palette: {
      primary: { main: "#3a34d2" }
    }
  })

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>
)
