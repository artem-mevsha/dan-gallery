# Danyil Boyarchuk gallery application

Web-site for demonstration photo galleries by Dan Boyarchuk. Simple managing from admin panel, easy photos uploading.

### Using technologies

Frontend - HAML, SCSS, jquery, turbolinks, magnific-popup, jscrollpane

Backend - ruby 2.3.0, rails 4.2.0, sqlite, active_admin, image magick, carrierwave

### Deploying

- Install [imagemagick](http://www.imagemagick.org/) on your PC
- Install [RVM](https://rvm.io/rvm/install)
- Use RVM verion 2.2.1
```
rvm install 2.3.0; rvm use 2.3.0 --default; ruby -v
```
- Install gems and make DB migration in project directory
```
bundle install
rake db:create
rake db:migrate
```
- Start your server
```
rails s
```
