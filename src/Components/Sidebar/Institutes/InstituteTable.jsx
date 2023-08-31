import React, {useState} from 'react'
import DataTable from 'react-data-table-component'
import { Outlet } from 'react-router-dom'

const InstituteTable = () => {

  const customStyle={
      headRow:{
        style:{
          backgroundColor:'#105D50',
          color:'#fff', 
        }
      },
    }

  const columns = [
      
      {
          name:"Serial Number",
          selector: row => row.serialnumber
      },
      {
          name:"Institute Name",
          selector: row => row.institutename
      },
      {
          name:"Institute ID",
          selector: row => row.instituteid
      },
      {
          name:"Institute Type",
          selector: row => row.institutetype
      },
      {
          name:"Email ID",
          selector: row => row.emailid
      },
      {
          name:"Mobile Number",
          selector: row => row.mobilenumber
      },
      {
          name:"Point of Contact",
          selector: row => row.pointofcontact
      },
      {
          name:"Created at",
          selector: row => row.createdat
      },
      {
          name:"VR",
          selector: row => row.vr
      },
      {
          name:"Space Used",
          selector: row => row.spaceused
      },
      {
          name:"Disk space",
          selector: row => row.diskspace 
      },
      {
        name:"Status",
        selector: row => row.status
    },
    {
        name:"Actions",
        selector: row => row.actions 
    }

  ]

  const data = [

      {
        serialnumber : 1,
        institutename : "institute name",
        instituteid : 1234,
        institutetype : "name",
        emailid : "enter mail id",
        mobilenumber : 9856487965,
        pointofcontact : "point of contact name",
        createdat : "created at",
        vr : "VR",
        spaceused : "spaceused",
        diskspace : "diskspace",
        status : "toggle",
        actions : "action"
      },

      {
        serialnumber : 2,
        institutename : "institute name",
        instituteid : 1235,
        institutetype : "name",
        emailid : "enter mail id",
        mobilenumber : 9856487965,
        pointofcontact : "point of contact name",
        createdat : "created at",
        vr : "VR",
        spaceused : "spaceused",
        diskspace : "diskspace",
        status : "toggle",
        actions : "action"
      }
  ]

  const[records,setRecords]=useState(data);

  function handleFilter(event){
    const newData = data.filter(row=>{
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }

return (

  <div style={{width:'75%',transform:'translateY(15%)',translate:'25%'}}>
      
      <div className='overflow-x-auto max-w-full'> 
      <div className=' text-end'>
      <input type="text" placeholder='Search' className='bg-gray-100 w-64 px-3 p-3 my-5 border-none outline-none rounded-md text-sm hover:bg-gray-200' onChange={handleFilter}/>
      <button className='bg-greenbg p-3 px-9 rounded-md mx-2 text-sm text-white hover:bg-yellow'>Search</button>
      <button className='bg-greenbg p-3 px-4 rounded-md mx-2 text-sm text-white hover:bg-yellow'>Add Institutes</button>

      </div>

          <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
          customStyles={customStyle}
          
          />
      
      </div>

      <Outlet/>
  </div>
)
}

export default InstituteTable;