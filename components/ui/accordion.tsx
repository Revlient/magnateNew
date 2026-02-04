"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
    activeItem: string | undefined;
    setActiveItem: (value: string | undefined) => void;
}>({
    activeItem: undefined,
    setActiveItem: () => { },
});

export function Accordion({
    children,
    type = "single",
    collapsible = true,
    className,
}: {
    children: React.ReactNode;
    type?: "single" | "multiple";
    collapsible?: boolean;
    className?: string;
}) {
    const [activeItem, setActiveItem] = React.useState<string | undefined>(undefined);

    return (
        <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
            <div className={cn("space-y-4", className)}>{children}</div>
        </AccordionContext.Provider>
    );
}

export function AccordionItem({
    value,
    children,
    className,
}: {
    value: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("border-b border-zinc-200 dark:border-zinc-800", className)}>
            {React.Children.map(children, (child) => {
                // Pass value prop to children if they are valid elements
                if (React.isValidElement(child)) {
                    // @ts-ignore
                    return React.cloneElement(child, { value });
                }
                return child;
            })}
        </div>
    );
}

export function AccordionTrigger({
    children,
    className,
    value,
}: {
    children: React.ReactNode;
    className?: string;
    value?: string;
}) {
    const { activeItem, setActiveItem } = React.useContext(AccordionContext);
    const isOpen = activeItem === value;

    return (
        <button
            onClick={() => setActiveItem(isOpen ? undefined : value)}
            className={cn(
                "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline text-left text-zinc-900 dark:text-white",
                className
            )}
        >
            {children}
            <ChevronDown
                className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200 text-zinc-500",
                    isOpen && "rotate-180"
                )}
            />
        </button>
    );
}

export function AccordionContent({
    children,
    className,
    value,
}: {
    children: React.ReactNode;
    className?: string;
    value?: string;
}) {
    const { activeItem } = React.useContext(AccordionContext);
    const isOpen = activeItem === value;

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className={cn("pb-4 pt-0 text-sm text-zinc-600 dark:text-zinc-400", className)}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
