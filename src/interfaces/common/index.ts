export type ImageType = File | null;
export type WeekdayType =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'
  | 'None';

export interface ITableColumn {
  title: string;
  name: string;
  width?: number;
  cell?: (row: any) => React.ReactNode;
  expand?: (row: any) => React.ReactNode;
}

export interface IRange {
  from: Date;
  to: Date;
}

export interface GetInfinitePagesInterface<T> {
  nextId?: number;
  previousId?: number;
  data: T;
  count: number;
}
