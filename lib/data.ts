type Course = {
  id: string;
  title: string;
  desc: string;
  date: Date;
};

let courses: Course[] = [];

//handlers
export const getCourses = () => courses;

export const getById = (id:string) => {
    return courses.find((course) => course.id === id)
}

export const addCourse = (course: Course) => {
  courses.push(course);
};

export const deleteCourse = (id: string) => {
  courses = courses.filter((course) => course.id !== id);
};

export const updateCourse = (id: string, title: string, desc: string) => {
  const course = courses.find((course) => course.id === id);

  if (course) {
    course.title = title;
    course.desc = desc;
  } else {
    throw new Error("Course Not Found!!!");
  }
};
