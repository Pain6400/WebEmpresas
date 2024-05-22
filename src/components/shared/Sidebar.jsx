import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'
import SidebarLinkGroup from './SidebarLinkGroup';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	return (
		<div className="bg-neutral-900 w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
				<FcBullish fontSize={24} />
				<span className="text-neutral-200 text-lg">OpenShop</span>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
    const { pathname } = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const classPath = classNames(
        pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
        linkClass
    );

    return (
        <div>
            <div className={classPath + " flex items-center justify-between"} onClick={toggleExpand}>
                <div className="flex items-center">
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.label}</span>
                </div>
                {link.children && (
                    <div className="flex shrink-0 ml-2">
                        <span className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400">
                            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </div>
                )}
            </div>
            {isExpanded && link.children && (
                <div className="ml-4">
                    {link.children.map((child) => (
                        <NavLink
                            key={child.key}
                            to={child.path}
                            className={classNames(
                                pathname === child.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
                                linkClass
                            )}
                        >
                            <span className="text-xl">{child.icon}</span>
                            {child.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
}
