export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(({ location }) => location === city)
    .map((student) => {
      const newGrade = newGrades.find(({ studentId }) => studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
