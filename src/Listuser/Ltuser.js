import React from "react";

export class Listform extends React.Component {

    render() {
        return (
            <>
            <h1>USER LIST</h1>
                        <table class="table border border-4 ">
                            <thead>
                                <tr>
                                    <th scope="col">s.no</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">password</th>  
                                    <th scope="col">Date</th>
                                    <th scope="col">Option</th>
                                     {/* <th scope="col">city</th>*/}
                                    {/* <th scope="col">Address</th> */}

                                </tr>
                            </thead>
                            <tbody>
                                {this.props?.userDataList?.map((pass, i) =>
                                    <tr>
                                        <th>{1 + i}</th>
                                        <td>{pass.firstname}</td>
                                        <td>{pass.lastname}</td>
                                        <td>{pass.number}</td>
                                        <td>{pass.email}</td>
                                        <td>{pass.password}</td>
                                        <td>{pass.date}</td>
                                        <td><button>Delete</button></td>
                                        
                                        {/* <td>{pass.city}</td> */}
                                       
                                        {/* <td>{pass.address}</td> */}

                                    </tr>
                                )} 
                            </tbody>
                        </table>
            </>
        )
    }
}
export default Listform;