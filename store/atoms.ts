import { atom, selector } from "recoil";
export const eventYearAtom = atom({
    key:"eventYearAtom",
    default:2023
})
export const departmentYearAtom = atom({
    key:"departmentYearAtom",
    default:2023
})
export const eventSearchAtom = atom({
    key:"eventSearchAtom",
    default:''
})
export const departmentSearchAtom = atom({
    key:"departmentSearchAtom",
    default:''
})
