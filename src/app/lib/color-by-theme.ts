import { AboutTheSkateboardsProps } from "../../slices/AboutTheSkateboards";

export const getBgColorByTheme = (
  theme: AboutTheSkateboardsProps["slice"]["primary"]["theme"],
) => {
  switch (theme) {
    case "Blue":
      return "bg-brand-blue text-white";
    case "Lime":
      return "bg-brand-lime";
    case "Navy":
      return "bg-brand-navy text-white";
    case "Orange":
      return "bg-brand-orange text-white";
    case "Pink":
      return "bg-brand-pink";
    case "Purple":
      return "bg-brand-purple text-white";
    case "Gray":
      return "bg-brand-gray";
    default:
      return "bg-brand-gray";
  }
};

export const getColorByTheme = (
  theme: AboutTheSkateboardsProps["slice"]["primary"]["theme"],
) => {
  switch (theme) {
    case "Blue":
      return "text-brand-blue";
    case "Lime":
      return "text-brand-lime";
    case "Navy":
      return "text-brand-navy";
    case "Orange":
      return "text-brand-orange";
    case "Pink":
      return "text-brand-pink";
    case "Purple":
      return "text-brand-purple";
    case "Gray":
      return "text-brand-gray";
    default:
      return "text-brand-gray";
  }
};
