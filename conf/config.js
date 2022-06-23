// Your site title (format: page_title - site_title)
site_title: '__TITLE__',
// The base URL of your site (can use  in Markdown files)
base_url: '',
// Used for the "Get in touch" page footer link
support_email: 'support@__DOMAIN__',
// Footer copyright content
copyright: 'Copyright &copy; __TITLE__',
// Excerpt length (used in search)
excerpt_length: 400
// Which Theme to Use?
theme_dir  : path.join(__dirname, '..', 'themes'),
theme_name : 'default',

// Specify the path of your content folder where all your '.md' files are located
// Fix: Needs trailing slash for now!
// Fix: Cannot be an absolute path
content_dir : path.join(__dirname, '__DATADIR__/content'),

  // Where is the public directory or document root?
  public_dir  : path.join(__dirname, '..', 'themes', 'default', 'public'),
// The base URL of your images folder,
// Relative to config.public_dir
// (can use %image_url% in Markdown files)
image_url: '__DATADIR__/images',
// Set to true to enable the web editor
 allow_editing : true,
// Set to true to enable HTTP Basic Authentication
authentication : true,
// If editing is enabled, set this to true to only authenticate for editing, not for viewing
authentication_for_edit: true,
// If authentication is enabled, set this to true to enable authentication for reading too
authentication_for_read: false,

secret: 'someCoolSecretRightHere',

credentials    : [
  {
    username : '__ADMIN__',
    password : '__PASSWORD__'
  }
],

locale: '__LANGUAGE__',
