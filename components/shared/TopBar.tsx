import React from 'react';
import { Container } from "@/components/shared/Container";
import Categories from "@/components/shared/Categories";
import SortPopup from "@/components/shared/SortPopup";
import { cn } from "@/shared/lib/utils";

const TopBar = ({ className }) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className="flex items-center justify-between ">
                <Categories />
                <SortPopup />
            </Container>
        </div>
    );
};

export default TopBar;
