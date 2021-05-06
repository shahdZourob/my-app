import React, { Component } from "react";



class GradeFourISExamSchedule extends Component {
    render(){
    return(
        <div>
            <br />
            <h5 className="text-black text-center"> جدول امتحانات منتصف الفصل الدراسي الثاني للعام الدراسي 2020-2021 </h5>
            <h5 className="text-black text-center"> (الفرقة الرابعة نظم المعلومات)</h5>

<br />
<table className="table table-bordered table-secondary">
<thead>
    <tr>
      <th scope="col">Today</th>
      <th scope="col">Subject</th>
      <th scope="col">Course professor</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Monday<br /> 26/4/2021</th>
      <td>Electronic health</td>
      <td>Dr.Mohamed Abdallah</td>
      <td>10-11.30</td>
    </tr>
    <tr>
      <th scope="row">Thusday<br />27/4/2021</th>
      <td>Expert systems</td>
      <td>Dr.Bn Billa Tawfiq</td>
      <td>10-11.30</td>
    </tr>
    <tr>
    <th scope="row">Wednesday<br />28/4/2021</th>
      <td>Geographic information systems</td>
      <td>Dr.Bn Billa Tawfiq</td>
      <td>10-11</td>
    </tr>
    <tr>
    <th scope="row">Thusday<br />4/5/2021</th>
      <td>Data warehouses</td>
      <td>Dr.Osama Farouq</td>
      <td>10-11.30</td>
    </tr>
    <tr>
    <th scope="row">Wednseday<br />5/5/2021</th>
      <td>Distributed databases</td>
      <td>Dr.Hossam Refaat</td>
      <td>10-11</td>
    </tr>
  </tbody>
    
</table>

<br />
<h5 className="text-black text-center"> الامتحانات تتم أون لاين بمعرفة أستاذ المقرر طبقا للجدول بناء على قرار مجلس الكلية</h5>

<br />














        </div>
    );
    }
}
export default GradeFourISExamSchedule;