# Navplate
A navigation component.

# Getting Started
You can either download a copy of the source files or install Navplate via Bower.

```
bower install navplate
```

Start by including the necessary files.

```
<head>
   <link href="css/navplate.css" rel="stylesheet" type="text/css">
</head>
<body>
   <script src="js/min/navplate.js"></script>
</body>
```

# HTML Example
There are two different navigations types (more to come), but both use the same basic HTML. You require the trigger that will open the navigation and the actual navigation list. See an example below.

```
<a href id="nav-trigger" data-nav-link="#nav-example">Open Navigation</a>
<div id="nav-example">
   <ul>
      <li><h6>Navigation</h6></li>
      <li><a href="#">Link One</a></li>
      <li><a href="#">Link Two</a></li>
      <li><a href="#">Link Three</a></li>
      <li><a href="#">Link Four</a></li>
      <li><a href="#">Link Five</a></li>
   </ul>
</div>
```

# Execute Via Javascript
Use the following example to trigger the navigation component.

```
<script>
new navplate('#nav-trigger');
</script>
```

# Javascript Options
There are a few options that allow changing the navigation type and your desired reveal.

Name | Default | Options | Description
---- | ---- | ---- | ----
type | slide | slide, fullscreen | This determines the type of navigation you want to use.
active | small | small, large, always | Determine when you want the navigation to be active.
clone | false | true, false | Clone the navigation HTML and use that for the component or if false use the designated HTML.
close | close | | You can decide what you want the close text to say.
reveal | left | left, right, top, bottom | Set the direction from which the navigation appears. **NOTE** that the bottom and top option only applies to the **fullscreen** navigation type.
