import React from 'react';
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = ({ isLoggedIn = false, userInitial = "A" }) => {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-white/[0.6] dark:bg-black/[0.6] backdrop-blur-xl" />
      <div className="relative mx-auto px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-lg font-medium tracking-tight text-black dark:text-white">
              Team ARC
            </span>
          </div>

          {/* Center Navigation */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-1 rounded-full bg-gray-100/90 dark:bg-gray-900/90 p-1">
              <Button variant="ghost" className="rounded-full px-4 h-8 text-sm font-medium transition-colors hover:bg-white dark:hover:bg-gray-800">
                Home
              </Button>
              <Button variant="ghost" className="rounded-full px-4 h-8 text-sm font-medium transition-colors hover:bg-white dark:hover:bg-gray-800">
                About
              </Button>
              <Button variant="ghost" className="rounded-full px-4 h-8 text-sm font-medium transition-colors hover:bg-white dark:hover:bg-gray-800">
                Contact
              </Button>
              <Button variant="ghost" className="rounded-full px-4 h-8 text-sm font-medium transition-colors hover:bg-white dark:hover:bg-gray-800">
                Info
              </Button>
            </div>
          </div>

          {/* Auth Section */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer transition-transform hover:scale-105">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-medium">
                    {userInitial}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 mt-2">
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-red-600">Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                className="text-sm font-medium px-4 h-8 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                Sign in
              </Button>
              <Button 
                className="text-sm font-medium px-4 h-8 rounded-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;