"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useMobile } from "@/src/hooks/use-mobile";
import { ModeToggle } from "@/src/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

export function MobileNav() {
  const pathname = usePathname();
  const isMobile = useMobile();
  const [open, setOpen] = React.useState(false);

  const routes = [
    {
      label: "Main",
      items: [
        {
          href: "/",
          label: "Home",
          active: pathname === "/",
        },
        {
          href: "/courses",
          label: "Courses",
          active: pathname === "/courses",
        },
        {
          href: "/live-classes",
          label: "Live Classes",
          active: pathname === "/live-classes",
        },
        {
          href: "/recorded-classes",
          label: "Recorded Classes",
          active: pathname === "/recorded-classes",
        },
      ],
    },
    {
      label: "Content",
      items: [
        {
          href: "/blog",
          label: "Blog",
          active: pathname === "/blog",
        },
        {
          href: "/discussion-forum",
          label: "Discussion Forum",
          active: pathname === "/discussion-forum",
        },
        {
          href: "/quiz-contest",
          label: "Quiz Contest",
          active: pathname === "/quiz-contest",
        },
      ],
    },
    {
      label: "Coaching",
      items: [
        {
          href: "/become-coach",
          label: "Become a Coach",
          active: pathname === "/become-coach",
        },
        {
          href: "/coach-guidelines",
          label: "Coach Guidelines",
          active: pathname === "/coach-guidelines",
        },
        {
          href: "/one-on-one",
          label: "1-on-1 Consulting",
          active: pathname === "/one-on-one",
        },
        {
          href: "/book-session",
          label: "Book a Session",
          active: pathname === "/book-session",
        },
      ],
    },
    {
      label: "Company",
      items: [
        {
          href: "/about",
          label: "About Us",
          active: pathname === "/about",
        },
        {
          href: "/contact",
          label: "Contact",
          active: pathname === "/contact",
        },
        {
          href: "/faq",
          label: "FAQ",
          active: pathname === "/faq",
        },
        {
          href: "/membership",
          label: "Membership",
          active: pathname === "/membership",
        },
      ],
    },
  ];

  if (!isMobile) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* <SheetTrigger asChild className="md:hidden absolute top-4 z-50">
        <Button
          className="bg-transparent p-0 m-0 shadow-none"
          variant="ghost"
          size="icon"
        >
          <Menu className="h-5 w-5 text-white" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger> */}

      <SheetContent side="left" className="p-0 w-[280px]">
        <SheetHeader className="px-4 pt-4">
          <SheetTitle className="text-left">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <span className="font-bold text-xl">
                <span className="text-primary">Meta</span>
                <span>Match</span>
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          <div className="p-4">
            {routes.map((section) => (
              <div key={section.label} className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  {section.label}
                </h4>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block py-2 px-3 rounded-md text-sm",
                        item.active
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <ModeToggle />
            <div className="flex gap-2">
              <Link href="/auth/login" onClick={() => setOpen(false)}>
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register" onClick={() => setOpen(false)}>
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
