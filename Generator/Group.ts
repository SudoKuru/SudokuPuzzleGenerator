import { SudokuEnum, getCandidateIndex } from "./Sudoku";
/**
 * Constructed using initial value to fill Group with
 * Can check if Group contains a value
 * Can insert values
 */
export class Group{
    // Values are true if candidate is in group, false otherwise
    private candidates: boolean[];

    /**
     * Creates Group object given value to initial candidates to
     * @param initialValue - candidate initial value
     */
    constructor(initialValue: boolean) {
        this.candidates = new Array(SudokuEnum.ROW_LENGTH).fill(initialValue);
    }

    /**
     * Checks if Group contains candidate
     * @param candidateIndex - zero based index of candidate
     * @returns true if candidate at given index is in this Group
     */
    public contains(candidateIndex: number):boolean;

    /**
     * Checks if Group contains candidate
     * @param candidate - candidate
     * @returns true if candidate is in this Group
     */
    public contains(candidate: string):boolean;

    
    public contains(candidate: unknown):boolean {
        let candidateIndex:number = getCandidateIndex(candidate);

        if (this.candidates[candidateIndex] === true) {
            return true;
        }
        return false;
    }

    /**
     * Adds candidate to Group
     * @param candidate - candidate
     * @returns true if candidate was inserted, false if candidate was already in Group
     */
    public insert(candidate: string):boolean;

    /**
     * Adds candidate to Group
     * @param candidateIndex - zero based index of candidate
     * @returns true if candidate was inserted, false if candidate was already in Group
     */
    public insert(candidateIndex: number):boolean;
    
    public insert(candidate: unknown):boolean {
        let candidateIndex:number = getCandidateIndex(candidate);

        if (this.candidates[candidateIndex] === true) {
            return false;
        }
        this.candidates[candidateIndex] = true;
        return true;
    }
}