import React from 'react';
import Link from 'next/link';

/* COMPONENTS */
// shadcn/ui
import { Separator } from '@/components/ui/separator';
import { RippleButton } from '@/components/ui/ripple-button';
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';

/* TYPES */
import { Topics } from '@/type';

interface TopicCardProps extends Topics {
  className?: string;
}

export default function TopicCard({
  uid,
  title,
  description,
  topics,
  className,
}: TopicCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex-1">
        <CardTitle className="typography-body-md md:typography-title-md font-mono font-semibold">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="typography-label-sm font-medium">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      {topics && (
        <CardContent className="typography-label-sm font-normal">
          {topics.map(({ uid, title }, index) => {
            if (index < 3) {
              return (
                <React.Fragment key={uid}>
                  <Separator />
                  <p className="py-1">{title}</p>
                </React.Fragment>
              );
            }
          })}
          {topics.length > 3 && (
            <React.Fragment>
              <Separator />
              <p className="py-1 text-right">
                ...dan <strong>{topics.length - 3} Topik</strong> lainnya
              </p>
            </React.Fragment>
          )}
        </CardContent>
      )}
      <CardFooter>
        <Link passHref href={`/topic/${uid}`} className="w-full">
          <RippleButton className="w-full cursor-pointer">
            Pelajari Topik!
          </RippleButton>
        </Link>
      </CardFooter>
    </Card>
  );
}
