import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rb-header',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Recipe Book</a>
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Shopping Lists</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">User <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Login</a></li>
                <li><a href="#">Other</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Log Out</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}