// Ensure jQuery types are suitable with TS
import "jquery";

declare global {
  interface JQuery {
    /**
     * Initialize form validation on the selected form.
     * @param options Validation rules and settings
    */
    validate(options?: any): JQuery;

    valid(): boolean;
  }
}

export {};
