import React from 'react';
import { cn } from "@/shared/lib/utils";
import { Container } from "@/components/shared/Container";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { User, ShoppingCart, ArrowRight } from "lucide-react";

const Header = () => {
    return (
        <header className={cn('border border-b')}>
            <Container className="flex item-center justify-between py-8">
                <div className="flex gap-4">
                    <Image src="/logo.png" alt="Logo" width={35} height={35}/>
                    <div >
                        <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                        <p className="text-sm text-gray-400 leading-3">вкусней некуда</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="flex items-center gap-2">
                        <User size={16}/>
                        Войти
                    </Button>
                    <div>
                        <Button className="group relative">
                            <b>500 р</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3"/>
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart classname="h-4 w-4 relative" strokeWidth={2}/>
                                <b>3</b>
                            </div>
                            <ArrowRight
                                size={20}
                                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                            />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
