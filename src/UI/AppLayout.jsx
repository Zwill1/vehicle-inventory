import { Outlet } from "react-router-dom"
import TopHeader from "../components/staticComponents/Top-Header"
import Navigation from "../components/staticComponents/Navigation"

function AppLayout() {
  return (
    <>
    <TopHeader />
    <Navigation />
    <Outlet />
    </>
  )
}

export default AppLayout