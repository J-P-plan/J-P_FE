import React from "react";

interface Props {
  className?: string;
  fill?: string;
  stroke?: string;
}

const LocationIcon = ({ className, fill = "none", stroke = "#1A1A1A" }: Props) => {
  return (
    <svg className={className}  width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.6C12 21.6 19.513 14.9218 19.513 9.91307C19.513 5.76373 16.1493 2.40002 12 2.40002C7.85064 2.40002 4.48694 5.76373 4.48694 9.91307C4.48694 14.9218 12 21.6 12 21.6Z" stroke={stroke} strokeWidth="2"/>
      <path d="M14.4003 9.60018C14.4003 10.9257 13.3258 12.0002 12.0003 12.0002C10.6748 12.0002 9.60029 10.9257 9.60029 9.60018C9.60029 8.27469 10.6748 7.20018 12.0003 7.20018C13.3258 7.20018 14.4003 8.27469 14.4003 9.60018Z" stroke={stroke} strokeWidth="2"/>
    </svg>
  );
};

export default LocationIcon;
