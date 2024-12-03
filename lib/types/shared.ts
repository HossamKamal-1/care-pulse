import { ZodFormattedError } from 'zod';

export type Gender = 'female' | 'male' | 'other';
export type RequestNetworkError = {
  code: number;
  message: string;
  type?: string;
};
export type ResponseData<
  TSchemaValues extends Record<string, unknown>,
  TData
> = Promise<
  | {
      success: false;
      error: ZodFormattedError<TSchemaValues, string> | RequestNetworkError;
    }
  | { success: true; user: TData }
>;
