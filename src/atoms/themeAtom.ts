
import { atom } from 'jotai';
import { ThemeEnum } from '~enums';

const themeAtom = atom<ThemeEnum>(ThemeEnum.Light);

export default themeAtom;
