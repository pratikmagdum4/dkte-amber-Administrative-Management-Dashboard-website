// ClerkSidebar.jsx
// import { Sidebar, SidebarItem } from "./Sidebar";
import { SidebarItem ,Sidebar } from "../../../components/ui/SideBar"; 
import { Star, Award, Users } from "lucide-react";

export default function ClerkSidebar() {
    return (
        <Sidebar>
            <SidebarItem icon={<Star />} text="Student Achievements" />
            <SidebarItem icon={<Award />} text="Faculty Achievements" />
            <SidebarItem icon={<Users />} text="Club Reports" />
        </Sidebar>
    );
}
