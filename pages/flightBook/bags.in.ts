export interface IBags {

    tapOnBagsDropdown(): Promise<void>;

    selectBags(bags:number[]): Promise<void>;

    tapOnContinueButton(): Promise<void>;
}