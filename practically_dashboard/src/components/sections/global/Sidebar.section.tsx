// package import
import type { ReactElement, FunctionComponent } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { GiNotebook } from "react-icons/gi";
import { IoMdCodeWorking } from "react-icons/io";
import { cloneDeep } from "lodash";

// local imports
import style from "@/styles/sections/Sidebar.section.module.sass";

type SidebarProps = {};

type SidebarMenuType = {
    title: string;
    icon: string | null | ReactElement;
    subMenu?: Array<SidebarMenuType>;
    active?: boolean;
    isExpanded?: boolean;
};

const Sidebar: FunctionComponent<
    SidebarProps
> = ({}: SidebarProps): ReactElement => {
    const [sidebarMenu, setSidebarMenu] = useState<SidebarMenuType[]>([
        { title: "Home", icon: <FaHome />, active: true, isExpanded: false },
        {
            title: "Subjects",
            icon: <ImBooks />,
            subMenu: [
                { title: "Math", icon: null },
                { title: "Chemistry", icon: null },
                { title: "Physics", icon: null },
                { title: "Computer", icon: null },
                { title: "English", icon: null },
            ],
            isExpanded: false,
        },
        { title: "Study Plan", icon: <GiNotebook />, isExpanded: false },
        {
            title: "Coding",
            icon: <IoMdCodeWorking />,
            subMenu: [
                { title: "C++", icon: null },
                { title: "Java", icon: null },
                { title: "Python", icon: null },
                { title: "Rust", icon: null },
                { title: "Dart", icon: null },
                { title: "GoLang", icon: null },
            ],
            isExpanded: false,
        },
    ]);
    const getMenuListElement = (menuList: SidebarMenuType[]) => (
        <ul>
            {menuList.map((item: SidebarMenuType, index) => (
                <li
                    key={index}
                    className={`${item.active ? style.menu_is_active : ""} ${
                        item.isExpanded ? style.menu_is_expanded : ""
                    }`}
                    onClick={(e: any) => {
                        let indexOfCurrentClicked = sidebarMenu.findIndex(
                            (menuItem: SidebarMenuType) =>
                                menuItem.subMenu &&
                                menuItem.title.toLowerCase() ===
                                    item.title.toLowerCase()
                        );
                        if (indexOfCurrentClicked !== -1) {
                            setSidebarMenu((prevState: SidebarMenuType[]) => {
                                let tempVar = cloneDeep(prevState);
                                tempVar[indexOfCurrentClicked].isExpanded =
                                    !prevState[indexOfCurrentClicked]
                                        .isExpanded;
                                return tempVar;
                            });
                        }
                    }}
                >
                    <div className={style.wrapper}>
                        <span className={style.menu_item_icon}>
                            {item.icon ?? ""}
                        </span>
                        <span className={style.menu_item_text}>
                            {item.title}
                        </span>
                        <span className={style.menu_item_submenu_toggler}>
                            {item.subMenu ? (
                                item.isExpanded ? (
                                    <AiFillCaretDown />
                                ) : (
                                    <AiFillCaretRight />
                                )
                            ) : (
                                ""
                            )}
                        </span>
                    </div>
                    {item.subMenu?.length > 0 &&
                        getMenuListElement(item.subMenu)}
                </li>
            ))}
        </ul>
    );

    // final sidebar template
    return (
        <div className={style.sidebar}>
            {/* brand logo element */}
            <div className={style.brand_logo}>
                <Link href="/">
                    <a>
                        <Image
                            // INFO: image original size (218px x 53px)
                            height={Math.round(53 * 0.5)}
                            width={Math.round(218 * 0.5)}
                            src="/assets/brand_logo.png"
                            // TODO: add alt for better SEO
                            alt="brand_logo"
                        />
                    </a>
                </Link>
            </div>
            {/* menu list element */}
            <div className={style.menuList}>
                {getMenuListElement(sidebarMenu)}
            </div>
            {/* app stores btns element */}
            <div className={style.app_store_btns}>
                <div className={style.txt}>Download our mobile app</div>
                <div className={style.img}>
                    {/* TODO: add link of apple store */}
                    <Link href="#links_of_apple_store">
                        <a>
                            <Image
                                src="/assets/apps_on_apple_store.png"
                                // Info: image original size (140px x 44px)
                                height={Math.round(44 * 0.5)}
                                width={Math.round(140 * 0.5)}
                                // TODO: add alt for better SEO
                                alt="app_on_apple_store"
                            />
                        </a>
                    </Link>
                    {/* TODO: add link of android store */}
                    <Link href="#links_of_android_store">
                        <a>
                            <Image
                                src="/assets/apps_on_android_store.png"
                                // Info: image original size (140px x 44px)
                                height={Math.round(44 * 0.5)}
                                width={Math.round(140 * 0.5)}
                                // TODO: add alt for better SEO
                                alt="app_on_android_store"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
