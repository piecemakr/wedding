'use client'

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { TransitionLink } from "~/components/utils/transition-link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"

interface NavDropdownProps {
  label: string
  items: { href: string; label: string; route: string }[]
  isScrolled: boolean
}

export default function NavDropdown({ label, items, isScrolled }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="group relative font-sans font-medium py-1 flex items-center gap-1">
        {label} <ChevronDown className="h-4 w-4" />
        <span
          className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full ${
            isScrolled ? "bg-black" : "bg-white"
          }`}
        ></span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 p-2 rounded-md bg-white">
        {items.map((item) => (
          <DropdownMenuItem key={item.href} className="p-0">
            <TransitionLink
              href={item.href}
              route={item.route}
              className={`block w-full px-4 py-2 text-sm font-sans font-medium transition-colors duration-300 ${
                isScrolled ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/20"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </TransitionLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

