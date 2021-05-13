import React, { Component } from "react";


class UniversityCourses extends Component {
    render(){
    return(
        <div>

<br />
      <div class="content">
        <thead>
                    <th>
                        <a href="http://localhost:3000/ExamSchedule" className="pathway" style={{textDecoration:' none', color:'black'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;المقررات الجامعية</a>
                        <span className="divider">/</span>
                    </th>
                    <th>
                        <a href="http://localhost:3000/con" className="pathway" style={{textDecoration:' none', color:'black'}}>خدمات الطلبة</a>
                        <span className="divider">/</span>
                    </th>
                    <th>
                        <a href="http://localhost:3000/con" className="pathway" style={{textDecoration:' none', color:'black'}}>الخدمات الالكترونية</a>
                        <span className="active"></span>
                    </th>
                </thead>
            
        

<br />
<br />
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;المقررات الجامعية</span>
  </div>
</nav>

<div class="col-md-10 content-top">
  <div class="number">

    <h4 style={{lineHeight:'200%', align:'right'}}>&nbsp;</h4>
    
    <div class="panel panel-info"> 
      <div class="panel-heading"> 
      </div> 

<br />
        <div class="panel-body"> 
          <div class="row">
            <form name="guideform">
              <p align="center">
                <font style={{color:'#000000', size:'3'}}> 

<table style={{width:'100%'}} class="style7" dir="ltr">
  <tr>
    <td class="style70" style={{width:'576px', align:'right', height:'42'}}>
      
    </td>

    <td class="style69" style={{width:'17%', dir:'rtl', align:'right', height:'42'}}>
      <b>
        <font style={{color:'#557D03'}}>
          <span lang="ar-eg">: الكلية</span></font>
          <br />
          <select name='faculty_combo' id='faculty_combo' onchange="getdep(this.value)">
        <option value=''></option>
        <option value='16'>كلية الحاسبات والمعلومات</option>
      </select>
      </b>
    </td>
  </tr>

  <tr>
    <td class="style3" style={{width: '576px',  align:'right', height:'40'}}>
      <div id="dep_td" class="style70"></div>
    </td>

    <td class="style69" style={{width: '17%', dir:'rtl', align:'right', height:'40'}}>
      <b>
        <font color="#557D03">
          <span lang="ar-eg">: القسم</span></font>
          <br />
          <select name='faculty_combo' id='faculty_combo' onchange="getdep(this.value)">
        <option value=''></option>
        <option value='01'>نظم المعلومات</option>
        <option value='02'>علوم الحاسب</option>
        </select>
      </b>
    </td>
  </tr>

  <tr>
    <td class="style3" style={{width: '576px',  align:'right', height:'40'}}>
      <div id="term_td" class="style70">
      </div>
    </td>

    <td class="style69" style={{width: '17%', dir:'rtl', align:'right', height:'40'}}>
      <b>
        <font color="#557D03">
          <span lang="ar-eg">: المرحلة الدراسية</span></font>
          <select name='faculty_combo' id='faculty_combo' onchange="getdep(this.value)">
        <option value=''></option>
        <option value='01'>الفصل الدراسي الأول</option>
        <option value='02'>الفصل الدراسي الثاني</option>
        <option value='03'>الفصل الدراسي الأول دراسات عليا</option>
        <option value='04'>الفصل الدراسي الثاني دراسات عليا</option>
        </select>
      </b>
    </td>
  </tr>

  <tr>
    <td class="style6" style={{width: '576px',  align:'right', height:'28'}}> 
      <div id="sec_td" class="style70">
      </div>
    </td>

    <td class="style69" style={{width: '17%', dir:'rtl', align:'right', height:'28'}}>
      <b>
        <font color="#557D03">
          <span lang="ar-eg">: المقرر</span></font>
          <br />
          <select name='faculty_combo' id='faculty_combo' onchange="getdep(this.value)">
        <option value=''></option>
        <option value='01'>مفاهيم قواعد البيانات</option>
        <option value='02'>أمن المعلومات</option>
        </select>
        
      </b>
    </td>
  </tr>

  <tr>
    <td class="style70" style={{width: '576px',  align:'right'}}>&nbsp; 
    </td>

    <td class="style5" style={{width: '17%', dir:'rtl', align:'right'}}>&nbsp;
    </td>
  </tr>

  <tr>
    <td class="style8" colspan="2">&nbsp; 
    </td>
  </tr>

  <tr>
    <td class="style8"  id="search_td"  colspan="2"> 
    </td>
  </tr>
 </table>
</font></p>
</form>
    </div>
    </div> 

    </div>

          

          
</div>

  </div>































































    <hr/>
<footer>
  <div className="footer-top">
    <div className="container">

      <div className="pull-right">
        <div className="date-today"></div>
      </div>
      <div className="pull-left">
        <a href="#" className="scrollup main-background" style={{display:'block'}}>
          <span className="fa fa-arrow-up">..</span>
          <p>الاعلى</p>
        </a>
      </div>

    </div>    
  </div>



<hr/>
  <div className="footer-down">
    <div className="container">

    <footer id="site-footer">
      <footer id="footer-content">
        <div className="row">
          <div className="col-sm-9">
            <nav id="footer-nav">
              <table>
                <thead>

                  <th>
                    <a href="#" style={{textDecoration:' none', color:'black',fontFamily:'serif'}}> Egypt - Ismailia - Kilo Ring Road 4.5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                  </th>

                  <th>
                    <a href="#" style={{textDecoration:' none', color:'black',fontFamily:'serif'}}> Phone: (+2064) 3223007 - 32001258 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                  </th>

                  <th>
                    <a href="#" style={{textDecoration:' none', color:'black',fontFamily:'serif'}}> Fax:  (+202) 22621217 - (+2064) 3205208 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                  </th>

                  <th>
                    <a href="#" style={{textDecoration:' none',color:'black',fontFamily:'serif'}}> President_office@suez.edu.eg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                  </th>

                </thead>
                </table>       
            </nav>
          </div>

          <div className="col-sm-3">
            <p className="text-left">    </p>
          </div>
          <br />
          <br />
          <div className="under" >
<nav className="navbar navbar-expand-lg navbar-hight bg-light">
  <div className="container-fluid">
    <h5></h5>
  </div>
</nav>
    </div>
        </div>
      </footer>
    </footer>



    </div>
  </div>
</footer>





    </div>






        </div>
    );
    }
}
export default UniversityCourses;