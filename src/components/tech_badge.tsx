interface TechBadgeProps {
    label: string;
}

const TechBadge = ({label} : TechBadgeProps) => {
    return (
        <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/90 text-sm font-mono">
            {label}
        </span>
    )
}

export default TechBadge;