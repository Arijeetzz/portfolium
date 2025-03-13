
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  delay?: number;
}

const AnimatedHeading = ({ 
  children, 
  tag = 'h2', 
  className,
  delay = 0 
}: AnimatedHeadingProps) => {
  const Tag = tag;
  
  return (
    <div className="relative overflow-hidden">
      <Tag 
        className={cn(
          "relative z-10 inline-block",
          "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary",
          "after:animate-reveal-right",
          className
        )}
        style={{
          animationDelay: `${delay}ms`,
        }}
      >
        {children}
      </Tag>
    </div>
  );
};

export default AnimatedHeading;
