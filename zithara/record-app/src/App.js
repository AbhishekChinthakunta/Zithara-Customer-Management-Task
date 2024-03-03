import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/employee`, {
          params: { page, sortBy, search },
        });
        const data = await response.data;
        setEmployee(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmployee();
  }, [page, sortBy, search]);

  return (
    <div className="container mt-5">
    <h2>Customer Management Data</h2><br/>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by Name or Location"
        className="form-select mb-3"
      />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="form-container mb-4"
      >
        <option value="created_at">Sort by Date</option>
        <option value="created_at_time">Sort by Time</option>
      </select>
      <table className="table table-striped-alt">
        <thead className="bg-secondary text-light">
          <tr>
            <th>S.No.</th>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employees, index) => (
            <tr key={index}>
              <td>{employees.sno}</td>
              <td>{employees.customer_name}</td>
              <td>{employees.age}</td>
              <td>{employees.phone}</td>
              <td>{employees.location}</td>
              <td>{employees.created_at}</td>
              <td>{employees.created_at_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        className="btn btn-success me-2"
      >
        Previous Page
      </button>
      <button
        onClick={() => setPage((prevPage) => prevPage + 1)}
        className="btn btn-success"
      >
        Next Page
      </button>
    </div>
  );
};

export default App;
