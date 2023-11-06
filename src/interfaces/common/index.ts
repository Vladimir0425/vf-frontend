export type ImageType = File | null;

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
