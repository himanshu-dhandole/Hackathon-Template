import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full z-40">
      <div className="absolute inset-0 bg-white/[0.6] dark:bg-black/[0.6] backdrop-blur-xl" />
      <div className="relative mx-auto px-6 py-6">
        {/* Main content */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company + Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium tracking-tight">Team ARC</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Building the future of digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="link" className="text-sm text-gray-600 dark:text-gray-400 h-8 p-0 justify-start">Products</Button>
              <Button variant="link" className="text-sm text-gray-600 dark:text-gray-400 h-8 p-0 justify-start">Services</Button>
              <Button variant="link" className="text-sm text-gray-600 dark:text-gray-400 h-8 p-0 justify-start">Portfolio</Button>
              <Button variant="link" className="text-sm text-gray-600 dark:text-gray-400 h-8 p-0 justify-start">About</Button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Contact</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">contact@teamarc.com</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-gray-200 dark:bg-gray-800" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Team ARC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Button variant="link" className="text-sm text-gray-600 dark:text-gray-400 p-0">Privacy</Button>
            <Button variant="link" className="text-sm text-gray-600 dark:text-gray-400 p-0">Terms</Button>
            <Button variant="link" className="text-sm text-gray-600 dark:text-gray-400 p-0">Cookies</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;