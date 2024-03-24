import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatAndDivideNumber = (num: number): string => {
  if (num >= 1000000) {
     const formattedNum = (num / 1000000).toFixed(1);
     return `${formattedNum}M`;
    } else if (num >= 10000) {
      // Use Intl.NumberFormat to format the number with a comma as the thousands separator
      const formattedNum = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2, // Ensure no decimal places
      }).format(num / 1000);
      return `${formattedNum}K`;
   } else {
      return num.toString();
   }
 };

export function formatDateRange([startDate, endDate]: [
  (string | undefined)?,
  (string | undefined)?
]): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  // Check if the input dates are valid
  const isValidDate = (dateString: string | undefined): boolean => {
    if (!dateString) {
      return true; // Treat undefined as a valid date
    }
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

  if (!isValidDate(startDate) || (endDate && !isValidDate(endDate))) {
    throw new Error("Invalid date format");
  }

  let result = new Date(startDate!).toLocaleDateString("en-GB", options);

  // Check if end date is provided and different from start date
  if (endDate && startDate !== endDate) {
    result += ` - ${new Date(endDate!).toLocaleDateString("en-GB", options)}`;
  }

  return result;
}

export const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
 });
