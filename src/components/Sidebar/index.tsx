import { createContext, useState, useRef } from 'react'
import { View } from 'react-native'
import { DrawerLayout } from 'react-native-gesture-handler'
import Colors from '../../config/Colors'
import { useAuth } from '../../contexts/AuthContext'
import Menu from './Menu'

const initial: any = {
    open: false,
    setOpen: (_val: any) => { },
    handleOpen: () => { },
    handleToggle: () => { },
}
const SidebarContext = createContext(initial)

const Provider = ({ children }: any) => {
    const auth = useAuth()
    const [open, setOpen] = useState(false)
    const drawer = useRef<any>(null)
    const handleDrawerSlide = (_status: any) => {
        // outputs a value between 0 and 1
        // console.log(status);
    }

    const handleOpen = () => {
        console.log("handleOpen")
        if (drawer.current) {
            if (drawer.current.openDrawer instanceof Function) {
                drawer.current.openDrawer()
                setOpen(open)
            }
        }
    }

    const handleToggle = () => {
        console.log("handleToggle")
        if (drawer.current) {
            if (open) {
                drawer.current.closeDrawer()
                setOpen(false)
            } else {
                drawer.current.openDrawer()
                setOpen(true)
            }
        }
    }

    return (
        <SidebarContext.Provider
            value={{
                open,
                setOpen,
                handleOpen,
                handleToggle,
            }}
        >
            {auth.data.isLogin ? <DrawerLayout
                ref={drawer}
                drawerWidth={300}
                drawerPosition={'left'}
                drawerType="front"
                drawerBackgroundColor={Colors.turquoise}
                renderNavigationView={() => (<Menu onToggle={handleToggle} />)}
                onDrawerSlide={handleDrawerSlide}
                onDrawerOpen={() => setOpen(true)}
                onDrawerClose={() => setOpen(false)}
            >
                {children}
            </DrawerLayout>: children}
        </SidebarContext.Provider>
    )
}

export { SidebarContext, Provider }
