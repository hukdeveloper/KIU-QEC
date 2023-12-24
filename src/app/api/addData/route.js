import { NextResponse } from "next/server";
import QEC from "../../../models/QEC";
import dbConnect from "../../../lib/dbConnect";

export async function POST(req) {
  const { campus, department, teacher, subject, reviews } = await req.json();

  try {
    await dbConnect();
    const response = await QEC.insertMany([
      {
        campus: "Main",
        department: "Department of Computer Science",
        teacher: "Batool Sultan",
        subject: "Introduction to Networks",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 17,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Medicine",
        teacher: "Imran Sultan",
        subject: "Introduction to Programming",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Chemistry",
        teacher: "Amina Raza",
        subject: "Advanced Programming",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 18,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Sociology",
        teacher: "Batool Raza",
        subject: "Advanced Machine Learning",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of History",
        teacher: "Amina Raza",
        subject: "Advanced Machine Learning",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Communication Studies",
        teacher: "Ahmed Bano",
        subject: "Fundamentals of Machine Learning",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 17,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Communication Studies",
        teacher: "Imran Khattak",
        subject: "Introduction to Machine Learning",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 20,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Mathematics",
        teacher: "Amina Khattak",
        subject: "Advanced Machine Learning",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 16,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Law",
        teacher: "Ahmed Raza",
        subject: "Introduction to Networks",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Computer Science",
        teacher: "Imran Bano",
        subject: "Advanced Networks",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Physics",
        teacher: "Ahmed Khattak",
        subject: "Principles of Programming",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 16,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Psychology",
        teacher: "Amina Ahmed",
        subject: "Introduction to Machine Learning",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Psychology",
        teacher: "Imran Sultan",
        subject: "Introduction to Programming",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Business Administration",
        teacher: "Khan Ahmed",
        subject: "Principles of Bioinformatics",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Economics",
        teacher: "Amina Khattak",
        subject: "Introduction to Bioinformatics",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 19,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Education",
        teacher: "Batool Sultan",
        subject: "Fundamentals of Data Structures",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 20,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Business Administration",
        teacher: "Ahmed Bano",
        subject: "Fundamentals of Networks",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 15,
              Agree: 1,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Medicine",
        teacher: "Khan Sultan",
        subject: "Fundamentals of Bioinformatics",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 19,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Fine Arts",
        teacher: "Batool Raza",
        subject: "Advanced Data Structures",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 18,
              Agree: 0,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Psychology",
        teacher: "Imran Raza",
        subject: "Principles of Data Structures",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 15,
              Agree: 3,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Chemistry",
        teacher: "Ahmed Raza",
        subject: "Introduction to Machine Learning",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 20,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Fine Arts",
        teacher: "Ahmed Bano",
        subject: "Fundamentals of Networks",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 19,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Linguistics",
        teacher: "Batool Ahmed",
        subject: "Fundamentals of Programming",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 15,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Communication Studies",
        teacher: "Imran Ahmed",
        subject: "Advanced Data Structures",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 16,
              Agree: 4,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
      {
        campus: "Main",
        department: "Department of Linguistics",
        teacher: "Amina Bano",
        subject: "Fundamentals of Machine Learning",
        reviews: [
          {
            quiz: "The Instructor is prepared for each class and meets course objects",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was responsive to student needs and provides additional material",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor integrates theoretical course with real-world applications",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor maintains an environment that is conducive to learning",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor shows respect towards students and encourages class participation",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor is fair in examinations",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor was available during the specified office hours for consultations",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor had been regular throughout the course and takes classes as per schedule",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor arrives on time and leaves class on time",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor is efficiently utilizing time in class",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor demonstrates knowledge of the subject",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The course material was well organized to achieve learning outcomes",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The Instructor communicates subject matter effectively",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "Course outline/content is provided well in time by the instructor",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor supervised interactive and group formation/discussion",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
          {
            quiz: "The instructor gave timely feedback on quiz, assignment and test etc.",
            count: {
              "Strongly Agree": 18,
              Agree: 2,
              Disagree: 2,
              "Strongly Disagree": 0,
            },
          },
        ],
      },
    ]);
    // await response.save();
    return new NextResponse(response, {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
}
