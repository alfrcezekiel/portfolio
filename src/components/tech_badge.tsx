import { useTheme } from '@/context/use-theme';

interface TechBadgeProps {
    label: string;
}

const TechBadge = ({ label }: TechBadgeProps) => {
    const { isDark } = useTheme();
    const text = isDark ? "text-white/80" : "text-black/80";
    const bg = isDark
        ? "backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
        : "backdrop-blur-md border border-black/10 bg-gradient-to-br from-black/5 to-transparent";

    return (
        <span className={`px-3 py-1 rounded-full ${bg} ${text} text-sm font-mono`}>
            {label}
        </span>
    )
}

export default TechBadge;