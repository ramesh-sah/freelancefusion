import React from "react";

const AnimatedDivider = () => {
    return (
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent animate-shimmer" />
    );
};

export default AnimatedDivider;