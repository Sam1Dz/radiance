import React from 'react';

export type ComponentsChildrenReq = Readonly<{
  children: React.ReactNode;
}>;

export type ResponseType<T> = Readonly<{
  data: T;
  message: string;
}>;

export interface Topics {
  uid: string;
  selector: string;
  title: string;
  description?: string;
  topics?: Topics[];
}
