import { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const [service, setService] = useState('');
  const [date, setDate] = useState(new Date());
  const [email, setEmail] = useState('');

  const handleBook = async () => {
    const res = await axios.post('http://localhost:5000/api/create-checkout-session', {
      service,
      date,
      email,
    });
    window.location.href = res.data.url;
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Book a Service</h2>
      <input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} className="border w-full mb-2 p-2" />
      <select onChange={(e) => setService(e.target.value)} className="border w-full mb-2 p-2">
        <option value="">Select a Service</option>
        <option value="Haircut">Haircut</option>
        <option value="Massage">Massage</option>
      </select>
      <DatePicker selected={date} onChange={setDate} className="border w-full mb-2 p-2" />
      <button onClick={handleBook} className="bg-blue-600 text-white py-2 px-4 w-full">
        Book & Pay
      </button>
    </div>
  );
};

export default BookingForm;
