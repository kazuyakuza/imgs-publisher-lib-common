import { ErrorSeverity } from "./error-severity.enum";

export interface LogErrorInterface {
  id: string;

  service: string;

  severity: ErrorSeverity;

  message: string;

  details: any;

  occurred_at: Date;

  resolved: boolean;

  process_id: string;
}
