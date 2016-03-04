<?php
  include('header.php')
?>
  <div class="row" style="padding-top:50px;padding-bottom:50px;">
    <div class="large-6 columns formelement" id="form">
      <div class="large-12 columns">
        <h4>1. Copy & paste CSV data here</h4>
        <div class="large-12 columns">
          <label>
            <textarea placeholder="None" style="height:200px;" id="pastedata"></textarea>
          </label>
        </div>
        <h4>2. Select type of chart</h4>
        <div class="large-12 columns">
          <label>
            <select name="chartType" id="chartType">
              <option value="column" selected="selected">Column</option>
              <option value="line">Line</option>
              <option value="area">Area</option>
              <option value="areaspline">Area Spline</option>
              <!-- <option value="pie">Pie</option> -->
              <option value="scatter">Scatter</option>
              <option value="spline">Spline</option>
              <!-- <option value="heatmap">Heatmap</option> -->
              <!-- <option value="Pyramid">Pyramid</option> -->
              <!-- <option value="bubble">Bubble</option> -->
              <!-- <option value="bar">Bars</option> -->
              <!-- <option value="dots" disabled>Dots</option> -->
            </select>
          </label>
        </div>
      </div>
      <div class="large-12 columns">
        <h4>3. Title & subtitle/source</h4>
        <div class="large-12 columns">
          <input type="text" id="title" name="title" placeholder="Title"></input>
        </div>
        <div class="large-12 columns">
          <input type="text" id="source" name="source" placeholder="Source"></input>
        </div>
        <h4>4. Define xAxis/yAxis title, tooltip prefix/suffix</h4>
        <div class="large-8 columns">
          <input type="text" id="xAxistitle" name="xAxistitle" placeholder="xAxis title"></input>
        </div>
        <div class="large-4 columns">
          <label>
            <select name="xAxisStatus" id="xAxisStatus">
              <option value="true" selected="selected">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
        </div>
        <div class="large-12 columns">
          <input type="text" id="yAxistitle" name="yAxistitle" placeholder="yAxis title"></input>
        </div>
        <div class="large-6 columns">
          <input type="text" id="prefix" name="prefix" placeholder="Prefix"></input>
        </div>
        <div class="large-6 columns">
          <input type="text" id="suffix" name="suffix" placeholder="Suffix"></input>
          <!-- <label>
            <s>Min</s>
            <input type="number" value="100">
          </label>
          <label>
            <s>Max</s>
            <input type="number" value="100">
          </label> -->
        </div>
      </div>
    </div>    
    <div class="large-6 columns">
      <div id="container" style="width:100%"></div>
      <a href="#" class="button" onclick="generateHTML()">Generate chart</a>
      <div class="callout">
        <p>Charts currently live on /charts/titlename.html</p>
        <p>This tool is for TESTING purposes only</p>
      </div>
      <!-- <div class="callout" id="rendered"> -->
      </div>
    </div>
  </div>

  <!-- <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div> 
  <div class="large-12 columns">
      <textarea id="pastedata" style="height:400px; width:600px;"></textarea>
  </div> -->
  
    

<?php
  include('footer.php')
?>
