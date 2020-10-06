<template>
  <div class="container" style="margin-top:5em;">
    <div class="row" style="background:#fbfbfb;padding:3em 0;">
      <div class="col-lg-6 col-md-12">
         <img :src="require('@/assets/group.png')" style="width:80%;display:block;margin:0 auto;" alt="blueimg" />
      </div>
      <div class="col-lg-6 col-md-12">
        <div style="margin-top:1em;">
          <h1 style="font-weight:800;text-align:left;">Learn Better Together</h1>
          <br>
          <ul style="font-weight:500;font-size:1.5em;">
            <li>Designed for parallel and distributed computing</li>
            <li>Code optimization</li>
            <li>Fast and Reliable</li>
          </ul>
          <br>
          <div style="text-align:center;">
            
            <br><br>
            <router-link to="/variables"><button class="btn btn-outline-success" style="font-size:1.5em;"  >Get Started</button></router-link>
          </div>
        </div>
      </div>
    </div>
    
    <br/>

    <div class="row wrap">
      <div class="col-lg-6 col-md-12" style="padding:1em;">
        <!-- <div style="padding:2em;width:auto;background:#eee;box-shadow: 5px 7px;"> -->
        <div>
          <div class="card-title" style="font-weight:800;font-size:2em;">INTRODUCTION</div>
            <div class="card-body">
              <p style="font-weight:500;font-size:0.88em;text-justify:inter-word;text-align:justify" id="intro">
                Julia is an open-source high-level, dynamic programming language, used for statistical computing,scientific research, data modelling, graphical representation.
                It was under development in 2009, by Jeff Bezanson, Stefan Karpinski, Viral B. Shah, and Alan Edelman, who set out to create a free language that was both high-level and fast.
                On February 14, 2012 , the team launched a website with a blog post explaining the language's mission.Julia's core is implemented in Julia and C, together with C++ for the LLVM dependency.
                The LLVM compiler infrastructure project is used as the back end for generation of 64-bit or 32-bit optimized machine code depending on the platform Julia runs on.
              </p>
            </div>
         </div>
      </div>
      <div class="col-lg-6 col-md-12" style="padding:1em;">
        <img src="julia.png"  alt = "download" style="padding:1em;width:70%;height:auto;margin:0 auto;display:block;">
      </div>
    </div>

    <div class="row wrap">
      <div class="col-lg-6 col-md-12" style="padding:1em;">
        <img src="download.png" alt = "download" style="padding:1em;width:100%;height:auto;margin:0 auto;display:block;">
      </div>
      <div class="col-lg-6 col-md-12" style="padding:1em;">
        <!-- <div style="padding:2em;width:auto;background:#eee;box-shadow: 5px 7px;"> -->
        <div>
          <div class="card-title" style="font-weight:800;font-size:2em;">INSTALLATION</div>
            <div style="padding:2em;background-color:#efefef;">
              <ul type="square">
                <li>Download Julia and run the .exe file</li>
                <li>Proceed with installation and click finish.</li>
                <br/>
                <a href="https://julialang.org/downloads/"  style="text-decoration:none"><button class="btn btn-info btn-lg">Click here to download</button></a>
              </ul>
            </div>
         </div>
      </div>
    </div>

  </div>
</template>
