//Joinus Component
import Image from 'next/image';
import Link from 'next/link';
import NikeLogo from "../assets/NikeLogo.png"

export default function JoinUsPage() {
  return (
    <div className="flex items-center justify-center min-h-screen mt-[50px] mb-[50px]">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src={NikeLogo} alt="Nike Logo" width={50} height={50} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center mb-6">
          BECOME A NIKE MEMBER
        </h1>

        {/* Paragraph */}
        <p className="text-center text-[#8D8D8D] text-sm mb-6">
          Create your Nike Member profile and get <br /> first access to the very best of Nike <br /> products, inspiration and community.        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* First Name Input */}
          <div>
            <input
              type="text"
              id="first-name"
              name="first-name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name Input */}
          <div>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </div>

          {/* Date of Birth Input */}
          <div>
            <input
              type="date"
              id="dob"
              name="dob"
              placeholder='Date'
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Birthday Reward Paragraph */}
          <p className="text-[#8D8D8D] text-sm mb-4">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          {/* Country Dropdown */}
          <div>
            <select
              id="country"
              name="country"
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Pakistan</option>
              <option value="india">India</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>

            </select>
          </div>

          {/* Gender Selection (Female and Male) */}

          <div className="flex space-x-4 mb-4">
            {/* male Div */}
            <div className="w-full sm:w-1/2 p-3 border-2 border-gray-300 rounded-md text-center">
              <span className="text-sm text-gray-700">Male</span>
            </div>

            {/* female Div */}
            <div className="w-full sm:w-1/2 p-3 border-2 border-gray-300 rounded-md text-center">
              <span className="text-sm text-gray-700">Female</span>
            </div>
          </div>

          {/* Checkbox and Paragraph */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
              />
              <label htmlFor="newsletter" className="text-sm text-[#8D8D8D]">
                Sign up for emails to get updates from Nike on <br /> products, offers, and your Member benefits.
              </label>
            </div>
          </div>

          {/* Terms and Conditions */}
          <p className="text-center text-sm text-[#8D8D8D] mb-6">
            By creating an account, you agree to Nike&apos;s <span className="underline">Privacy</span> <br /> <span className="underline">Policy</span> and <span className="underline">Terms of Use</span>.
          </p>

          {/* Join Us Button */}
          <Link href="/Joinus">  <button
            type="submit"
            className="w-full py-3 bg-black text-white text-lg font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Join Us
          </button></Link>
        </form>

        {/* Sign In Link */}
        <div className="text-center mt-6 text-sm text-[#8D8D8D]">
          <p>Already a Member? <Link href="/Signin" className="font-bold text-black underline">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
}
