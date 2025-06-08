
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  text?: string;
  className?: string;
  gradient?: string;
}

const ImagePlaceholder = ({ 
  width = "w-full", 
  height = "h-64", 
  text = "Image Placeholder", 
  className,
  gradient = "from-gray-100 to-gray-200"
}: ImagePlaceholderProps) => {
  return (
    <div className={cn(
      width,
      height,
      `bg-gradient-to-br ${gradient}`,
      "rounded-xl flex items-center justify-center shadow-lg",
      className
    )}>
      <span className="text-gray-500 font-medium">{text}</span>
    </div>
  );
};

export default ImagePlaceholder;
