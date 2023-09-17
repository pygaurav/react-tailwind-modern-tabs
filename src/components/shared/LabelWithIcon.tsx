import { FC, ReactNode } from "react";

interface LabelPropsType {
  fontWeight?: string;
  padding?: string;
}

interface LabelWithIconTypes {
  iconComponent: ReactNode;
  label: string;
  labelProps?: LabelPropsType;
}

const LabelWithIcon: FC<LabelWithIconTypes> = ({
  iconComponent,
  label,
  labelProps,
}) => {
  let concatClasses = "";
  if (labelProps) {
    concatClasses = `${labelProps.fontWeight} ${labelProps.padding}`;
  }
  return (
    <div className="p-2">
      <span className="pr-2">{iconComponent}</span>
      <span className={concatClasses}>{label}</span>
    </div>
  );
};

export default LabelWithIcon;
