// package import
import type { FunctionComponent, ReactElement } from "react";
// import {} from "react";
import { BsCameraFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { SiGooglemessages } from "react-icons/si";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
// local imports
import style from "@/styles/sections/pages/home/MainDashboard.section.module.sass";

type MainDashboardProps = {};

const SearchBox: FunctionComponent = (): ReactElement => {
    return (
        <div className={style.search_box}>
            <div className={style.search_box_icon}>
                <GoSearch />
            </div>
            <input type="text" placeholder="Search" />
        </div>
    );
};

const MainDashBoard: FunctionComponent<
    MainDashboardProps
> = ({}: MainDashboardProps): ReactElement => {
    return (
        <div className={style.main_dashboard}>
            <div className={style.header_nav}>
                <SearchBox />
                <div className={style.header_nav_btn_group}>
                    <div
                        className={`${style.hn_btn_item} ${style.hn_btn_camera}`}
                    >
                        <BsCameraFill />
                    </div>
                    <div className={style.hn_btn_item}>
                        <SiGooglemessages />
                    </div>
                    <div className={`${style.hn_btn_item} `}>
                        <IoMdNotifications />
                        <span className={style.hn_btn_item_label}>10+</span>
                    </div>
                    <div
                        className={`${style.hn_btn_item} ${style.hn_btn_profile}`}
                    >
                        <FaUserCircle />
                        <span>Profile Name</span>
                    </div>
                </div>
            </div>
            <div className={style.top_banner}>
                <div className={style.banner_img}>
                    <Image
                        src="/assets/banner_image.png"
                        width={827}
                        height={236}
                    />
                </div>
                <div className={style.banner_navigation}>
                    <div
                        className={style.banner_navigation_item}
                        style={{ opacity: 1 }}
                    ></div>
                    <div className={style.banner_navigation_item}></div>
                    <div className={style.banner_navigation_item}></div>
                </div>
            </div>
        </div>
    );
};
export default MainDashBoard;
