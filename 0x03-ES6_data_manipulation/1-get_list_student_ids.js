export default function getListStudentIds(arg) {
  if (Array.isArray(arg)) {
    return arg.map((arg) => arg.id);
  }
  return [];
}
