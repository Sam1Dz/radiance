import { clsx } from 'clsx';

/* COMPONENTS */
// shadcn/ui
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface TopicCardProps {
  title: string;
  description: string;
  topics?: number;
  className?: string;
}

export default function TopicCard({
  title,
  description,
  topics,
  className,
}: TopicCardProps) {
  return (
    <Card
      className={clsx(
        'hover:bg-accent hover:border-accent-foreground cursor-pointer',
        className,
      )}
    >
      <CardHeader>
        <CardTitle className="typography-body-md md:typography-title-md font-mono font-semibold">
          {title}
        </CardTitle>
        <CardDescription className="typography-label-sm md:typography-label-sm font-medium">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Badge variant="secondary" className="typography-label-sm">
          {topics}&nbsp;Topik
        </Badge>
      </CardFooter>
    </Card>
  );
}
