import { cn } from '@/lib/utils';
import { InView } from 'react-intersection-observer';

export default function InViewPage({ height = 'h-[calc(100vh-25rem)]', onView }: { onView: (inView: boolean) => void, height?: string }) {
    return (
        <>
            <InView threshold={0.5} className={cn("absolute top-48 w-full pointer-events-none", height)} onChange={(inView) => onView(inView)} />
        </>
    )
}