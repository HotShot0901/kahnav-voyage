import { Icon } from "@iconify/react";
import { SideNavItem } from "./types"

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Home",
        path: "/",
        icon: <Icon icon="lucide:home" width="24" height="24" />
    },
    {
        title: "Sign-in",
        path: "/sign-in",
        icon: <Icon icon="lucide:user" width="24" height="24" />
    },
    {
        title: "Business",
        path: "/business",
        icon: <Icon icon="lucide:briefcase-business" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
            { title: "Join Us", path: "/driver/join" },
            { title: "Advertise", path: "/advert" }
        ]
    },
    {
        title: "About",
        path: "/about",
        icon: <Icon icon="lucide:info" width="24" height="24" />
    }
]
