'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className,
      )}
      {...props}
    />
  );
}

function SeparatorText({
  text,
  overrideStyle,
  color = 'default',
  position = 'left',
}: {
  text: string;
  color: 'default' | 'foreground';
  position?: 'left' | 'center' | 'right';
  overrideStyle?: {
    separator?: string;
    base?: string;
    text?: string;
  };
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <Separator
          className={cn(
            color === 'foreground' && 'bg-foreground',
            overrideStyle?.separator,
          )}
        />
      </div>
      <div
        className={cn(
          'typography-label-sm md:typography-label-md relative px-6 font-medium xl:px-3',
          position === 'left'
            ? 'text-left'
            : position === 'right'
              ? 'text-right'
              : 'text-center',
          overrideStyle?.base,
        )}
      >
        <span
          className={cn(
            'bg-background border-1 px-2',
            color === 'foreground' ? 'border-foreground' : 'border-border',
            overrideStyle?.text,
          )}
        >
          {text}
        </span>
      </div>
    </div>
  );
}

export { Separator, SeparatorText };
