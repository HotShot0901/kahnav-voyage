import { Icon } from "@iconify/react";
import { SideNavItem } from "./types"

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Home",
        path: "/",
        icon: <Icon icon="lucide:home" width="24" height="24" />
    },
    {
        title: "Projects",
        path: "/projects",
        icon: <Icon icon="lucide:folder" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
            { title: "All", path: "/projects" },
            { title: "Web Design", path: "/projects/web-design" }
        ]
    },
    {
        title: "About",
        path: "/about",
        icon: <Icon icon="lucide:user" width="24" height="24" />
    }
]
