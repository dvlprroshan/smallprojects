// packege import
import type { ReactElement } from "react";

// local imports
import style from "@/styles/pages/Home.module.sass";
import Sidebar from "@/components/sections/global/Sidebar.section";
import MainDashboard from "@/components/sections/home/Maindashboard.section";

export default function Home(): ReactElement {
    return (
        <div className={style.root}>
            <Sidebar />
            <MainDashboard />
        </div>
    );
}
