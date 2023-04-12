import React from 'react'
import Nav from './Nav'

const Students = () => {
    return (
        <div>
            <Nav />
            <div className="addStudent">
                <span><h1>Student Details</h1></span>
                <span><button>Add New Student</button> </span>
            </div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </thead>
                <tr>
                    <td>John</td>
                    <td>32</td>
                    <td>Mern</td>
                    <td>October</td>
                    <td><a href="/#">Edit</a></td>
                </tr>
                <tr>
                    <td>Deo</td>
                    <td>24</td>
                    <td>Mern</td>
                    <td>November</td>
                    <td><a href="/#">Edit</a></td>
                </tr>
                <tr>
                    <td>Biden</td>
                    <td>26</td>
                    <td>Mern</td>
                    <td>September</td>
                    <td> <a href="/#"> Edit </a></td>
                </tr>
                <tr>
                    <td>Merlyn</td>
                    <td>24</td>
                    <td>Mern</td>
                    <td>April</td>
                    <td><a href="/#">Edit</a></td>
                </tr>
                <tr>
                    <td>Suzan</td>
                    <td>28</td>
                    <td>Mern</td>
                    <td>June</td>
                    <td><a href="/#">Edit</a></td>
                </tr>
                <tr>
                    <td>Deo</td>
                    <td>25</td>
                    <td>Mern</td>
                    <td>March</td>
                    <td><a href="/#">Edit</a></td>
                </tr>
            </table>
        </div>
    )
}

export default Students
