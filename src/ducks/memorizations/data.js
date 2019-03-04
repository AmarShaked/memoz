import { generateId } from '../../helpers/id';

export default [
  {
    id: generateId(),
    title: 'C Major',
    memorization: [true, true, true, false],
  },
  {
    id: generateId(),
    title: 'G Major',
    memorization: [true, true, false],
  },
  {
    id: generateId(),
    title: 'D Major',
    memorization: [true, true, true, true, false],
  },
  {
    id: generateId(),
    title: 'A Major',
    memorization: [true, false],
  },
  {
    id: generateId(),
    title: 'E Major',
    memorization: [true, true, true, true, true, true, true, true, true, false],
  },
  {
    id: generateId(),
    title: 'A Minor',
    memorization: [true, true, true, true, true, true, true, false],
  },
  {
    id: generateId(),
    title: 'D Minor',
    memorization: [true, true, true, true, false],
  },
  {
    id: generateId(),
    title: 'G Minor',
    memorization: [true, true, true, true, true, true, true, true, true, true, true, true, false],
  },
];
