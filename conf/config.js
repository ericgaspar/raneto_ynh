// Your site title (format: page_title - site_title)
site_title: 'Example Site',
// The base URL of your site (can use  in Markdown files)
base_url: '',
// Used for the "Get in touch" page footer link
support_email: 'support@example.com',
// Footer copyright content
copyright: 'Copyright &copy; Example Site',
// Excerpt length (used in search)
excerpt_length: 400
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
