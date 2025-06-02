"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "@/src/components/footer";

type FormData = {
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  gender: string;
  dob: Date | null;
  shortBio: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  email: string;
  newEmail: string;
};

export default function PersonalSettings() {
  const [activeTab, setActiveTab] = useState<"personal" | "security">(
    "personal"
  );

  const [formData, setFormData] = useState<FormData>({
    firstName: "Jonathon",
    lastName: "Smith",
    username: "studentjona",
    phoneNumber: "90154-91036",
    gender: "",
    dob: new Date(),
    shortBio: "Student at Harvard University",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    email: "jonathonsmith@gmail.com",
    newEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <main className="flex-1 flex justify-center items-center px-8 md:px-12 lg:px-20">
        <div className="max-w-4xl w-full bg-white dark:bg-gray-800 p-8 md:p-10 lg:p-12 rounded-lg shadow-lg">
          {/* Tabs */}
          <div className="flex border-b mb-6 text-lg">
            <button
              className={`w-1/2 text-center py-3 font-semibold ${
                activeTab === "personal"
                  ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("personal")}
            >
              Personal Settings
            </button>
            <button
              className={`w-1/2 text-center py-3 font-semibold ${
                activeTab === "security"
                  ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("security")}
            >
              Security Settings
            </button>
          </div>

          {activeTab === "personal" ? (
            <>
              <h1 className="text-2xl font-bold text-center mb-4 dark:text-white">
                Personal Settings
              </h1>
              <form className="space-y-5">
                {(
                  [
                    "firstName",
                    "lastName",
                    "username",
                    "phoneNumber",
                    "gender",
                  ] as (keyof FormData)[]
                ).map((field) => (
                  <div key={field} className="w-full">
                    <label className="block text-gray-700 dark:text-gray-200 text-lg mb-1">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    {field === "gender" ? (
                      <select
                        name={field}
                        className="w-full px-4 py-3 border rounded-md text-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        onChange={handleChange}
                        value={formData[field]}
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        name={field}
                        className="w-full px-4 py-3 border rounded-md text-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        onChange={handleChange}
                        value={
                          formData[field] instanceof Date
                            ? formData[field].toISOString().split("T")[0]
                            : formData[field] ?? ""
                        }
                      />
                    )}
                  </div>
                ))}

                {/* Date Picker */}
                <div className="w-full">
                  <label className="block text-gray-700 dark:text-gray-200 text-lg mb-1">
                    Date of Birth
                  </label>
                  <DatePicker
                    selected={formData.dob}
                    onChange={(date: Date | null) =>
                      setFormData({ ...formData, dob: date })
                    }
                    className="w-full px-4 py-3 border rounded-md text-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={100}
                  />
                </div>

                {/* Short Bio */}
                <div className="w-full">
                  <label className="block text-gray-700 dark:text-gray-200 text-lg mb-1">
                    Short Bio
                  </label>
                  <input
                    type="text"
                    name="shortBio"
                    className="w-full px-4 py-3 border rounded-md text-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    onChange={handleChange}
                    value={formData.shortBio}
                  />
                </div>

                <div className="text-center">
                  <button className="w-full lg:w-auto bg-blue-500 text-white px-6 py-3 rounded text-lg hover:bg-blue-600">
                    Update Profile
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-center mb-4 dark:text-white">
                Security Settings
              </h1>
              <form className="space-y-5">
                {(
                  [
                    "currentPassword",
                    "newPassword",
                    "confirmPassword",
                  ] as (keyof FormData)[]
                ).map((field) => (
                  <div key={field} className="w-full">
                    <label className="block text-gray-700 dark:text-gray-200 text-lg mb-1">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type="password"
                      name={field}
                      className="w-full px-4 py-3 border rounded-md text-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      onChange={handleChange}
                      value={
                        formData[field] instanceof Date
                          ? formData[field].toISOString().split("T")[0]
                          : formData[field] ?? ""
                      }
                    />
                  </div>
                ))}

                {/* Email Change */}
                <div className="w-full">
                  <label className="block text-gray-700 dark:text-gray-200 text-lg mb-1">
                    New Email Address
                  </label>
                  <input
                    type="email"
                    name="newEmail"
                    className="w-full px-4 py-3 border rounded-md text-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    onChange={handleChange}
                    value={formData.newEmail}
                  />
                </div>

                <div className="text-center">
                  <button className="w-full lg:w-auto bg-blue-500 text-white px-6 py-3 rounded text-lg hover:bg-blue-600">
                    Save Changes
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
