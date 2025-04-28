import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [formData, setFormData] = useState( {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  commentsNotification: false,
  candidatesNotification: false,
  otherNotification: false,
  mode: "",
  favCar: ""
} );

 const [showPreviewButton, setShowPreviewButton] = useState(false);
 const [submittedData, setSubmittedData] = useState("");
 const [showPreviewModal, setShowPreviewModal] = useState(false);

 console.log(formData);


 function changeHandler(event){
  const {name, value, checked, type} = event.target
   setFormData(prevFormData => {
     return {
       ...prevFormData,
      [name]: type === "checkbox" ? checked : value
      };
    });
}

function submitHandler(event){
  event.preventDefault();
  setSubmittedData(formData);
  setShowPreviewButton(true);
  console.log("Data saved!");
}

function previewHandler() {
  setShowPreviewModal(true);
}

function closePreviewModal() {
  setShowPreviewModal(false);
}


 return (
  <div className='bg-gray-100 min-h-screen flex justify-center items-center py-10'>
     <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-xl relative'>
 <form onSubmit={submitHandler} className='space-y-4'>
  <h2 className='text-2xl font-bold text-gray-800 mb-6'>User Details</h2>
  <div>
  <label htmlFor="firstName" className='block text-gray-700 text-sm font-bold mb-2'>First Name</label>
  <input
  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
  type="text"
placeholder='First name'
onChange={changeHandler}
name='firstName'
value={formData.firstName}
id="firstName"
  />
  </div>


  <div>
 <label htmlFor="lastName" className='block text-gray-700 text-sm font-bold mb-2'>Last Name</label>
 <input
  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

 type="text"
 placeholder='Last name'
 onChange={changeHandler}
 name='lastName'
 value={formData.lastName}
 id="lastName"
 />
 </div>


  <div>
 <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email Address</label>
 <input
  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

 type="email"
 placeholder='enter your Email'
 onChange={changeHandler}
 name='email'
 value={formData.email}
 id="email"
 />
 </div>

 <div>
 <label htmlFor="country" className='block text-gray-700 text-sm font-bold mb-2'>Country</label>
 <input
  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

 type="text"
 placeholder='India'
 onChange={changeHandler}
 name='country'
 value={formData.country}
 id="country"
 />
 </div>
 <div>
 <label htmlFor="address" className='block text-gray-700 text-sm font-bold mb-2'>Street Address</label>
 <input
  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

 type="text"
 placeholder='enter your Address'
 onChange={changeHandler}
 name='address'
 value={formData.address}
 id="address"
 />
 </div>
 <div>
<label htmlFor="city" className='block text-gray-700 text-sm font-bold mb-2'>City</label>
<input
  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

 type="text"
 placeholder='enter your City'
 onChange={changeHandler}
 name='city'
 value={formData.city}
 id="city"
 />
 </div>
 <div>
 <label htmlFor="state" className='block text-gray-700 text-sm font-bold mb-2'>State/Province</label>
 <input
  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

 type="text"
 placeholder='Enter Your State'
 onChange={changeHandler}
 name='state'
 value={formData.state}
 id="state"
 />
 </div>
 <div>
 <label htmlFor="zip" className='block text-gray-700 text-sm font-bold mb-2'>Zip/Postal code</label>
 <input
  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

 type="text"
 placeholder='Enter Your Zip Code'
 onChange={changeHandler}
 name='zip'
 value={formData.zip}
 id="zip"
 />
 </div>
 <div className='border-t border-gray-200 pt-4'>
 <h3 className='text-lg font-semibold text-gray-800 mb-2'>By Email</h3>
 <div className='flex items-center mb-2'>
 <input

type='checkbox'
onChange={changeHandler}
name='commentsNotification'
id='commentsNotification'
checked={formData.commentsNotification}
className='mr-2 leading-tight'
 />

<label htmlFor="commentsNotification" className='text-gray-700 text-sm font-bold'>Comments <br /><span className='text-gray-500 font-normal'>Get notified when someone posts a comment on a posting.</span></label>
 </div>
 <div className='flex items-center mb-2'>
 <input
type='checkbox'
onChange={changeHandler}
name='candidatesNotification'
id='candidatesNotification'
checked={formData.candidatesNotification}
className='mr-2 leading-tight'
 />

<label htmlFor="candidatesNotification" className='text-gray-700 text-sm font-bold'>Candidates <br /><span className='text-gray-500 font-normal'>Get notified when a candidate applies for a job.</span></label>
 </div>
 <div className='flex items-center mb-2'>
 <input
type='checkbox'
onChange={changeHandler}
name='otherNotification'
id='otherNotification'
checked={formData.otherNotification}
className='mr-2 leading-tight'
 />

<label htmlFor="otherNotification" className='text-gray-700 text-sm font-bold'>Offers <br /><span className='text-gray-500 font-normal'>Get notified when a candidate accepts or rejects an offer.</span></label>
 </div>
 </div>

 <div className='border-t border-gray-200 pt-4'>
 <h3 className='text-lg font-semibold text-gray-800 mb-2'>Push Notifications</h3>
 <p className='text-gray-600 text-sm mb-2'>These are delivered via SMS to your mobile phone.</p>

 <div className='flex items-center mb-2'>
 <input
type='radio'
onChange={changeHandler}
name='mode'
value='everything'
id='everything'
checked={formData.mode === "everything"}
className='mr-2 leading-tight'
 />

<label htmlFor="everything" className='text-gray-700 text-sm font-bold'>Everything</label>
 </div>


 <div className='flex items-center mb-2'>
 <input
type='radio'
onChange={changeHandler}
name='mode'
value='sameAsEmail'
id='sameAsEmail'
checked={formData.mode === "sameAsEmail"}
className='mr-2 leading-tight'

/>
<label htmlFor="sameAsEmail" className='text-gray-700 text-sm font-bold'>Same as email</label>
 </div>


 <div className='flex items-center mb-2'>
 <input
type='radio'
onChange={changeHandler}
name='mode'
value='noPushNotification'
id='noPushNotification'
checked={formData.mode === "noPushNotification"}
className='mr-2 leading-tight' />
<label htmlFor="noPushNotification" className='text-gray-700 text-sm font-bold'>No push Notifications</label>
 </div>
 </div>

 <div className='border-t border-gray-200 pt-4'>
  <label htmlFor="favCar" className='block text-gray-700 text-sm font-bold mb-2'>Tell me your Favorite Car </label>


  <select
    name="favCar"
    id='favCar'
    value={formData.favCar}
    onChange={changeHandler}
    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
  >
    <option value="">-- Select a car --</option>
    <option value="Scorpio">Scorpio</option>
    <option value="Audi">Audi</option>
    <option value="BMW">BMW</option>
    <option value="Fortuner">Fortuner</option>
    <option value="Thar">Thar</option>
    <option value="Legender">Legender</option>
    <option value="Defender">Defender</option>

  </select>
 </div>

  <div className='mt-6 flex justify-between items-center'>
  <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Save</button>
  {showPreviewButton && (
    <button
      type="button"
      onClick={previewHandler}
      className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
    >
      Preview
    </button>
  )}
  </div>

   </form>

   {showPreviewModal && submittedData && (
     <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center'>
       <div className='bg-white rounded-lg p-8 max-w-md w-full relative'>
         <h2 className='text-xl font-bold text-gray-800 mb-4'>Preview</h2>
         <button onClick={closePreviewModal} className='absolute top-2 right-2 text-gray-600 hover:text-gray-800'>
           <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
         </button>
         <div className='space-y-2'>
           <div><strong>First Name:</strong> {submittedData.firstName}</div>
           <div><strong>Last Name:</strong> {submittedData.lastName}</div>
           <div><strong>Email:</strong> {submittedData.email}</div>
           <div><strong>Country:</strong> {submittedData.country}</div>
           <div><strong>Address:</strong> {submittedData.address}</div>
           <div><strong>City:</strong> {submittedData.city}</div>
           <div><strong>State:</strong> {submittedData.state}</div>
           <div><strong>Zip Code:</strong> {submittedData.zip}</div>
           <div><strong>Comments Notification:</strong> {submittedData.commentsNotification ? 'Yes' : 'No'}</div>
           <div><strong>Candidates Notification:</strong> {submittedData.candidatesNotification ? 'Yes' : 'No'}</div>
           <div><strong>Offers Notification:</strong> {submittedData.otherNotification ? 'Yes' : 'No'}</div>
           <div><strong>Push Notification Mode:</strong> {submittedData.mode}</div>
           <div><strong>Favorite Car:</strong> {submittedData.favCar}</div>
         </div>
       </div>
     </div>
   )}
 </div>
  </div>
 )
}

export default App;