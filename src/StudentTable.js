export default function StudentTable() {
    return (
        <div>
            <h2 className="container"> Student Records</h2>
            <div className="table-container">
              <a  href="#" class="btn btn-add">Add new student</a>
              <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>place</th>
                        <th>phone</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>swetha</td>
                        <td>vizag</td>
                        <td>98765443322</td>
                        <td>
                            <a href="" className="btn">View</a>
                            <a href="" className="btn">Edit</a>
                            <a href="" className="btn">delete</a>
                        </td> 
                    </tr>
                </tbody>
              </table>
            </div>
        </div>
    )
}