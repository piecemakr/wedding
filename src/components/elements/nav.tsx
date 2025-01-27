'use client'

import { 
  useState, 
  useEffect } from "react"
import { TransitionLink } from "~/components/utils/transition-link"
import { Button } from "~/components/ui/button"
import NavLink from "~/components/ui/nav-link"
import NavDropdown from "~/components/ui/nav-dropdown"
import { Menu } from "lucide-react"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger } from "~/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { DialogTitle } from "@radix-ui/react-dialog"

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/schedule", label: "Schedule", route: "Schedule" },
    { href: "/our-story", label: "Our Story", route: "Our&nbsp;Story" },
    { href: "/wedding-party", label: "Wedding Party", route: "Wedding&nbsp;Party" },
    {
      label: "GUESTS",
      items: [
        { href: "/places-to-stay", label: "Places to Stay", route: "Places to Stay" },
        { href: "/things-to-do", label: "Things to Do", route: "Things to Do" },
        { href: "/faq", label: "FAQ", route: "FAQ" },
      ],
    },
    { href: "/registry", label: "Registry", route: "Registry" },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-20 flex items-center px-4 md:px-8 justify-between transition-all duration-500 ${
        isScrolled ? "bg-white text-charcoal shadow-2xl pt-4 pb-4" : "bg-transparent text-white pt-8 pb-10"
      }`}
    >
      <div
        className={`absolute inset-0 z-0 bg-linear-to-b from-black/50 to transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      <div className="relative container max-w-[1440px] mx-auto flex justify-between items-center z-10">
        <TransitionLink href="/" route="Home" className="flex flex-row items-center gap-4 text-3xl font-bold w-max">
          <p className="uppercase">Rosie & Troy</p>
          <p className="hidden sm:block font-sans font-medium text-lg pl-4 border-l-2">MAY 17, 2025</p>
        </TransitionLink>

        <div className="hidden lg:flex flex-row items-center gap-6 text-sm uppercase font-medium">
          {navItems.map((item, index) =>
            "items" in item ? (
              <NavDropdown key={index} label={item.label} items={item.items} isScrolled={isScrolled} />
            ) : (
              <NavLink key={index} href={item.href} route={item.route} isScrolled={isScrolled}>
                {item.label}
              </NavLink>
            ),
          )}
          <TransitionLink href="/rsvp" route="RSVP">
            <Button
              variant={isScrolled ? "default" : "secondary"}
              size="lg"
              className="font-sans transition-all duration-500"
            >
              RSVP
            </Button>
          </TransitionLink>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="min-h-6 min-w-5" />
              <span className="sr-only">Toggle Navigation Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[400px]">
            <VisuallyHidden asChild>
              <DialogTitle>Navigation Menu</DialogTitle>
            </VisuallyHidden>
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) =>
                "items" in item ? (
                  <NavDropdown
                    key={index}
                    label={item.label}
                    items={item.items}
                    isScrolled={true}
                    onItemClick={closeMenu}
                  />
                ) : (
                  <NavLink key={index} href={item.href} route={item.route} isScrolled={true} onClick={closeMenu}>
                    {item.label}
                  </NavLink>
                ),
              )}
              <TransitionLink href="/rsvp" route="RSVP" onClick={closeMenu}>
                <Button variant="default" size="lg" className="font-sans w-full">
                  RSVP
                </Button>
              </TransitionLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

