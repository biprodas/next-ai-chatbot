"use client"

import * as React from "react"

import { 
  TbCamera, 
  TbChartBar, 
  TbDashboard, 
  TbDatabase, 
  TbFileDescription, 
  TbHelp, 
  TbInnerShadowTop, 
  TbListDetails, 
  TbReport, 
  TbSearch, 
  TbSettings, 
  TbUsers, 
  TbFileAi,
  TbFileWord,
  TbFolder,
} from "react-icons/tb";

import { NavDocuments } from "./nav-documents"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar"
import Link from "next/link";
import { HelpCircleIcon, SearchIcon, SquarePenIcon } from "lucide-react";
import { NavMain } from "./nav-main";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "New Chat",
      url: "#",
      icon: SquarePenIcon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Proof of concept example",
      url: "/chat/123",
    },
    {
      name: "Build app with nextjs and chadcui",
      url: "/chat/234",
    },
    {
      name: "What is the capital of France?",
      url: "/chat/345",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <TbInnerShadowTop className="size-5" />
                <span className="text-base font-semibold">Must Chat</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
