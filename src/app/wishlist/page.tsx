// app/wishlist/page.tsx (or wherever your Wishlist lives)
'use client';

import Image from 'next/image';
import codingCourse from '../../images/Best-Online-Coding-Courses.jpg';
import mathsCourse from '../../images/maths.jpg';
import calculasCourse from '../../images/mathematics-calculus-equations-9yzi8zcga0kzlfth.jpg';
import Footer from '../../components/footer';

const wishlistItems = [
  {
    id: 1,
    title: 'Low-code Course for Beginners',
    price: '$48.00',
    originalPrice: '$57.60',
    rating: '⭐ 4.8 (25)',
    lessons: '12 Lessons',
    duration: '4hrs 30 mins',
    image: codingCourse,
  },
  {
    id: 2,
    title: 'Advanced Maths for Engineering',
    price: '$60.00',
    originalPrice: '$75.00',
    rating: '⭐ 4.7 (40)',
    lessons: '18 Lessons',
    duration: '6hrs 15 mins',
    image: mathsCourse,
  },
  {
    id: 3,
    title: 'Advanced Calculus for High School Student',
    price: '$60.00',
    originalPrice: '$75.00',
    rating: '⭐ 4.7 (40)',
    lessons: '18 Lessons',
    duration: '6hrs 15 mins',
    image: calculasCourse,
  },
  {
    id: 4,
    title: 'End-to-End MLops with Databricks',
    price: '$48.00',
    originalPrice: '$57.60',
    rating: '⭐ 4.8 (25)',
    lessons: '12 Lessons',
    duration: '4hrs 30 mins',
    image: codingCourse,
  },
];

export default function Wishlist() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto p-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          My Wishlists
        </h1>

        <div className="space-y-6">
          {wishlistItems.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4"
            >
              <div className="flex-shrink-0">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="rounded-md w-full md:w-48 h-auto object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-start">
                  <h2 className="text-lg md:text-xl font-semibold">
                    {course.title}
                  </h2>
                  <span className="ml-auto text-red-500 text-2xl leading-none">
                    ❤️
                  </span>
                </div>
                <div className="flex flex-wrap items-center mt-2 gap-2">
                  <span className="text-green-600 font-bold text-base md:text-lg">
                    {course.price}
                  </span>
                  <span className="text-gray-500 line-through text-sm md:text-base">
                    {course.originalPrice}
                  </span>
                </div>
                <div className="flex flex-wrap text-gray-700 mt-2 gap-2 text-sm md:text-base">
                  <span>{course.rating}</span>
                  <span>•</span>
                  <span>{course.lessons}</span>
                  <span>•</span>
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
