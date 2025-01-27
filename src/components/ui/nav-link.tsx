"use client"

import { TransitionLink } from "~/components/utils/transition-link"

interface NavLinkProps {
  href: string
  route: string
  children: React.ReactNode
  isScrolled: boolean
}

export default function NavLink({ href, route, children, isScrolled }: NavLinkProps) {
  return (
    <TransitionLink href={href} route={route} className="group relative">
      <p className="font-sans font-medium py-1">{children}</p>
      <span
        className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full ${
          isScrolled ? "bg-black" : "bg-white"
        }`}
      ></span>
    </TransitionLink>
  )
}

