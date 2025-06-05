
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true, 
  className = "",
  titleClassName = "",
  subtitleClassName = ""
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 md:mb-16 lg:mb-20 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl text-gray-600 max-w-3xl ${centered ? "mx-auto" : ""} leading-relaxed ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
