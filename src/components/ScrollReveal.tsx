'use client';

import React, { useState, useEffect, useRef, CSSProperties, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'flip' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  style?: CSSProperties;
  className?: string;
  triggerOnce?: boolean;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  distance = 50,
  threshold = 0.12,
  style = {},
  className = '',
  triggerOnce = true,
}: ScrollRevealProps) {
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  const getTransform = () => {
    if (inView) {
      return 'translate3d(0, 0, 0) scale(1) rotateX(0deg) rotateY(0deg)';
    }
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMobile && (direction === 'left' || direction === 'right')) {
      return `translate3d(0, 20px, 0)`;
    }
    switch (direction) {
      case 'left':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(${distance}px, 0, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'zoom':
        return `scale(0.88) translate3d(0, ${distance / 2}px, 0)`;
      case 'flip':
        return `perspective(1000px) rotateX(20deg) translate3d(0, ${distance}px, 0)`;
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
