import React from "react";

interface Props {
  className?: string;
  fill?: string;
  stroke?: string;
}

const ReviewWriteIcon = ({ className, fill = "none", stroke = "#000000" }: Props) => {
  return (
    <svg className={className}  width="18" height="18" viewBox="0 0 18 18" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M8.32379 2.85277H4.05892C2.64567 2.85277 1.5 3.9984 1.5 5.41161V13.9412C1.5 15.3544 2.64567 16.5 4.05892 16.5H12.5887C14.0019 16.5 15.1476 15.3544 15.1476 13.9412L15.1476 9.67638M5.76487 12.2352L8.86826 11.6099C9.03301 11.5767 9.18429 11.4956 9.30309 11.3767L16.2503 4.42587C16.5834 4.09262 16.5832 3.55242 16.2498 3.21945L14.7782 1.74948C14.4449 1.41664 13.905 1.41687 13.572 1.74999L6.62407 8.70154C6.5055 8.82018 6.42454 8.97114 6.39131 9.13554L5.76487 12.2352Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ReviewWriteIcon;
