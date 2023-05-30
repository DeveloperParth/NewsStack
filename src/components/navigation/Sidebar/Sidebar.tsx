"use client";

import React from "react";
import { Button } from "@/components/common/Button";
import { PenIcon } from "@/components/icons/Pen";
import { LogoutIcon } from "../../icons/LogoutIcon";
import { ExploreIcon } from "../../icons/ExploreIcon";
import MenuItem from "./MenuItem";
import { InboxIcon } from "@/components/icons/InboxIcon";
import { SubscriptionIcon } from "@/components/icons/SubscriptionIcon";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { UserIcon } from "@/components/icons/UserIcon";
import { SettingsIcon } from "@/components/icons/SettingsIcon";

interface SidebarProps {}

const Sidebar = (props: SidebarProps) => {
  const [active, setActive] = React.useState("Explore");
  return (
    <aside className="w-[265px] border-r h-full fixed bg-white top-0 left-0 flex flex-col items-center pt-2 pb-8">
      <h1 className="text-xl mx-auto">
        New
        <div
          className="text-accent"
          style={{
            display: "inline-block",
            fontFamily: "oregano, cursive",
          }}
        >
          sS
        </div>
        tack
      </h1>
      <div className="flex flex-col gap-1 w-4/5 mt-7">
        {MenuData.map((item) => {
          if (item.devider) {
            return (
              <hr className="w-full border-gray-300" key={Math.random()} />
            );
          }
          return (
            <MenuItem
              key={item.label}
              label={item.label!}
              icon={item.icon!}
              isActive={active === item.label}
              onClick={() => setActive(item.label!)}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-2 w-4/5 mt-auto">
        <Button leftIcon={<PenIcon />}>Become a writer</Button>
        <Button leftIcon={<LogoutIcon />} variant="destructive">
          Logout
        </Button>
      </div>
    </aside>
  );
};

const MenuData = [
  {
    label: "Explore",
    icon: ExploreIcon,
  },

  {
    label: "Inbox",
    icon: InboxIcon,
  },
  {
    label: "Subscriptions",
    icon: SubscriptionIcon,
  },
  {
    label: "Favorites",
    icon: HeartIcon,
  },
  {
    devider: true,
  },
  {
    label: "My Account",
    icon: UserIcon,
  },
  {
    label: "Settings",
    icon: SettingsIcon,
  },
];

export default Sidebar;
