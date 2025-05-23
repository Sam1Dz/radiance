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
  description?: string;
  topics?: number;
  isDisabled?: boolean;
  className?: string;
}

export default function TopicCard({
  title,
  description,
  topics,
  isDisabled = false,
  className,
}: TopicCardProps) {
  return (
    <Card
      className={clsx(
        !isDisabled
          ? 'hover:bg-accent hover:border-accent-foreground cursor-pointer'
          : 'border-card cursor-not-allowed',
        className,
      )}
    >
      <CardHeader>
        <CardTitle className="typography-body-md md:typography-title-md font-mono font-semibold">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="typography-label-sm md:typography-label-sm font-medium">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      {topics && (
        <CardFooter className="flex justify-end">
          <Badge variant="secondary" className="typography-label-sm">
            {topics}&nbsp;Topik
          </Badge>
        </CardFooter>
      )}
    </Card>
  );
}
