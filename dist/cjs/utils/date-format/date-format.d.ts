declare function parseDate(date: null): null;
declare function parseDate(date: string): Date;
declare function parseDate(date: string | null): Date | null;
export { parseDate };
export declare const formatDate: (date: string | null) => string;
export declare const formatTime: (date: string | null) => string;
export declare const isFutureDate: (date: string | null) => boolean;
export declare const stringToDate: (dateStr: string, formatStr: string) => Date;
export declare const dateToString: (date: Date, formatStr: string) => string;
