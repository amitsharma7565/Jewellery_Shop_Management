import React, { useState, useEffect } from "react";

function Vendor() {
    const vendorList = [{ name: 'Amit Sharma', id: '4858565252', lotId: '4858565252', type: 'Gold' },
    { name: 'Sanjay', id: '4858565251', lotId: '4858565251', type: 'Silver' },
    { name: 'Akshay', id: '4858565253', lotId: '4858565253', type: 'Platinum' },
    { name: 'Pradeep Negi', id: '4858565254', lotId: '4858565254', type: 'Diamond' }]

    const [vendors, setVendors] = useState(vendorList);
    const [searchVal, setSearchVal] = useState("");



    // useEffect(() => {
    //     const filteredVendors = searchVal.trim()
    //       ? vendorList.filter((vendor) => {
    //           const searchTermLower = searchVal.toLowerCase();
    //           return (
    //             vendor.name.toLowerCase().includes(searchTermLower) ||
    //             vendor.id.includes(searchTermLower) ||
    //             vendor.lotId.includes(searchTermLower) ||
    //             vendor.type.toLowerCase().includes(searchTermLower)
    //           );
    //         })
    //       : vendorList;
    //     setVendors(filteredVendors);
    //   }, [searchVal, vendorList]);

    const handleSearch = () => {
        if (searchVal.trim() === '') {
            setVendors(vendorList);
        }
        else {
            const filteredVendors = vendorList.filter((vendor) => {
                const serachTerm = searchVal.toLowerCase();
                return (
                    vendor.name.toLowerCase().includes(serachTerm) ||
                    vendor.id.includes(serachTerm) ||
                    vendor.lotId.includes(serachTerm) ||
                    vendor.type.toLowerCase().includes(serachTerm)
                );
            });
            setVendors(filteredVendors);
        }
    };

    return (
        <div className="container">
            <header>
                <div className="logo">JSMS</div>
                <div className="dashboard-title">Dashboard</div>
                <div className="vendor-list-title">Vendor's List</div>
            </header>
            <main>
                <div className="search-bar">
                    <input type="text" placeholder="Search for the vendor"
                        onChange={e => setSearchVal(e.target.value)} />

                    <button onClick={handleSearch} >Search</button>
                </div>
                <button
                    //   onClick={handleAddVendor}
                    className="add-vendor-button">Add Vendor</button>
                <div className="vendor-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Vendor Name</th>
                                <th>Vendor ID</th>
                                <th>Lot ID</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendors.map((vendor) => (
                                <tr key={vendor.id}>
                                    <td>{vendor.name}</td>
                                    <td>{vendor.id}</td>
                                    <td>{vendor.lotId}</td>
                                    <td>{vendor.type}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}


export default Vendor;