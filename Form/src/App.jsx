import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    mode: ''
  })

  const [showPreview, setShowPreview] = useState(false);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("finally printing the data");
    console.log(formData);
    setShowPreview(true);
  }

  function handleEdit() {
    setShowPreview(false);
  }

  return (
    <div className="flex flex-col items-center mt-8 font-sans bg-gray-100 min-h-screen py-12">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">User Information Form</h2>
        {!showPreview ? (
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={changeHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={changeHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={changeHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={changeHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-- Select Country --</option>
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="London">London</option>
                <option value="Russia">Russia</option>
                <option value="New York">New York</option>
              </select>
            </div>
            <div>
              <label htmlFor="streetAddress" className="block text-gray-700 text-sm font-bold mb-2">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                placeholder="Enter your street address"
                value={formData.streetAddress}
                onChange={changeHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={changeHandler}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State / Province</label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter your state/province"
                  value={formData.state}
                  onChange={changeHandler}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div>
              <label htmlFor="zip" className="block text-gray-700 text-sm font-bold mb-2">Zip / Postal Code</label>
              <input
                type="text"
                name="zip"
                id="zip"
                placeholder="Enter your zip/postal code"
                value={formData.zip}
                onChange={changeHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="border-t border-gray-200 pt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">By Email</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="comments"
                    id="comments"
                    checked={formData.comments}
                    onChange={changeHandler}
                    className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="comments" className="ml-2 text-gray-700 text-sm">
                    Comments <span className="text-gray-500 block">Get notified when someone posts a comment.</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="candidates"
                    id="candidates"
                    checked={formData.candidates}
                    onChange={changeHandler}
                    className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="candidates" className="ml-2 text-gray-700 text-sm">
                    Candidates <span className="text-gray-500 block">Get notified when a candidate applies for a job.</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="offers"
                    id="offers"
                    checked={formData.offers}
                    onChange={changeHandler}
                    className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="offers" className="ml-2 text-gray-700 text-sm">
                    Offers <span className="text-gray-500 block">Get notified when a candidate accepts or rejects an offer.</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Push Notifications</label>
              <p className="text-gray-500 text-sm mb-2">These are delivered via SMS to your mobile phone.</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    id="everything"
                    value="everything"
                    checked={formData.mode === 'everything'}
                    onChange={changeHandler}
                    className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="everything" className="ml-2 text-gray-700 text-sm">Everything</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    id="sameAsEmail"
                    value="sameAsEmail"
                    checked={formData.mode === 'sameAsEmail'}
                    onChange={changeHandler}
                    className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="sameAsEmail" className="ml-2 text-gray-700 text-sm">Same as email</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    id="noPushNotifications"
                    value="noPushNotifications"
                    checked={formData.mode === 'noPushNotifications'}
                    onChange={changeHandler}
                    className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="noPushNotifications" className="ml-2 text-gray-700 text-sm">No Push Notifications</label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit & Preview
            </button>
          </form>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Preview</h2>
            <p className="mb-2"><strong className="font-bold">First Name:</strong> {formData.firstName}</p>
            <p className="mb-2"><strong className="font-bold">Last Name:</strong> {formData.lastName}</p>
            <p className="mb-2"><strong className="font-bold">Email:</strong> {formData.email}</p>
            <p className="mb-2"><strong className="font-bold">Country:</strong> {formData.country}</p>
            <p className="mb-2"><strong className="font-bold">Street Address:</strong> {formData.streetAddress}</p>
            <p className="mb-2"><strong className="font-bold">City:</strong> {formData.city}</p>
            <p className="mb-2"><strong className="font-bold">State / Province:</strong> {formData.state}</p>
            <p className="mb-2"><strong className="font-bold">Zip / Postal Code:</strong> {formData.zip}</p>
            <p className="mb-2"><strong className="font-bold">Comments:</strong> {formData.comments ? 'Yes' : 'No'}</p>
            <p className="mb-2"><strong className="font-bold">Candidates:</strong> {formData.candidates ? 'Yes' : 'No'}</p>
            <p className="mb-2"><strong className="font-bold">Offers:</strong> {formData.offers ? 'Yes' : 'No'}</p>
            <p className="mb-4"><strong className="font-bold">Push Notifications:</strong> {formData.mode}</p>
            <button
              onClick={handleEdit}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;